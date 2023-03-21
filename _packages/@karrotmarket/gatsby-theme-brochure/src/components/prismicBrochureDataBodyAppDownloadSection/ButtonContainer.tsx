import { styled } from 'gatsby-theme-stitches/src/config';

const ButtonContainer = styled('div', {
  display: 'none',

  '@md': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, max-content)',
    gap: '1rem',
    justifyContent: 'center',
  },
});

export default ButtonContainer;
