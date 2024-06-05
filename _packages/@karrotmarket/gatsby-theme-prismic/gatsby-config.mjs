// @ts-check

/**
 * @typedef {import('gatsby').GatsbyConfig} GatsbyConfig
 * @typedef {import('@prismicio/helpers').LinkResolverFunction} LinkResolverFunction
 */

// https://karrot.prismic.io
const repositoryName = 'karrot';

// Note: 스키마 어차피 공개임
const customTypesApiToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6ImthcnJvdC00NzU3OWU1Yy1jZjg5LTQ3YTMtODVjMS01MDkzMWM3MzU0ZTlfNSIsImRhdGUiOjE2MzcwODI3NzMsImRvbWFpbiI6ImthcnJvdCIsImlhdCI6MTYzNzA4Mjc3M30.QQfmjFJK_vPZT9765NP1UI9h6Prvr46AnIOrAiUm0fU';

/**
 * @typedef {{
 *   accessToken?: string;
 *   linkResolver?: LinkResolverFunction;
 * }} ThemeOptions
 */

/**
 * @param {ThemeOptions} options
 * @return {GatsbyConfig}
 */
const config = ({ accessToken, linkResolver }) => ({
  plugins: [
    /** @type {satisfies import('gatsby-source-prismic').PluginOptions} */
    {
      resolve: 'gatsby-source-prismic',
      options: {
        fetch,
        repositoryName,
        accessToken,
        customTypesApiToken,
        linkResolver,
        shouldDownloadFiles: true,
        imageImgixParams: {
          auto: ['compress', 'format'],
          fit: 'max',
          q: 100,
        },
      },
    },
    /** @type {satisfies import('gatsby-plugin-prismic-previews').PluginOptions} */
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName,
        accessToken,
      },
    },
  ],
});

export default config;
