import type { GatsbyNode } from "gatsby";
import axios from "axios";

interface HotArticle {
  id: string;
  first_image: {
    file: string;
  };
  region: {
    fullname: string;
  };
  price: string;
}

export const sourceNodes: GatsbyNode["sourceNodes"] = async (
  { actions, createNodeId, createContentDigest },
  options
) => {
  const { createNode } = actions;

  const fetchHotArticles = () =>
    axios.get(
      (options.hot_articles_api as string) ||
        "https://uk.karrotmarket.com/hot_articles.json?limit=6"
    );
  const res = await fetchHotArticles();
  res.data.articles.map((article: HotArticle) => {
    createNode({
      id: createNodeId(`HotArticle - ${article.id}`),
      parent: `__SOURCE__`,
      internal: {
        type: `HotArticle`,
        contentDigest: createContentDigest(article),
      },
      children: [],

      image: article.first_image.file,
      region: article.region.fullname,
      price: `£ ${Number(article.price)}`,
    });
  });

  return;
};

export const onCreateBabelConfig: GatsbyNode["onCreateBabelConfig"] = ({
  actions,
}) => {
  actions.setBabelPlugin({
    name: require.resolve("@babel/plugin-transform-react-jsx"),
    options: {
      runtime: "automatic",
    },
  });

  actions.setBabelPlugin({
    name: require.resolve("babel-plugin-polished"),
    options: {},
  });
};

export const createPages: GatsbyNode["createPages"] = (
  { actions },
  options
) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/components/_pages/index.tsx"),
    context: {
      lang: options.lang || "en-gb",
    },
  });
  actions.createPage({
    path: "/about",
    component: require.resolve("./src/components/_pages/about.tsx"),
    context: {
      lang: options.lang || "en-gb",
    },
  });
};
