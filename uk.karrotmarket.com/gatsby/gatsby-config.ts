import type { GatsbyConfig } from 'gatsby';

const siteMetadata = {
  siteUrl: 'https://uk.karrotmarket.com/',
};

const config: GatsbyConfig = {
  flags: {
    FAST_DEV: true,
    QUERY_ON_DEMAND: true,
    LAZY_IMAGES: true,
    PARALLEL_SOURCING: true,
  },
  siteMetadata,
  plugins:[
    'gatsby-plugin-concurrent-mode',
    'gatsby-theme-stitches',
    'gatsby-plugin-svgr',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet-async',
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
          site_navigation: require('@karrotmarket/prismic-config/schema/site_navigation.json'),
        },
      },
    },
    'gatsby-plugin-prismic-schema',
  ],
};

export default config;
