import type { GatsbyConfig } from 'gatsby';

// @ts-ignore
import { linkResolver } from '@karrotmarket/gatsby-theme-website-global/src/@karrotmarket/gatsby-theme-prismic/linkResolver';

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
    'gatsby-plugin-preload-fonts',
    {
      resolve: '@karrotmarket/gatsby-theme-seed-design',
      options: {
        mode: 'light-only',
      },
    },

    '@karrotmarket/gatsby-theme-website',
    {
      resolve: '@karrotmarket/gatsby-theme-prismic',
      options: {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver,
      },
    },
  ],
};

export default config;
