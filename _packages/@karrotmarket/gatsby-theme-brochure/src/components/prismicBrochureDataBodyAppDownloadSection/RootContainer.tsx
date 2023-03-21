import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

const RootContainer = styled('section', {
  paddingY: rem(90),
  variants: {
    backgroundColor: {
      paper_default: {
        background: vars.$semantic.color.paperBackground,
      },
      paper_accent: {
        background: vars.$semantic.color.paperAccent,
      },
    },
  },
});

export default RootContainer;
