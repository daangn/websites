import type { GatsbyConfig } from 'gatsby';
import type { LinkResolverFunction } from '@prismicio/helpers';

const repositoryName = 'karrot';

type ThemeOptions = {
  accessToken?: string,
  customTypesApiToken?: string,
  linkResolver?: LinkResolverFunction,
};

const config = ({
  accessToken,
  customTypesApiToken,
  linkResolver,
}: ThemeOptions): GatsbyConfig => ({
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName,
        accessToken,
        customTypesApiToken,
        linkResolver,
        schemas: require('@karrotmarket/prismic-config/schema'),
        shouldDownloadFiles: true,
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 100,
        },
      },
    },
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
