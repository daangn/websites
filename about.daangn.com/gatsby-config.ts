import type { GatsbyConfig } from 'gatsby';
import Hangul from 'hangul-js';

import 'dotenv/config';

const gql = String.raw;

const siteMetadata = {
  siteUrl: 'https://about.daangn.com',
  siteName: '당근 팀',
  title: '당근 팀',
  description: '이웃과 더 가까워지는 따뜻한 동네를 만들어요.',
};

const config: GatsbyConfig = {
  jsxRuntime: 'automatic',
  siteMetadata,
  plugins: [
    'gatsby-plugin-vanilla-extract',
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
      resolve: 'gatsby-plugin-seed-design',
      options: {
        mode: 'light-only',
      },
    },

    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'blogPosts',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: (str: string) => {
            const index = JSON.parse(str);
            const specialCharactersRegex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
            const splitTitle = index.title.replace(specialCharactersRegex, '').trim().split(/\s/);
            const splitSummary = index.summary
              .replace(specialCharactersRegex, '')
              .trim()
              .split(/\s/);

            const wordSet = new Set([...splitTitle, ...splitSummary, ...index.tags]);
            const tokens: string[] = [];
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
          allPost {
            nodes {
              id
              title
              summary
              tags
            }
          }
        }`,
        ref: 'id',
        index: ['title', 'summary', 'tags'],
        store: ['id'],
        // biome-ignore lint/suspicious/noExplicitAny: intentional
        normalizer: ({ data }: any) => data.allPost.nodes,
      },
    },

    // 커스텀 플러그인
    '@karrotmarket/gatsby-transformer-post',
    {
      resolve: '@karrotmarket/gatsby-theme-website-team',
      options: {
        locale: 'ko-kr',
        navigationId: 'about.daangn.com',
      },
    },
    {
      resolve: '@karrotmarket/gatsby-source-greenhouse-jobboard',
      options: {
        boardToken: 'daangn',
        forceGC: true,
      },
    },
    {
      resolve: '@karrotmarket/gatsby-source-greenhouse-jobboard',
      options: {
        boardToken: 'daangntest',
        forceGC: true,
      },
    },
    {
      resolve: '@karrotmarket/gatsby-source-greenhouse-jobboard',
      options: {
        boardToken: '07153',
        forceGC: true,
      },
    },
    {
      resolve: '@karrotmarket/gatsby-transformer-job-post',
      options: {
        defaultTags: {
          daangnmvp: ['MVP'],
          daangntest: ['사전지원'],
          daangntest1: ['개발 테스트'],
        },
        defaultMeta: {
          // 음..  이건 컨텐츠라 여기서 관리하면 안되는데,
          // 오버라이딩 사례라서 어떻게 해야할지 고민이 좀 되는군...
          // Greenhouse에는 당연히 못 넣고, Prismic integrated field 만들어도 사용이 직관적이진 않을듯
          '07153': {
            title: '2025 Daangn Builder’s Camp',
            description: '당근에서 프로덕트 빌더를 찾아요! (서류 접수: 2025.8.8-8.31)',
            image:
              'https://assetstorage.krrt.io/1518824262134778584/6d5199d8-4b78-4762-9370-6cf9a3559faf/width_1200_height_630.webp',
          },
        },
      },
    },
  ],
};

if (process.env.NODE_ENV === 'development') {
  config.plugins?.push({
    resolve: '@karrotmarket/gatsby-source-greenhouse-jobboard',
    options: {
      boardToken: 'daangntest1',
    },
  });
}

export default config;
