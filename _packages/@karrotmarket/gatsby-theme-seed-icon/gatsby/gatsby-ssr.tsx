import * as React from 'react';
import { type GatsbySSR } from 'gatsby';

import spriteUrl from '!!file-loader!@karrotmarket/gatsby-theme-seed-icon/src/sprite.svg';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="seed-icon-sprite" rel="preload" href={spriteUrl} as="image" type="image/svg+xml" />,
  ]);
};
