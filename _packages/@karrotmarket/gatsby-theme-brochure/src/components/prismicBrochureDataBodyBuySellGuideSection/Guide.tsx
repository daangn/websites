import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const Guide = styled('div', {
  backgroundColor: '$$backgroundColor',
  display: 'grid',
  width: '100%',
  boxSizing: 'border-box',
  borderRadius: '20px',

  paddingY: rem(40),
  paddingX: rem(20),

  '@md': {
    paddingY: 0,
    paddingX: 0,
  },

  variants: {
    guideFor: {
      sell: {
        paddingTop: rem(0),
        paddingBottom: rem(40),
        $$backgroundColor: vars.$scale.color.greenAlpha50,
        $$accentColor: vars.$scale.color.green500,

        gridTemplate: ['"image"', '"body"'].join('\n'),

        '@md': {
          gridTemplate: '"image body"',
        },
      },
      buy: {
        paddingTop: rem(40),
        paddingBottom: rem(0),
        $$backgroundColor: vars.$scale.color.carrotAlpha50,
        $$accentColor: vars.$scale.color.carrot500,

        gridTemplate: ['"body"', '"image"'].join('\n'),

        '@md': {
          gridTemplate: '"body image"',
        },
      },
    },
  },
});

export default Guide;
