import * as React from 'react';
import type { GatsbySSR, GatsbyBrowser } from 'gatsby';

import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews';

import { linkResolver } from '@karrotmarket/gatsby-theme-prismic/src/linkResolver';
import { componentResolver } from '@karrotmarket/gatsby-theme-prismic/src/componentResolver';

type WrapRootElement = (GatsbySSR | GatsbyBrowser)['wrapRootElement'];

const defaultRepositoryConfigs = [
  {
    repositoryName: 'karrot',
    linkResolver,
    componentResolver,
  },
];

export const wrapRootElement: WrapRootElement = ({ element }: any) => {
  return (
    <PrismicPreviewProvider repositoryConfigs={defaultRepositoryConfigs}>
      {element}
    </PrismicPreviewProvider>
  );
};
