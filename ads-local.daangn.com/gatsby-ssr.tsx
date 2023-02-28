import * as React from 'react';
import { type GatsbySSR } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
  setHtmlAttributes,
}) => {
  setHtmlAttributes({
    lang: 'ko',
  });

  setHeadComponents([
    <meta key="formmat-detection-telephone" name="format-detection" content="telephone=no" />,
    <meta key="formmat-detection-date" name="format-detection" content="date=no" />,
    <meta key="format-detection-address" name="format-detection" content="address=no" />,
    <meta key="format-detection-email" name="format-detection" content="email=no" />,
  ]);
};
