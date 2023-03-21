import { styled } from 'gatsby-theme-stitches/src/config';

const TitleContainer = styled('div', {
  '& h1': {
    display: 'inline-block',
    textAlign: 'left',

    typography: '$subtitle1',

    '@md': {
      typography: '$heading1',
    },
  },
});

export default TitleContainer;
