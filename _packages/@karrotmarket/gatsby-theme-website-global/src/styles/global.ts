import { globalCss } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';
import { rem } from 'polished';

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'Gilroy',
    lineHeight: '140%',
  },
  body: {
    background: vars.$semantic.color.paperDefault,
    color: vars.$scale.color.gray900,
    fontFamily: 'Gilroy',
    textRendering: 'optimizeLegibility',
    wordBreak: 'break-word',
    WebkitFontSmoothing: 'antialiased',
    margin: 0,
  },
  a: {
    color: vars.$scale.color.gray900,
  },
  '#index-page': {
    '@md': {
      minWidth: rem(1230),
    },
  },
  '#about-page': {
    '@md': {
      minWidth: rem(748),
    },
  },
});

export default globalStyles;
