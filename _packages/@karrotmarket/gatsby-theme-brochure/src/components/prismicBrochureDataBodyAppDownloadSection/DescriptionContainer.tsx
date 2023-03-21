import { styled } from 'gatsby-theme-stitches/src/config';

const DescriptionContainer = styled('div', {
  typography: '$body2',

  '@md': {
    typography: '$subtitle3',
  },
});

export default DescriptionContainer;
