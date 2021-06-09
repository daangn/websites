module.exports = {
  plugins: [
    {
      resolve: "@karrotmarket/gatsby-theme-global-website",
      options: {
        lang: "en-ca",
        hot_articles_api:
          "https://ca.karrotmarket.com/hot_articles.json?limit=6",
      },
    },
  ],
};
