import type { GatsbyNode } from "gatsby";
import got from "got";

type LocaleType = "en-gb" | "en-us" | "en-ca" | "ja-jp";

const CURRENCY_SIGN: { [i in LocaleType]: string } = {
  "en-gb": "GBP",
  "en-us": "USD",
  "en-ca": "USD",
  "ja-jp": "JPY",
};

const DATE_FORMAT: { [i in LocaleType]: string } = {
  "en-gb": "MMM D, y",
  "en-us": "MMM D, y",
  "en-ca": "MMM D, y",
  "ja-jp": "Y.M.D",
};

interface Article {
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
    locale: Joi.string()
      .required()
      .default("en-gb")
      .description(`prismic locale 값`),
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

  const response = await got<{ articles: Article[] }>(
    options.hot_articles_api as string,
    {
      responseType: "json",
    }
  );

  response.body.articles.map((article) => {
    createNode({
      id: createNodeId(`HotArticle - ${article.id}`),
      parent: `__SOURCE__`,
      internal: {
        type: `HotArticle`,
        contentDigest: createContentDigest(article),
      },
      articleId: article.id,
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
      lang: options.locale,
    },
  });
  actions.createPage({
    path: "/about",
    component: require.resolve("./src/components/_pages/about.tsx"),
    context: {
      lang: options.locale,
      dateFormat: DATE_FORMAT[options.locale as LocaleType],
    },
  });
};
