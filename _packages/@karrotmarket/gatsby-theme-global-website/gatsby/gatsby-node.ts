import type { GatsbyNode } from "gatsby";
import axios from "axios";

type LocaleType = "en-gb" | "en-us" | "en-ca" | "ja-jp";

const CURRENCY_SIGN: { [i in LocaleType]: string } = {
  "en-gb": "GBP",
  "en-us": "USD",
  "en-ca": "USD",
  "ja-jp": "JPY",
};

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

export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] = ({
  Joi,
}) => {
  return Joi.object({
    locale: Joi.string().required().description(`prismic locale 값`),
    hot_articles_api: Joi.string()
      .default("https://uk.karrotmarket.com/hot_articles.json?limit=6")
      .description(`인기매물 api`),
  });
};

export const sourceNodes: GatsbyNode["sourceNodes"] = async (
  { actions, createNodeId, createContentDigest },
  options
) => {
  const { createNode } = actions;

  const fetchHotArticles = () => axios.get(options.hot_articles_api as string);
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
      price: Number(article.price).toLocaleString(
        options.locale as LocaleType,
        {
          style: "currency",
          currency: CURRENCY_SIGN[options.locale as LocaleType],
        }
      ),
    });
  });

  return;
};

export const createPages: GatsbyNode["createPages"] = (
  { actions },
  options
) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/components/_pages/index.tsx"),
    context: {
      lang: options.locale || "en-gb",
    },
  });
  actions.createPage({
    path: "/about",
    component: require.resolve("./src/components/_pages/about.tsx"),
    context: {
      lang: options.locale || "en-gb",
    },
  });
};
