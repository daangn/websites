import type { GatsbyConfig } from "gatsby";

const siteMetadata = {
  siteUrl: "https://us.karrotmarket.com/",
  siteName:
    "Karrot - Your Local Buying &amp; Selling Community for Verified Locals",
  description:
    "Karrot - the app for verified locals to buy &amp; sell. See what&#39;s for offer today!",
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
        trackingIds: ["GTM-PMLPXBH"],
        pluginConfig: {
          exclude: ["/preview/**"],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: 'src/__generated__/gatsby-types.d.ts',
        emitSchema: {
          'src/__generated__/gatsby-schema.graphql': true,
          'src/__generated__/gatsby-introspection.json': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: "@karrotmarket/gatsby-theme-global-website",
      options: {
        locale: "en-us",
        hot_articles_api:
          "https://webapp.us.karrotmarket.com/hot_articles.json?limit=6",
      },
    },
    "@karrotmarket/gatsby-theme-prismic",
  ],
};

export default config;
