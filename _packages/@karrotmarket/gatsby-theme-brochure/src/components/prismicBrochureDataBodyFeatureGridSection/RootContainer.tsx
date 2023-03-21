import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';

const RootContainer = styled('section', {
  paddingY: '120px',

  variants: {
    backgroundColor: {
      white: {},
      paper_default: {
        background: vars.$semantic.color.paperBackground,
      },
      paper_accent: {
        background: vars.$semantic.color.paperAccent,
      },
    },
  },
  defaultVariants: {
    backgroundColor: 'white',
  },
});

export default RootContainer;
