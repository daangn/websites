import type { GatsbyConfig } from 'gatsby';

import dotenv from 'dotenv-safe';
dotenv.config();

const gql = String.raw;

export const siteMetadata = {
  siteUrl: 'https://team.daangn.com',
  siteName: '당근마켓 팀',
};

const config: GatsbyConfig = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-vercel-deploy',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'translations',
        path: 'src/translations',
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

    // 커스텀 플러그인
    '@karrotmarket/gatsby-plugin-lokalise-translation',
    {
      resolve: '@karrotmarket/gatsby-theme-team-website',
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
    process.env.NODE_ENV === 'development' && {
      resolve: '@karrotmarket/gatsby-source-greenhouse-jobboard',
      options: {
        boardToken: 'daangntest1',
      },
    },
    {
      resolve: '@karrotmarket/gatsby-transformer-job-post',
      options: {
        defaultTags: {
          'daangnmvp': ['MVP'],
          'daangntest': ['사전지원'],
          'daangntest1': ['개발 테스트'],
        },
      },
    },
  ].filter(Boolean),
};

export default config;
