import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';

const HighlightImage = styled(GatsbyImage, {
  gridArea: 'image',
  height: 'min-content',
});

export default HighlightImage;
