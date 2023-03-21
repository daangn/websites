import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const GuideDescription = styled('p', {
  fontSize: rem(18),

  '@md': {
    fontSize: rem(30),
  },
});

export default GuideDescription;
