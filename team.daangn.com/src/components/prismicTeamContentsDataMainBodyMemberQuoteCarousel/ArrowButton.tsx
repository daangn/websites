import { em } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

import arrowSvgUrl from './arrow.svg';

const ArrowButton = styled('button', {
  color: '$gray900',
  border: 'none',
  background: 'none',
  padding: 0,
  cursor: 'pointer',
  transition: 'opacity 0.2s ease-in-out',
  '&:hover': {
    opacity: 0.64,
  },
  '&::after': {
    content: '""',
    display: 'inline-block',
    width: em(56),
    height: em(56),
    background: `url(${arrowSvgUrl})`,
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
