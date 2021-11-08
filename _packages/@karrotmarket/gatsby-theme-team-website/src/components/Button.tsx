import { Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const Button = styled(Link, {
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$subtitle4',
  fontWeight: 'bold',
  height: rem(60),
  border: 'none',
  borderRadius: rem(10),
  cursor: 'pointer',

  variants: {
    type: {
      default: {
        color: '$gray900',
        backgroundColor: '$gray100',
        '&:hover': {
          backgroundColor: '$gray300',
        },
      },
      primary: {
        color: 'white',
        backgroundColor: '$carrot500',
        '&:hover': {
          backgroundColor: '$carrot600',
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
