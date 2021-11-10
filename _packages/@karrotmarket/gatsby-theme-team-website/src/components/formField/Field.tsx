import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const Label = styled('label', {
  display: 'inline-flex',
  alignItems: 'center',
  color: '$gray700',
  typography: '$body2',
  marginBottom: rem(8),
  variants: {
    required: {
      true: {
        '&::after': {
          content: '""',
          display: 'inline-block',
          marginLeft: rem(4),
          width: rem(6),
          height: rem(6),
          background: '$carrot500',
          borderRadius: '50%',
        },
      },
    },
  },
});

export const Input = styled('input', {
  display: 'inline-flex',
  alignItems: 'center',
  height: rem(52),
  border: '1px solid $gray400',
  borderRadius: rem(8),
  typography: '$body2',
  paddingX: rem(20),
  '&:focus': {
    border: '1px solid $carrot500',
  },
  '::placeholder': {
    color: '$gray500',
  },
});
