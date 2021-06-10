const siteMetadata = {
  siteUrl: "https://jp.karrotmarket.com/",
  siteName: "お住まいのまちのキャロット（Karrot）",
  description:
    "お住まいのまちのフリマアプリ、Karrot(キャロット)！ご近所さんと心あたたまる取引をしませんか？",
};

module.exports = {
  flags: {
    FAST_DEV: true,
    QUERY_ON_DEMAND: true,
    LAZY_IMAGES: true,
    PARALLEL_SOURCING: true,
  },
  siteMetadata,
  plugins: [
    "gatsby-plugin-concurrent-mode",
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
      resolve: "@karrotmarket/gatsby-theme-global-website",
      options: {
        lang: "ja-jp",
      },
    },
  ],
};
