import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { mapLink, LinkType } from '@karrotmarket/gatsby-theme-website/src/link';
import { styled } from 'gatsby-theme-stitches/src/config';

type Props = {
  id?: string;
  className?: string;
  link: LinkType;
  children: React.ReactNode;
};

export default function ArrowLink({ id, className, link, children }: Props) {
  return mapLink(link, {
    Internal: (link) => (
      <Link id={id} className={className} to={link.pathname}>
        {children}
      </Link>
    ),
    External: (link) => (
      <Link
        as="a"
        id={id}
        className={className}
        href={link.url.toString()}
        target="_blank"
        rel="external noopener"
      >
        {children}
      </Link>
    ),
  });
}

const Link = styled(GatsbyLink, {
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none',

  '&::after': {
    content: '""',
    display: 'inline-block',
    width: '1.5em',
    height: '1.5em',
    marginLeft: '0.5rem',
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='14' cy='14' r='13.5' stroke='%23fff'%3E%3C/circle%3E%3Cpath d='m15 8.37 5 4.99-5 4.99M8 13.36h11' stroke='%23fff' stroke-width='1.6' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E")`,
  },
});
