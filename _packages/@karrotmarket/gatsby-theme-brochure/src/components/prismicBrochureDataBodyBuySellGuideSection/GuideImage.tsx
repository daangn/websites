import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';

const GuideImage = styled(GatsbyImage, {
  gridArea: 'image',
});

export default GuideImage;
