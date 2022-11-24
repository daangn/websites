import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-svgr',
    'gatsby-theme-stitches',
    'gatsby-plugin-seed-design',
    '@karrotmarket/gatsby-theme-prismic',
  ],
};

export default config;
