import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const Content = styled('div', {
  contentArea: true,

  display: 'grid',
  gap: rem(40),
});

export default Content;
