import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const Content = styled('div', {
  contentArea: true,

  display: 'grid',
  gap: rem(60),

  '@md': {
    gap: rem(80),
  },
});

export default Content;
