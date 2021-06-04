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
    'gatsby-plugin-react-helmet-async',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['avif', 'webp', 'auto'],
          placeholder: 'dominantColor',
          quality: 80,
          breakpoints: [576, 768, 992, 1200, 1400, 1920],
          backgroundColor: 'transparent',
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
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
        schemas: require('@karrotmarket/prismic-config/schema'),
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: 'karrot',
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        toolbar: 'new',
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
