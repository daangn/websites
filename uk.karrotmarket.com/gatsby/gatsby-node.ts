import type { GatsbyNode } from "gatsby";
import axios from "axios";

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  const fetchPopularItems = () =>
    axios.get("https://uk.karrotmarket.com/hot_articles.json?limit=6");
  const res = await fetchPopularItems();
  res.data.articles.map((item) => {
    createNode({
      id: createNodeId(`PopularItem - ${item.id}`),
      parent: `__SOURCE__`,
      internal: {
        type: `PopularItem`,
        contentDigest: createContentDigest(item),
      },
      children: [],

      image: item.first_image.file,
      region: item.region.fullname,
      price: `£ ${Number(item.price)}`,
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
