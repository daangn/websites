import type { GatsbyConfig } from "gatsby";

const siteUrl = new URL("https://ads-local.daangn.com");

const siteMetadata: GatsbyConfig["siteMetadata"] = {
  siteUrl: siteUrl.origin,
  siteName: "당근마켓 지역광고"
};

const config: GatsbyConfig = {
  // See https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  flags: {
    FAST_DEV: true,
    QUERY_ON_DEMAND: true,
    LAZY_IMAGES: true,
    PARALLEL_SOURCING: true,
  },
  siteMetadata,
  plugins: [
    "gatsby-theme-stitches",
    "gatsby-plugin-svgr",
    "gatsby-plugin-image",
    "gatsby-plugin-next-seo",
    "@karrotmarket/gatsby-theme-prismic",
    "@karrotmarket/gatsby-theme-website",
    {
      resolve: 'gatsby-plugin-advanced-sitemap',
      options: {
        exclude: [
          '/404/',
          '/404.html',
        ],
      },
    },
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: "src/__generated__/gatsby-types.d.ts",
        emitSchema: {
          "src/__generated__/gatsby-schema.graphql": true,
          "src/__generated__/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/image/`,
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["avif", "webp", "auto"],
          placeholder: "dominantColor",
          quality: 80,
          breakpoints: [576, 768, 992, 1200, 1400, 1920],
          backgroundColor: "transparent",
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: "src/__generated__/gatsby-types.d.ts",
        emitSchema: {
          "src/__generated__/gatsby-schema.graphql": true,
          "src/__generated__/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: { "~": "./" },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-NC3HWHZ',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
        routeChangeEventName: 'gatsby-route-change',
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{
          userAgent: '*',
          allow: '/'
        }],
        sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.siteName,
        short_name: siteMetadata.siteName,
        start_url: '/',
        theme_color: '#ff7e36',
        background_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/image/favicon.svg',
      },
    },
  ],
};

export default config;
