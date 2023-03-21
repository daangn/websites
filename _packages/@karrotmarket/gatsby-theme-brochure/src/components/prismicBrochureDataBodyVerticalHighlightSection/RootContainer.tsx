import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';

const RootContainer = styled('section', {
  paddingY: rem(60),

  '@md': {
    paddingY: rem(120),
  },
});

export default RootContainer;
