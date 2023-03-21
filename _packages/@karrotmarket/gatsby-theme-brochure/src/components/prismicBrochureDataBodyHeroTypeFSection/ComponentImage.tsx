import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';

const ComponentImage = styled(GatsbyImage, {
  gridArea: 'component-image',
  width: '100%',
  margin: '0 auto',

  '@md': {
    margin: 0,
  },

  variants: {
    wide: {
      true: {
        display: 'none',
        '@md': {
          display: 'block',
        },
      },
      false: {
        display: 'block',
        '@md': {
          display: 'none',
        },
      },
    },
  },

  defaultVariants: {
    wide: false,
  },
});

export default ComponentImage;
