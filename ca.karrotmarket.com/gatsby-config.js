const siteMetadata = {
  siteUrl: "https://uk.karrotmarket.com/",
  siteName:
    "Karrot - Your Local Buying &amp; Selling Community for Verified Locals",
  description:
    "Karrot - the app for verified locals to buy &amp; sell. See what&#39;s for offer today!",
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
        locale: "en-ca",
        hot_articles_api:
          "https://ca.karrotmarket.com/hot_articles.json?limit=6",
      },
    },
  ],
};
