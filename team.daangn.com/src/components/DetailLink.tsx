import * as React from 'react';
import { rem, em } from 'polished';
import { Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import type { LinkType } from '@karrotmarket/gatsby-theme-website/src/link';
import { mapLink } from '@karrotmarket/gatsby-theme-website/src/link';

import arrowSvgUrl from './detailLink/arrow.svg';

type DetailLinkProps = {
  link: LinkType,
  className?: string,
  children: string,
};

const Base = styled(Link, {
  display: 'inline-flex',
  alignItems: 'center',
  color: '$gray900',
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

  '&::after': {
    content: '""',
    display: 'inline-block',
    marginLeft: em(8),
    width: em(32, 20),
    height: em(32, 20),
    background: `url(${arrowSvgUrl})`,
  },
});

const DetailLink: React.FC<DetailLinkProps> = ({
  link,
  className,
  children,
}) => {
  return mapLink(link, {
    Internal: link => (
      <Base
        to={link.pathname}
        className={className}
      >
        {children}
      </Base>
    ),
    External: link => (
      <Base
        as="a"
        rel="external noopener"
        href={link.url.href}
        className={className}
      >
        {children}
      </Base>
    ),
  });
};

export default DetailLink;
