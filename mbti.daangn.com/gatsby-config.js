const siteMetadata = {
  siteUrl: 'https://mbti.daangn.com',
  siteName: '당신 근처의 MBTI 테스트',
  shortName: '당근 MBTI',
}

module.exports = {
  // See https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  flags: {
    FAST_DEV: true,
    QUERY_ON_DEMAND: false,
    LAZY_IMAGES: true,
    PARALLEL_SOURCING: true,
    DEV_SSR: false,
  },
  siteMetadata,
  plugins: [
    'gatsby-plugin-svgr',
    `gatsby-plugin-image`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-next-seo',
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@src': './',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: 'src/__generated__/gatsby-types.d.ts',
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
          'src/__generated__/gatsby-schema.graphql': true,
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
        short_name: siteMetadata.shortName,
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FF7E36',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'karrot',
        shouldDownloadImage: () => true,
        prismicToolbar: process.env.NODE_ENV === 'development',
        schemas: {
          mbti_test_question: require('./prismic/mbti_test_question.json'),
          'mbti-test-result': require('./prismic/mbti-test-result.json'),
          mbti_intro: require('./prismic/mbti_intro.json'),
        },
      },
    },
  ],
}
