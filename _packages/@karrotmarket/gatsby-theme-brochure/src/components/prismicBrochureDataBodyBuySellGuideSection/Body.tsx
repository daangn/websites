import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';

const Body = styled('div', {
  display: 'grid',
  gap: rem(40),

  '@md': {
    gap: rem(40),
  },
});

export default Body;
