import { Link } from 'gatsby';
import { em } from 'polished';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';

import { ReactComponent as ArrowSvg } from '../assets/arrow.svg';

const CtaButton = ({
  children,
  link,
  style,
}: { children: React.ReactNode; link: string; style?: React.CSSProperties }) => {
  return (
    <Button to={link} style={style}>
      {children}
      <ArrowSvg />
    </Button>
  );
};

const Button = styled(Link, {
  display: 'inline-flex',
  flexWrap: 'wrap',
  whiteSpace: 'nowrap',
  alignItems: 'center',
  color: vars.$scale.color.gray900,
  textDecoration: 'none',
  typography: '$body2',
  fontWeight: 'bold',

  '@md': {
    typography: '$subtitle3',
  },

  transition: 'opacity 0.2s ease-in-out',
  '&:hover': {
    opacity: 0.64,
  },

  '& svg': {
    display: 'inline-block',
    marginLeft: em(8),
    width: em(32, 20),
    height: em(32, 20),
  },
});

export default CtaButton;
