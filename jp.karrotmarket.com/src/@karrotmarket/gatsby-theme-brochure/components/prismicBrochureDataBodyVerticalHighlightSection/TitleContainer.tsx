import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import _TitleContainer from '@karrotmarket/gatsby-theme-brochure/src/components/prismicBrochureDataBodyVerticalHighlightSection/TitleContainer';

const TitleContainer = styled(_TitleContainer, {
  '& h2': {
    fontSize: rem(42),
    '@lg': {
      fontSize: rem(54),
    },
  },
});

export default TitleContainer;
