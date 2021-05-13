import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv-safe';

dotenv.config();

const siteUrl = new URL(
  process.env.NODE_ENV === 'development'
  ? 'http://localhost:8000'
  : (process.env.SITE_URL || 'https://team.daangn.com')
);

const config: GatsbyConfig = {
  // See https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  flags: {
    FAST_DEV: true,
    QUERY_ON_DEMAND: true,
    LAZY_IMAGES: true,
    PARALLEL_SOURCING: true,
  },
  siteMetadata: {
    siteUrl: siteUrl.origin,
  },
  plugins: [
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
        schemas: {
          faq: require('./prismic/schemas/faq.json'),
          site_navigation: require('./prismic/schemas/site-navigation.json'),
          terms_and_conditions: require('./prismic/schemas/terms-and-conditions.json'),
        },
      },
    },

    // 커스텀 플러그인
    '@karrotmarket/gatsby-transformer-job-post',
    {
      resolve: '@karrotmarket/gatsby-transformer-faq',
      options: {
        uid: 'team.daangn.com',
      },
    },
    {
      resolve: '@karrotmarket/gatsby-transformer-site-navigation',
      options: {
        baseUrl: 'https://team.daangn.com',
        uid: 'team.daangn.com',
      },
    },
    {
      resolve: '@karrotmarket/gatsby-source-greenhouse-job-board',
      options: {
        boardToken: 'daangn',
        includeContent: true,
      },
    },
  ],
};

export default config;
