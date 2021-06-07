import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-svgr',
    'gatsby-theme-stitches',
    '@karrotmarket/gatsby-theme-prismic',
  ],
};

export default config;
