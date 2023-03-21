import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const GuideLabel = styled('span', {
  color: '$$accentColor',
  display: 'inline-block',
  width: 'max-content',
  paddingY: rem(6),
  paddingX: rem(16),
  fontSize: rem(12),
  fontWeight: 'bold',
  border: '2px solid $$accentColor',
  borderRadius: '60px',

  '@md': {
    fontSize: rem(16),
  },
});

export default GuideLabel;
