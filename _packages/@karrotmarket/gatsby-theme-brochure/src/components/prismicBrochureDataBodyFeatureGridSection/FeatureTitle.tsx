import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const FeatureTitle = styled('div', {
  fontSize: rem(20),

  '@md': {
    fontSize: rem(26),
  },
});

export default FeatureTitle;
