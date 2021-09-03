import type { GatsbyConfig } from 'gatsby';
import {disassemble as disassembleHangul, assemble as assembleHangul} from 'hangul-js';

import dotenv from 'dotenv-safe';
dotenv.config();

export const siteMetadata = {
  siteUrl: 'https://team.daangn.com',
  siteName: '당근마켓 팀',
};

const config: GatsbyConfig = {
  // See https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  flags: {
    FAST_DEV: true,
    QUERY_ON_DEMAND: true,
    LAZY_IMAGES: true,
    PARALLEL_SOURCING: true,
  },
  siteMetadata,
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-theme-stitches',
    'gatsby-plugin-svgr',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-next-seo',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.siteName,
        short_name: siteMetadata.siteName,
        start_url: '/',
        theme_color: '#ff7e36',
        background_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-advanced-sitemap',
      options: {
        exclude: [
          '/dev-404-page/',
          '/404/',
          '/404.html',
          '/offline-plugin-app-shell-fallback/',
          '/preview/',
          '/completed/',
          /\/apply\/?$/,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/plain-sitemap',
        excludes: [
          '/dev-404-page/',
          '/404/',
          '/404.html',
          '/offline-plugin-app-shell-fallback/',
          '/preview/',
          '/completed/',
          '/jobs/*/apply/',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: null,
        sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
        policy: [
          { userAgent: '*', allow: '/' },
          { userAgent: '*', disallow: '/dev-404-page/' },
          { userAgent: '*', disallow: '/404/' },
          { userAgent: '*', disallow: '/404.html' },
          { userAgent: '*', disallow: '/offline-plugin-app-shell-fallback/' },
          { userAgent: '*', disallow: '/preview/' },
          { userAgent: '*', disallow: '/completed/' },
          { userAgent: '*', disallow: '/*/apply/$' },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KD32GF9',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
        routeChangeEventName: 'gatsby-route-change',
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameLight: 'dark-light',
        classNameDark: 'dark-theme',
        minify: true,
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '~': './',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/index.tsx'),
      },
    },
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
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "jobPosts",
        engine: "flexsearch",
        engineOptions: {
          tokenize: (str)=>{
            const index = JSON.parse(str)
            const specialCharactersRegex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g
            const splitTitle = index.title.replace(specialCharactersRegex,"").trim().split(/\s/)
            const wordSet = new Set([...splitTitle,...index.keywords])
            const tokens:string[]=[]
            for (const word of wordSet) {
              const syllables = disassembleHangul(word);
              for (let i = 0; i < syllables.length; i++) {
                const token = assembleHangul(syllables.slice(0, i + 1));
                tokens.push(token);
              }
            }
            
            return tokens
          }
        },
        query: `
        {
          allGreenhouseJob {
            edges {
              node {
                title
                childrenJobPost {
                  id
                  keywords
                }
              }
            }
          }
        }
      `,
        ref: "id",

        index: ["title", "keywords"],
        store: ["id", "title", "keywords"],
        normalizer: ({ data }) =>
          data.allGreenhouseJob.edges.map(({ node }) => ({
            id: node.childrenJobPost[0].id,
            title: node.title,
            keywords: node.childrenJobPost[0].keywords,
          })),
      },
    },

    // 커스텀 플러그인
    '@karrotmarket/gatsby-theme-prismic',
    '@karrotmarket/gatsby-theme-website',
    {
      resolve: '@karrotmarket/gatsby-source-greenhouse-job-board',
      options: {
        boardToken: 'daangn',
        includeContent: true,
        // 이런 해킹으로는 안된다... 다른 방법을 강구해야함
        // forceGC: true,
      },
    },
    {
      resolve: '@karrotmarket/gatsby-source-greenhouse-job-board',
      options: {
        boardToken: 'daangnmvp',
        includeContent: true,
      },
    },
    {
      resolve: '@karrotmarket/gatsby-source-greenhouse-job-board',
      options: {
        boardToken: 'daangntest',
        includeContent: true,
      },
    },
    {
      resolve: '@karrotmarket/gatsby-transformer-job-post',
      options: {
        defaultTags:{
          'daangnmvp': ["MVP"],
          'daangntest': ["사전지원"]
        }
      }
    },
//    'gatsby-plugin-prismic-schema',
  ],
};

export default config;
