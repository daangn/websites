import type { GatsbyConfig } from 'gatsby';

const siteUrl = new URL('https://www.example.com');

const siteMetadata: GatsbyConfig['siteMetadata'] = {
  // 추후에 변경 필요
  siteUrl: 'https://team.daangn.com',
  siteName: '당근마켓 팀',
  title: '당근마켓 팀',
  description: '이웃과 더 가까워지는 따뜻한 동네를 만들어요.',
};

const config: GatsbyConfig = {
  jsxRuntime: 'automatic',
  siteMetadata,
  plugins: [
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
    // 커스텀 플러그인
    {
      resolve: '@karrotmarket/gatsby-theme-website-team',
      options: {
        locale: 'ko-kr',
        navigationId: 'team.daangn.com',
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
      resolve: '@karrotmarket/gatsby-transformer-job-post',
      options: {
        defaultTags: {
          daangnmvp: ['MVP'],
          daangntest: ['사전지원'],
          daangntest1: ['개발 테스트'],
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
