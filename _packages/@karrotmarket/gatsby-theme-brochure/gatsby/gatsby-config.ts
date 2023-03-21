import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  plugins: [
    'gatsby-theme-stitches',
    'gatsby-plugin-head-seo',
    'gatsby-plugin-svgr',
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
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: '@karrotmarket/gatsby-theme-prismic',
      options: {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
  ],
};

export default config;
