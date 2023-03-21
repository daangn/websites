import { styled } from 'gatsby-theme-stitches/src/config';

const TitleContainer = styled('div', {
  '& h1': {
    display: 'inline-block',
    textAlign: 'left',

    typography: '$subtitle1',
    wordBreak: 'keep-all',
    whiteSpace: 'initial',

    '@md': {
      typography: '$heading1',
      whiteSpace: 'pre-line',
    },
  },
});

export default TitleContainer;
