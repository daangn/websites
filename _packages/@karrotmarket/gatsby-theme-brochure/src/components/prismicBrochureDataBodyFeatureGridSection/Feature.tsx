import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const Feature = styled('div', {
  display: 'grid',
  gap: rem(24),

  '@md': {
    gap: rem(30),
  },
});

export default Feature;
