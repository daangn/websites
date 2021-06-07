import type { PrismicRepositoryConfig } from 'gatsby-plugin-prismic-previews';

import { linkResolver } from './linkResolver';

export const defaultRepositoryConfig: PrismicRepositoryConfig = {
  repositoryName: 'karrot',
  linkResolver,
};
