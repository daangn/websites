import type { GatsbyConfig } from "gatsby";

const siteMetadata = {
  siteUrl: "https://ca.karrotmarket.com/",
  siteName:
    "Karrot - Your Local Buying &amp; Selling Community for Verified Locals",
  description:
    "Karrot - the app for verified locals to buy &amp; sell. See what&#39;s for offer today!",
};

const config: GatsbyConfig = {
  ...(process.env.ASSET_PREFIX && {
    assetPrefix: process.env.ASSET_PREFIX,
  }),
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
        icons: [48, 72, 96, 144, 192, 256, 384, 512].map((size) => ({
          src: `${
            process.env.ASSET_PREFIX
              ? `https://${process.env.ASSET_PREFIX}`
              : ""
          }/icons/icon-${size}x${size}.png`,
          sizes: `${size}x${size}`,
          type: `image/png`,
        })),
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["GTM-NTRHMD7"],
        pluginConfig: {
          exclude: ["/preview/**"],
        },
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
    "@karrotmarket/gatsby-theme-prismic",
  ],
};

export default config;
