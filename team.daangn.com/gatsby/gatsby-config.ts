import type { GatsbyConfig } from 'gatsby';

import dotenv from 'dotenv-safe';
dotenv.config();

const siteMetadata = {
  siteUrl: 'https://team.daangn.com/',
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
    'gatsby-plugin-concurrent-mode',
    'gatsby-theme-stitches',
    'gatsby-plugin-svgr',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet-async',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '~': './',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/index.tsx'),
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
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'karrot',
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        prismicToolbar: process.env.NODE_ENV === 'development',
        schemas: {
          faq: require('@karrotmarket/prismic-config/schema/faq.json'),
          site_navigation: require('@karrotmarket/prismic-config/schema/site_navigation.json'),
          terms_and_conditions: require('@karrotmarket/prismic-config/schema/terms_and_conditions.json'),
        },
      },
    },

    // 커스텀 플러그인
    '@karrotmarket/gatsby-transformer-job-post',
    {
      resolve: '@karrotmarket/gatsby-source-greenhouse-job-board',
      options: {
        boardToken: 'daangn',
        includeContent: true,
      },
    },
    'gatsby-plugin-prismic-schema',
  ],
};

export default config;
