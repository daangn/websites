import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { em } from 'polished';

const ArrowButton = styled('button', {
  color: vars.$scale.color.gray900,
  // border: '1px solid',
  // borderColor: vars.$scale.color.gray900,
  border: 'none',
  borderRadius: 999,
  background: 'none',
  padding: 0,
  cursor: 'pointer',
  transition: 'opacity 0.2s ease-in-out',
  '&:hover': {
    opacity: 0.64,
  },
  '& > svg': {
    boxSizing: 'border-box',
    // padding: em(16),
    // paddingLeft: em(18),
    width: em(44),
    height: em(44),
  },
});

export default ArrowButton;
