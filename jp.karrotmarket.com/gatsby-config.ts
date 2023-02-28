import type { GatsbyConfig } from 'gatsby';

const siteMetadata = {
  siteUrl: 'https://jp.karrotmarket.com/',
  title: 'お住まいのまちのキャロット（Karrot）',
  description:
    'お住まいのまちのフリマアプリ、Karrot(キャロット)！ご近所さんと心あたたまる取引をしませんか？',
};

const config: GatsbyConfig = {
  ...(process.env.ASSET_PREFIX && {
    assetPrefix: process.env.ASSET_PREFIX,
  }),
  jsxRuntime: 'automatic',
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.title,
        start_url: '/',
        background_color: '#FFFFFF',
        icon: 'src/assets/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KT237BF',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
        routeChangeEventName: 'gatsby-route-change',
        enableWebVitalsTracking: true,
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
      resolve: '@karrotmarket/gatsby-theme-website-global',
      options: {
        locale: 'ja-jp',
        hot_articles_api: 'https://jp.karrotmarket.com/buy-sell.json?limit=6',
      },
    },
    '@karrotmarket/gatsby-theme-prismic',
  ],
};

export default config;
