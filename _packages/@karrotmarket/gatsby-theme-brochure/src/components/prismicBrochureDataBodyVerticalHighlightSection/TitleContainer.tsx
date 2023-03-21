import { styled } from 'gatsby-theme-stitches/src/config';

const TitleContainer = styled('div', {
  '& h2': {
    typography: '$heading2',
  },
  '& h3': {
    typography: '$heading3',
  },
});

export default TitleContainer;
