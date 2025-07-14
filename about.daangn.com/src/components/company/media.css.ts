import { recipe } from '@vanilla-extract/recipes';

const small = '(max-width: 640px)';
const medium = '(max-width: 1024px)';
const base = '(min-width: 1025px)';

export const media = {
  small,
  medium,
  base,
};

export const show = recipe({
  base: {
    display: 'none',
  },
  variants: {
    grow: {
      true: {
        flex: 1,
      },
    },
    when: {
      base: {
        '@media': {
          [media.base]: {
            display: 'block',
          },
        },
      },
      medium: {
        '@media': {
          [media.medium]: {
            display: 'block',
          },
        },
      },
      small: {
        '@media': {
          [media.small]: {
            display: 'block',
          },
        },
      },
    },
  },
});
