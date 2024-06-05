// @ts-check

/**
 * @typedef {import('gatsby').GatsbyConfig} GatsbyConfig
 */

/**
 * @typedef {{
 *   mode?: string,
 * }} PluginOptions
 */

/**
 * @param {PluginOptions} options
 * @return {GatsbyConfig}
 */
const config = ({ mode }) => ({
  plugins: [
    {
      resolve: 'gatsby-plugin-seed-design',
      options: {
        mode,
      },
    },
  ],
});

export default config;
