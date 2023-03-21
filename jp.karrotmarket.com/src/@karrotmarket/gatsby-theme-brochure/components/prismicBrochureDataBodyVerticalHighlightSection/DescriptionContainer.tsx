import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import _DescriptionContainer from '@karrotmarket/gatsby-theme-brochure/src/components/prismicBrochureDataBodyVerticalHighlightSection/DescriptionContainer';

const DescriptionContainer = styled(_DescriptionContainer, {
  fontSize: rem(20),
  '@lg': {
    fontSize: rem(26),
  },
});

export default DescriptionContainer;
