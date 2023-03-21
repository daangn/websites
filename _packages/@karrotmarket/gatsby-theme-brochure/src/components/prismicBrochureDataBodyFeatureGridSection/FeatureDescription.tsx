import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const FeatureDescription = styled('div', {
  color: vars.$scale.color.gray700,
  fontSize: rem(16),

  '@md': {
    fontSize: rem(18),
  },
});

export default FeatureDescription;
