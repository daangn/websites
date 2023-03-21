import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const GuideTitle = styled('h3', {
  fontSize: rem(26),

  '@md': {
    fontSize: rem(32),
  },
});

export default GuideTitle;
