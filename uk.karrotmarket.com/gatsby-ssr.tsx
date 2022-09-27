import * as React from 'react';
import { type GatsbySSR } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
  setHtmlAttributes,
}) => {
  setHtmlAttributes({
    lang: 'en-UK',

    // FIXME: extract to a plugin
    // @ts-ignore
    'data-seed': 'light-only',
    // @ts-ignore
    'data-seed-scale-color': 'light',
  });

  setHeadComponents([
    // FIXME: extract to a plugin
    <meta
      key="color-scheme"
      name="color-scheme"
      content="light dark"
    />,
  ]);
};
