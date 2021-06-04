import type { GatsbyConfig } from 'gatsby';

const siteMetadata = {
  siteUrl: 'https://daangnpay.com/',
  siteName: '당근페이',
};

const config: GatsbyConfig = {
  flags: {
    FAST_DEV: true,
    QUERY_ON_DEMAND: true,
    LAZY_IMAGES: true,
    PARALLEL_SOURCING: true,
    DEV_SSR: false,
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.siteName,
        start_url: '/',
        background_color: '#FFFFFF',
        icon: 'src/assets/maskable_icon.svg',
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'karrot',
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          pay_contents: require('@karrotmarket/prismic-config/schema/pay_contents.json'),
        },
      },
    },
  ],
};

export default config;
