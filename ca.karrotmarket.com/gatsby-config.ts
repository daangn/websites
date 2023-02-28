import type { GatsbyConfig } from 'gatsby';

const siteMetadata = {
  siteUrl: 'https://ca.karrotmarket.com/',
  title: 'Karrot - Your Local Buying &amp; Selling Community for Verified Locals',
  description:
    'Karrot - the app for verified locals to buy &amp; sell. See what&#39;s for offer today!',
};

const config: GatsbyConfig = {
  ...(process.env.ASSET_PREFIX && {
    assetPrefix: process.env.ASSET_PREFIX,
  }),
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.title,
        start_url: '/',
        background_color: '#FFFFFF',
        icon: 'src/assets/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-NTRHMD7',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
        routeChangeEventName: 'gatsby-route-change',
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: '@karrotmarket/gatsby-theme-website-global',
      options: {
        locale: 'en-ca',
        hot_articles_api: 'https://ca.karrotmarket.com/buy-sell.json?limit=6',
      },
    },
    '@karrotmarket/gatsby-theme-prismic',
  ],
};

export default config;
