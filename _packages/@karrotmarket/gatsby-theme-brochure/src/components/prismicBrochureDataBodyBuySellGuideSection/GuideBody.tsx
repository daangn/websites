import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const GuideBody = styled('div', {
  gridArea: 'body',

  display: 'grid',
  gridTemplateRows: 'repeat(3, min-content)',
  gap: '1rem',
  margin: 'auto',

  '@md': {
    // paddingX: rem(60),
    paddingY: rem(40),
  },
  variants: {
    guideFor: {
      sell: {
        '@md': {
          paddingLeft: rem(24),
          paddingRight: rem(60),
        },
      },
      buy: {
        '@md': {
          paddingLeft: rem(60),
        },
      },
    },
  },
});

export default GuideBody;
