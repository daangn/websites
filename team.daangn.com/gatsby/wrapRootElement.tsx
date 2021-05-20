import * as React from 'react';
import type { GatsbyBrowser, GatsbySSR } from 'gatsby';
import { PreviewStoreProvider } from 'gatsby-source-prismic';

export const wrapRootElement: (GatsbyBrowser | GatsbySSR)['wrapRootElement'] = ({
  element,
}) => {
  return (
    <PreviewStoreProvider>
      {element}
    </PreviewStoreProvider>
  );
};
