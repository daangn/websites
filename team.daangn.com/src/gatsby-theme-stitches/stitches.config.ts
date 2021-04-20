import { em, rem } from 'polished';
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
    fontSizes: {
      heading1: rem(72),
      heading2: rem(60),
      heading3: rem(54),
      heading4: rem(42),
      subtitle1: rem(32),
      subtitle2: rem(26),
      subtitle3: rem(20),
      subtitle4: rem(18),
      body1: rem(18),
      body2: rem(16),
      body3: rem(15),
      caption1: rem(14),
      caption2: rem(13),
    },
    sizes: {},
  },
});
