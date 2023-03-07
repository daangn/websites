import type { GatsbyConfig } from 'gatsby';
import { assemble as assembleHangul, disassemble as disassembleHangul } from 'hangul-js';

import type { PluginOptions } from './types';
// @ts-ignore
import { linkResolver } from '@karrotmarket/gatsby-theme-website-team/src/@karrotmarket/gatsby-theme-prismic/linkResolver';

const gql = String.raw;

const config = ({ locale }: PluginOptions): GatsbyConfig => ({
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
          tokenize: (str: string) => {
            const index = JSON.parse(str);
            const specialCharactersRegex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
            const splitTitle = index.title.replace(specialCharactersRegex, '').trim().split(/\s/);

            const wordSet = new Set([...splitTitle, ...index.keywords]);
            const tokens: string[] = [];
            for (const word of wordSet) {
              const syllables = disassembleHangul(word);
              for (let i = 0; i < syllables.length; i++) {
                const token = assembleHangul(syllables.slice(0, i + 1)).toLocaleLowerCase();
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
        store: ['id', 'title', 'keywords'],
        // rome-ignore lint/suspicious/noExplicitAny: intentional
        normalizer: ({ data }: any) => data.allJobPost.nodes,
      },
    },

    // 커스텀 플러그인
    {
      resolve: '@karrotmarket/gatsby-theme-prismic',
      options: {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver,
      },
    },
  ],
});

export default config;
