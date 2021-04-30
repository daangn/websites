import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const PageTitle = styled('h1', {
  fontSize: '$subtitle2',
  whiteSpace: 'pre-line',

  variants: {
    size: {
      sm: {
        fontSize: '$heading3',
      },
    },
  },
});

export default PageTitle;
