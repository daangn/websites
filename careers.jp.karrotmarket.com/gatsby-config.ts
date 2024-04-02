import type { GatsbyConfig } from 'gatsby';

import { vars } from '@seed-design/design-token';
import dotenv from 'dotenv';
dotenv.config();

const siteMetadata = {
  siteUrl: 'https://careers.jp.karrotmarket.com',
  siteName: 'Karrot Careers',
  title: 'Karrot Careers',
  description: 'Karrot brings neighbours together to build closely-knit local communities',
};

const config: GatsbyConfig = {
  jsxRuntime: 'automatic',
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
      options: {
        headers: {
          '/completed/': ['Access-Control-Allow-Origin: *'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.siteName,
        short_name: siteMetadata.siteName,
        start_url: '/',
        theme_color: vars.$scale.color.carrot500,
        background_color: vars.$scale.color.gray00,
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
        id: 'GTM-NB3KRNZ',
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
    {
      resolve: '@karrotmarket/gatsby-theme-website-team',
      options: {
        locale: 'ja-jp',
        navigationId: 'careers.jp.karrotmarket.com',
      },
    },
    {
      resolve: '@karrotmarket/gatsby-source-greenhouse-jobboard',
      options: {
        boardToken: 'karrotjp',
        forceGC: true,
      },
    },
    {
      resolve: '@karrotmarket/gatsby-transformer-job-post',
      options: {
        defaultTags: {
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
