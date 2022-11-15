import * as React from 'react';
import { em } from 'polished';
import { Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import type { LinkType } from '@karrotmarket/gatsby-theme-website/src/link';
import { mapLink } from '@karrotmarket/gatsby-theme-website/src/link';
import { vars } from '@seed-design/design-token';

import { ReactComponent as ArrowSvg } from './arrowLink/arrow.svg'

type ArrowLinkProps = {
  link: LinkType,
  direction: 'forward' | 'backward',
  className?: string,
  onClick?: React.MouseEventHandler,
  children: string,
};

const Base = styled(Link, {
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

  variants: {
    direction: {
      forward: {
        '& svg': {
          display: 'inline-block',
          marginLeft: em(8),
          width: em(32, 20),
          height: em(32, 20),
        }
      },
      backward: {
        justifyContent: 'flex-end',
        flexDirection: 'row-reverse',
        '& svg': {
          display: 'inline-block',
          marginRight: em(8),
          width: em(32, 20),
          height: em(32, 20),
          transform: 'scaleX(-1)',
        }
      },
    },
  },
});

const ArrowLink: React.FC<ArrowLinkProps> = ({
  link,
  direction,
  className,
  onClick,
  children,
}) => {
  return mapLink(link, {
    Internal: link => (
      <Base
        to={link.pathname}
        onClick={onClick}
        direction={direction}
        className={className}
      >
        {children}
        <ArrowSvg />
      </Base>
    ),
    External: link => (
      <Base
        as="a"
        rel="external noopener"
        href={link.url.href}
        onClick={onClick}
        direction={direction}
        className={className}
      >
        {children}
        <ArrowSvg />
      </Base>
    ),
  });
};

export default ArrowLink;
