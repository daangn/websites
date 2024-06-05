// @ts-check

/**
 * @typedef {import('gatsby').GatsbyConfig} GatsbyConfig
 */

/**
 * @type {GatsbyConfig}
 */
export default {
  plugins: [
    'gatsby-plugin-svgr',
    'gatsby-theme-stitches',
    '@karrotmarket/gatsby-theme-prismic',
    '@karrotmarket/gatsby-theme-seed-design',
  ],
};
