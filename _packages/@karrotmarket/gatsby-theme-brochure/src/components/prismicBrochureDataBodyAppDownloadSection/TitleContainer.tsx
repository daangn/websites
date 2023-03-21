import { styled } from 'gatsby-theme-stitches/src/config';

const TitleContainer = styled('div', {
  '& h2': {
    typography: '$subtitle2',

    '@md': {
      typography: '$heading4',
    },
  },
});

export default TitleContainer;
