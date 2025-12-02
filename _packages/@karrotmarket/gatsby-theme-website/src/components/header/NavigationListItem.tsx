import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { rem } from 'polished';
import * as React from 'react';

import { styled } from 'gatsby-theme-stitches/src/config';
import { mapLink, useLinkParser } from '../../link';

import externalSvgUrl from '!!file-loader!./navigationListItem/external.svg';
import ChildrenList from './navigationListItem/ChildrenList';

const NavigationListItemContainer = styled('li', {
  fontSize: '$subtitle2',
  fontWeight: 'bold',

  '@sm': {
    fontSize: '$body2',
  },

  '@md': {
    position: 'relative',

    '&:hover > ul, &:focus-within > ul': {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateX(-50%) scale(1)',
      transitionDelay: '0s',
    },
  },
});

const NavigationLink = styled(Link, {
  display: 'inline-flex',
  alignItems: 'center',

  textDecoration: 'none',
  color: 'var(--header-color)',

  opacity: 0.5,
  transform: 'translateY(50%)',
  transition: 'opacity .3s, transform .3s',

  ':checked ~ ul > li > &': {
    opacity: 1,
    transform: 'none',
  },

  '&:hover, &:focus': {
    color: 'var(--header-hover-color)',
  },

  '@sm': {
    opacity: 1,
    transform: 'none',
  },

  variants: {
    active: {
      true: {
        color: 'var(--header-active-color)',
        '&:hover, &:focus': {
          color: 'var(--header-active-hover-color)',
        },
      },
    },
  },
});

const ExternalLink = styled(NavigationLink, {
  '&::after': {
    content: '',
    display: 'inline-block',
    width: rem(18),
    height: rem(18),
    backgroundColor: 'currentColor',
    maskImage: `url(${externalSvgUrl})`,
  },
});

type HeaderEntry = GatsbyTypes.NavigationMenu_dataFragment['header_entries'][number];

interface HeaderEntryItemProps {
  entry: HeaderEntry;
}

const NavigationListItem: React.FC<HeaderEntryItemProps> = ({ entry }) => {
  const parseLink = useLinkParser();
  const location = useLocation();

  return (
    // biome-ignore lint/style/noNonNullAssertion: intentional
    <NavigationListItemContainer key={entry.link!.url}>
      {/* biome-ignore lint/style/noNonNullAssertion: intentional */}
      {mapLink(parseLink(entry.link!.url), {
        Internal: (link) => (
          <NavigationLink
            to={link.pathname}
            active={
              link.pathname === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.pathname)
            }
          >
            {entry.display_text}
          </NavigationLink>
        ),
        External: (link) => (
          <ExternalLink as="a" rel="external noopener" href={link.url.href}>
            {entry.display_text}
          </ExternalLink>
        ),
      })}
      {entry.children?.document && 'data' in entry.children.document && (
        <ChildrenList items={entry.children.document.data.children} />
      )}
    </NavigationListItemContainer>
  );
};

export default NavigationListItem;
