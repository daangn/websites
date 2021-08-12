import * as React from 'react';
import type { GatsbySSR, GatsbyBrowser } from 'gatsby';

// FIXME
// See https://github.com/angeloashmore/gatsby-source-prismic/issues/384
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import 'gatsby-plugin-prismic-previews/dist/styles.css'

type WrapRootElement = (GatsbySSR | GatsbyBrowser)['wrapRootElement'];

export const wrapRootElement: WrapRootElement = ({ element }: any) => {
  return (
    <PrismicPreviewProvider>
      {element}
    </PrismicPreviewProvider>
  );
};
