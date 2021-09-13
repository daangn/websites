import { styled } from 'gatsby-theme-stitches/src/config';

const PageTitle = styled('h1', {
  typography: '$subtitle2',
  whiteSpace: 'pre-line',

  '@sm': {
    typography: '$heading3',
  },
});

export default PageTitle;
