// @ts-check

/**
 * @typedef {import('gatsby').GatsbyConfig} GatsbyConfig
 * @typedef {import('./types').PluginOptions} PluginOptions;
 */

import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

import Hangul from 'hangul-js';

import { linkResolver } from '@karrotmarket/gatsby-theme-website-team/src/@karrotmarket/gatsby-theme-prismic/linkResolver.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const gql = String.raw;

/**
 * @param {PluginOptions} options
 * @return {GatsbyConfig}
 */
const config = ({ locale }) => ({
  siteMetadata: {
    locale,
  },
  plugins: [
    'gatsby-theme-stitches',
    'gatsby-plugin-svgr',
    'gatsby-plugin-head-seo',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'placeholder',
        path: `${__dirname}/package.json`,
      },
    },
    {
      resolve: 'gatsby-plugin-turnstile',
      options: {
        siteKey: '0x4AAAAAAABTJUTRFC79Iemz',
      },
    },
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
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/index.tsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'jobPosts',
        engine: 'flexsearch',
        engineOptions: {
          /** @param {string} str */
          tokenize: (str) => {
            const index = JSON.parse(str);
            const specialCharactersRegex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
            const splitTitle = index.title.replace(specialCharactersRegex, '').trim().split(/\s/);

            const wordSet = new Set([...splitTitle, ...index.keywords]);
            /** @type {string[]} */
            const tokens = [];
            for (const word of wordSet) {
              const syllables = Hangul.disassemble(word);
              for (let i = 0; i < syllables.length; i++) {
                const token = Hangul.assemble(syllables.slice(0, i + 1)).toLocaleLowerCase();
                tokens.push(token);
              }
            }

            return tokens;
          },
        },
        query: gql`{
          allJobPost {
            nodes {
              id
              title
              keywords
            }
          }
        }`,
        ref: 'id',
        index: ['title', 'keywords'],
        store: ['id'],
        normalizer: ({ data }) => data.allJobPost.nodes,
      },
    },

    // 커스텀 플러그인
    '@karrotmarket/gatsby-theme-website',
    {
      resolve: '@karrotmarket/gatsby-theme-prismic',
      options: {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver,
      },
    },
    '@karrotmarket/gatsby-transformer-post',
  ],
});

export default config;
