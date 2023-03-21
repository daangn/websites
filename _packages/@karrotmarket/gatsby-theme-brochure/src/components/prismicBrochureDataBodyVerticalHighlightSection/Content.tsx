import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const Content = styled('div', {
  contentArea: true,

  display: 'grid',
  gridTemplateAreas: ['"body"', '"image"'].join('\n'),
  gap: rem(40),

  '@md': {
    gap: rem(70),
  },

  variants: {
    reversed: {
      true: {
        '@md': {
          gridTemplateAreas: ['"body image"'].join('\n'),
        },
      },
      false: {
        '@md': {
          gridTemplateAreas: ['"image body"'].join('\n'),
        },
      },
    },
  },

  defaultVariants: {
    reversed: false,
  },
});

export default Content;
