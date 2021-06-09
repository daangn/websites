module.exports = {
  plugins: [
    {
      resolve: "@karrotmarket/gatsby-theme-global-website",
      options: {
        lang: "en-us",
        hot_articles_api:
          "https://us.karrotmarket.com/hot_articles.json?limit=6",
      },
    },
  ],
};
