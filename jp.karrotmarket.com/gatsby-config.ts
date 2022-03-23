import type { GatsbyConfig } from "gatsby";

const siteMetadata = {
  siteUrl: "https://jp.karrotmarket.com/",
  siteName: "お住まいのまちのキャロット（Karrot）",
  description:
    "お住まいのまちのフリマアプリ、Karrot(キャロット)！ご近所さんと心あたたまる取引をしませんか？",
};

const config: GatsbyConfig = {
  ...(process.env.ASSET_PREFIX && {
    assetPrefix: process.env.ASSET_PREFIX,
  }),
  siteMetadata,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.siteName,
        start_url: "/",
        background_color: "#FFFFFF",
        icon: "src/assets/favicon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["GTM-KT237BF"],
        pluginConfig: {
          exclude: ["/preview/**"],
        },
      },
    },
    {
      resolve: "@karrotmarket/gatsby-theme-global-website",
      options: {
        locale: "ja-jp",
        hot_articles_api:
          "https://webapp.jp.karrotmarket.com/hot_articles.json?limit=6",
      },
    },
    "@karrotmarket/gatsby-theme-prismic",
  ],
};

export default config;
