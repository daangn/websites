module.exports = {
  // See https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  flags: {
    FAST_DEV: true,
    QUERY_ON_DEMAND: false,
    LAZY_IMAGES: true,
    PARALLEL_SOURCING: true,
    DEV_SSR: false,
  },
  plugins: [
    'gatsby-plugin-svgr',
    `gatsby-plugin-image`,
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
        name: '당신 근처의 MBTI 테스트',
        short_name: '당근 MBTI',
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
        },
      },
    },
  ],
}
