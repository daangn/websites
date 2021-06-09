module.exports = {
  plugins: [
    {
      resolve: "@karrotmarket/gatsby-theme-global-website",
      options: {
        lang: "en-gb",
        hot_articles_api:
          "https://uk.karrotmarket.com/hot_articles.json?limit=6",
      },
    },
  ],
};
