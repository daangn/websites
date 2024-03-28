import type { WrapPageElementBrowserArgs, WrapRootElementNodeArgs } from 'gatsby';
import * as React from 'react';

import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews';

import { componentResolver } from '@karrotmarket/gatsby-theme-prismic/src/componentResolver';
import { linkResolver } from '@karrotmarket/gatsby-theme-prismic/src/linkResolver';

type WrapRootElementArgs = WrapRootElementNodeArgs | WrapPageElementBrowserArgs;

const defaultRepositoryConfigs = [
  {
    repositoryName: 'karrot',
    linkResolver,
    componentResolver,
  },
];

export const wrapRootElement = ({ element }: WrapRootElementArgs) => {
  return (
    <PrismicPreviewProvider repositoryConfigs={defaultRepositoryConfigs}>
      {element}
    </PrismicPreviewProvider>
  );
};
