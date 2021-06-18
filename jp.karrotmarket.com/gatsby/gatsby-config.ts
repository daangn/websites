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
      },
    },
    "@karrotmarket/gatsby-theme-prismic",
  ],
};

export default config;
