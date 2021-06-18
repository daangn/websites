"use strict";

exports.__esModule = true;
exports.default = void 0;
const siteMetadata = {
  siteUrl: "https://uk.karrotmarket.com/",
  siteName: "Karrot - Your Local Buying &amp; Selling Community for Verified Locals",
  description: "Karrot - the app for verified locals to buy &amp; sell. See what&#39;s for offer today!"
};
const config = { ...(process.env.ASSET_PREFIX && {
    assetPrefix: process.env.ASSET_PREFIX
  }),
  flags: {
    FAST_DEV: true,
    QUERY_ON_DEMAND: true,
    LAZY_IMAGES: true,
    PARALLEL_SOURCING: true
  },
  siteMetadata,
  plugins: ["gatsby-plugin-concurrent-mode", {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: siteMetadata.siteName,
      start_url: "/",
      background_color: "#FFFFFF",
      icon: "src/assets/favicon.svg",
      icons: [48, 72, 96, 144, 192, 256, 384, 512].map(size => ({
        src: `${process.env.ASSET_PREFIX || ""}/icons/icon-${size}x${size}.png`,
        sizes: `${size}x${size}`,
        type: `image/png`
      }))
    }
  }, {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: ["GTM-M8ZNJWW"],
      pluginConfig: {
        exclude: ["/preview/**"]
      }
    }
  }, {
    resolve: "@karrotmarket/gatsby-theme-global-website",
    options: {
      locale: "en-gb",
      hot_articles_api: "https://uk.karrotmarket.com/hot_articles.json?limit=6"
    }
  }, "@karrotmarket/gatsby-theme-prismic"]
};
var _default = config;
exports.default = _default;