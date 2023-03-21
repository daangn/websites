import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const Body = styled('div', {
  gridArea: 'body',

  display: 'grid',
  gridTemplateRows: 'repeat(2, min-content)',
  gap: rem(24),
  alignItems: 'center',
  margin: 'auto',
});

export default Body;
