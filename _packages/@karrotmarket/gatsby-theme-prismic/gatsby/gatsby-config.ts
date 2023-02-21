import type { GatsbyConfig } from 'gatsby';
import type { LinkResolverFunction } from '@prismicio/helpers';

// https://karrot.prismic.io
const repositoryName = 'karrot';

// Note: 스키마 어차피 공개임
const customTypesApiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6ImthcnJvdC00NzU3OWU1Yy1jZjg5LTQ3YTMtODVjMS01MDkzMWM3MzU0ZTlfNSIsImRhdGUiOjE2MzcwODI3NzMsImRvbWFpbiI6ImthcnJvdCIsImlhdCI6MTYzNzA4Mjc3M30.QQfmjFJK_vPZT9765NP1UI9h6Prvr46AnIOrAiUm0fU';

type ThemeOptions = {
  accessToken?: string,
  linkResolver?: LinkResolverFunction,
};

const config = ({
  accessToken,
  linkResolver,
}: ThemeOptions): GatsbyConfig => ({
  plugins: [
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
          auto: 'compress,format',
          fit: 'max',
          q: 100,
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-prismic-previews',
    //   options: {
    //     repositoryName,
    //     accessToken,
    //   },
    // },
  ],
});

export default config;
