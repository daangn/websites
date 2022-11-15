import { Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import { vars } from '@seed-design/design-token'

const Button = styled(Link, {
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$subtitle4',
  fontWeight: 'bold',
  textAlign: 'center',
  height: rem(60),
  border: 'none',
  borderRadius: rem(10),
  cursor: 'pointer',

  variants: {
    type: {
      default: {
        color: vars.$scale.color.gray900,
        backgroundColor: vars.$scale.color.gray100,
        '&:hover': {
          backgroundColor: vars.$scale.color.gray300,
        },
      },
      primary: {
        color: vars.$static.color.white,
        backgroundColor: vars.$scale.color.carrot500,
        '&:hover': {
          backgroundColor: vars.$scale.color.carrot600,
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {
        width: 'min-content',
        minWidth: rem(260),
      },
    },
  },
  defaultVariants: {
    type: 'default',
    fullWidth: false,
  },
});

export default Button;
