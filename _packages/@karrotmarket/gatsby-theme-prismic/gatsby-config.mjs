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

// 이미지는 imgix CDN(resolver의 host swap)으로 렌더돼 빌드 때 받은 localFile이 안 쓰인다. about 빌드
// (PRISMIC_SKIP_IMAGE_DOWNLOAD=true)만 이미지 다운로드를 끄고, localFile을 실제 쓰는 Link to Media
// (비디오·IR 첨부)만 받는다. env 미설정이면 기존대로 전부 다운로드한다.
/** @param {import('@prismicio/client').ImageFieldImage | import('@prismicio/client').LinkToMediaField} field */
const downloadMediaOnly = (field) => 'link_type' in field && field.link_type === 'Media';

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
        shouldDownloadFiles:
          process.env.PRISMIC_SKIP_IMAGE_DOWNLOAD === 'true' ? downloadMediaOnly : true,
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
