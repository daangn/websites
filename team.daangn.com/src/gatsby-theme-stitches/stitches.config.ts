import { em } from 'polished';
import { colors } from '@daangn/design-token';
import { createCss } from '@stitches/react';

import { convertColorScheme } from './colors';

// should exports `styled`, `css` and `getCssString`
export const { styled, css, getCssString } = createCss({
  // follows Bootstrap's breakpoints practice
  // See https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints
  media: {
    sm: `(min-width: ${em(576)})`,
    md: `(min-width: ${em(768)})`,
    lg: `(min-width: ${em(992)})`,
    xl: `(min-width: ${em(1200)})`,
    xxl: `(min-width: ${em(1400)})`,
  },
  theme: {
    colors: convertColorScheme(colors.light),
    fonts: {},
    sizes: {},
  },
});
