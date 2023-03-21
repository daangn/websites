import { styled } from 'gatsby-theme-stitches/src/config';

const RootContainer = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',

  variants: {
    backgroundColor: {
      white: {},
      gray: {},
      ivory: {
        backgroundColor: '#F7F2ED',
      },
      orange: {},
      blue: {},
    },
  },
});

export default RootContainer;
