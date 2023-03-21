import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';

const Content = styled('div', {
  contentArea: true,
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'center',

  paddingY: rem(120),

  display: 'grid',
  gap: rem(32),
  gridTemplateAreas: ['"body"', '"component-image"'].join('\n'),

  variants: {
    direction: {
      row: {
        '@md': {
          gridTemplateAreas: ['"body component-image"'].join('\n'),
        },
      },
      column: {},
    },
  },

  defaultVariants: {
    direction: 'row',
  },
});

export default Content;
