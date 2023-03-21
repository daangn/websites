import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';

const ComponentImage = styled(GatsbyImage, {
  gridArea: 'component-image',
  margin: '0 auto',

  '@md': {
    margin: 0,
  },
});

export default ComponentImage;
