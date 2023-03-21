import { styled } from 'gatsby-theme-stitches/src/config';
import _Content from '@karrotmarket/gatsby-theme-brochure/src/components/prismicBrochureDataBodyVerticalHighlightSection/Content';
import { rem } from 'polished';

const Content = styled(_Content, {
  '@md': {
    paddingX: rem(80),
  },
});

export default Content;
