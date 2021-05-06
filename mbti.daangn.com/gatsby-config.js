module.exports = {
  plugins: [
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
        schemas: {
          mbti_event_question: require('./prismic/mbti-event-question.json'),
          mbti_test_result: require('./prismic/mbti-test-result.json'),
        },
      },
    },
  ],
};
