import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const TitleContainer = styled('div', {
  '& h2': {
    typography: '$heading2',
    fontSize: rem(54),
  },
  '& h3': {
    typography: '$heading3',
  },

  textAlign: 'left',

  '@md': {
    textAlign: 'center',
  },
});

export default TitleContainer;
