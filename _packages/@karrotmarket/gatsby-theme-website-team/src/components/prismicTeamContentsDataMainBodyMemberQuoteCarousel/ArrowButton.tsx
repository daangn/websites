import { em } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

const ArrowButton = styled('button', {
  color: vars.$scale.color.gray900,
  border: 'none',
  background: 'none',
  padding: 0,
  cursor: 'pointer',
  transition: 'opacity 0.2s ease-in-out',
  '&:hover': {
    opacity: 0.64,
  },
  '& svg': {
    display: 'inline-block',
    width: em(56),
    height: em(56),
  },

  variants: {
    direction: {
      left: {
      },
      right: {
        transform: 'scaleX(-1)',
      },
    },
  },

  defaultVariants: {
    direction: 'left',
  },
});

export default ArrowButton;
