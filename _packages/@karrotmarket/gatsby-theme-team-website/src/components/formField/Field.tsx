import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token'

export const Container = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

export const Label = styled('label', {
  display: 'inline-flex',
  alignItems: 'center',
  color: vars.$scale.color.gray700,
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
          background: vars.$scale.color.carrot500,
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
  border: `1px solid ${vars.$scale.color.gray400}`,
  backgroundColor: vars.$semantic.color.paperDefault,
  borderRadius: rem(8),
  typography: '$body2',
  paddingX: rem(20),
  '&:focus': {
    outlineStyle: 'solid',
    outlineColor: '-webkit-focus-ring-color',
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'outline-offset .25s ease',
      outlineOffset: '3px',
    },
  },
  '&::placeholder': {
    color: vars.$scale.color.gray500,
  },
});

export const Description = styled('p', {
  color: vars.$scale.color.gray600,
  marginTop: rem(16),
  wordBreak: 'break-all',
});
