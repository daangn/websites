import * as React from 'react';
import type { GatsbyBrowser, GatsbySSR } from 'gatsby';

export const wrapRootElement: (GatsbyBrowser | GatsbySSR)['wrapRootElement'] = ({
  element,
}) => {
  return (
    <>
      {element}
    </>
  );
};
