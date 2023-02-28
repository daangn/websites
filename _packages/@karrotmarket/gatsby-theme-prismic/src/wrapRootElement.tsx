import * as React from 'react';
import type { WrapRootElementNodeArgs, WrapPageElementBrowserArgs } from 'gatsby';

import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews';

import { linkResolver } from '@karrotmarket/gatsby-theme-prismic/src/linkResolver';
import { componentResolver } from '@karrotmarket/gatsby-theme-prismic/src/componentResolver';

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
