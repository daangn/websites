import type { GatsbyNode } from "gatsby";
import got from "got";

const locales = ['en-gb', 'en-us', 'en-ca', 'ja-jp'] as const;
type Locale = typeof locales[number];

const CURRENCY: Record<Locale, string> = {
  "en-gb": "GBP",
  "en-us": "USD",
  "en-ca": "CAD",
  "ja-jp": "JPY",
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

type PluginOptions = {
  locale: Locale,
  hot_articles_api: string,
  hot_articles_api_special_key?: string,
};

export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] = ({
  Joi,
}) => {
  return Joi.object({
    locale: Joi.string()
      .valid(...locales)
      .required()
      .default("en-gb")
      .description(`prismic locale 값`),
    hot_articles_api: Joi.string()
      .default("https://webapp.uk.karrotmarket.com/hot_articles.json?limit=6")
      .description(`인기매물 api`),
    hot_articles_api_special_key: Joi.string()
      .description('Bot 차단 우회용 Secret')
      .optional(),
  });
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
    type HotArticle implements Node {
      articleId: String
      image: String
      email: String
      region: String
      price: String
    }
  `;
    createTypes(typeDefs);
  };

export const sourceNodes: GatsbyNode["sourceNodes"] = async (
  { actions, createNodeId, createContentDigest },
  options
) => {
  // must be validated by pluginOptionsSchema
  const pluginOptions = options as unknown as PluginOptions;
  const {
    locale,
    hot_articles_api,
    hot_articles_api_special_key = process.env.HOT_ARTICLE_API_SPECIAL_KEY,
  } = pluginOptions;

  const { createNode } = actions;

  const response = await got<{ articles: Article[] }>(
    hot_articles_api,
    {
      responseType: "json",
      headers: {
        ...hot_articles_api_special_key && {
          'x-special-key': hot_articles_api_special_key,
        },
      },
    },
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
      price: new Intl.NumberFormat(locale, {
        style: "currency",
        currency: CURRENCY[locale],
      }).format(+article.price),
    });
  });

  return;
};

export const onCreatePage: GatsbyNode["onCreatePage"] = (
  { page, actions },
  options
) => {
  const { locale } = options as unknown as PluginOptions;
  const { createPage, deletePage } = actions;
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      locale,
    },
  });
};
