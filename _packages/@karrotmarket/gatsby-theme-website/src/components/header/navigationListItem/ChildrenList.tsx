import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { rem } from 'polished';
import * as React from 'react';

import { styled } from 'gatsby-theme-stitches/src/config';
import { mapLink, useLinkParser } from '../../../link';

import externalSvgUrl from '!!file-loader!./external.svg';

import { ReactComponent as MediumIcon } from '../../../assets/medium.svg';
import { ReactComponent as YoutubeIcon } from '../../../assets/youtube.svg';

const Container = styled('ul', {
  listStyle: 'none',
  margin: 0,
  display: 'flex',
  borderRadius: rem(10),

  flexDirection: 'column',
  padding: 0,
  paddingTop: rem(16),

  alignItems: 'flex-start',

  gap: rem(6),

  '@sm': {
    gap: 0,
  },

  '@md': {
    position: 'absolute',
    top: `calc(100% + ${rem(12)})`,
    left: 'calc(50%)',

    alignItems: 'stretch',

    padding: rem(6),
    backgroundColor: 'white',
    boxShadow: '0 3px 15px rgba(0, 0, 0, 0.1)',

    opacity: 0,
    visibility: 'hidden',
    transform: 'translateX(-50%) scale(0.9)',
    transformOrigin: 'top center',
    transition: 'opacity 0.2s 0.2s, visibility 0.2s 0.2s, transform 0.2s 0.2s',
  },
});

const ChildLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: rem(6),

  borderRadius: rem(4),
  minHeight: rem(48),
  boxSizing: 'border-box',

  fontSize: rem(20),
  lineHeight: '135%',
  fontWeight: 400,

  textDecoration: 'none',

  color: 'var(--header-color)',

  opacity: 0.5,
  transform: 'translateY(50%)',
  transition: 'opacity .3s, transform .3s, background-color 0.2s, color 0.2s',

  ':checked ~ ul > li > ul > li > &': {
    opacity: 1,
    transform: 'none',
  },

  '& > svg': {
    flexShrink: 0,
  },

  '@sm': {
    fontSize: rem(16),
    opacity: 1,
    transform: 'none',
  },

  '@md': {
    padding: rem(10),
    justifyContent: 'space-between',

    '&:hover, &:focus-visible': {
      color: 'var(--header-hover-color)',
      backgroundColor: '#F7F8F9',
    },
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

const ExternalChildLink = styled(ChildLink, {
  '&::after': {
    content: '',
    display: 'inline-block',
    width: rem(18),
    height: rem(18),
    backgroundColor: 'currentColor',
    maskImage: `url(${externalSvgUrl})`,
    flexShrink: 0,
  },

  '& > span': {
    flexGrow: 1,
  },
});

const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: rem(20),
  height: rem(20),
  borderRadius: rem(4),
  backgroundColor: 'white',
  flexShrink: 0,
});

interface ChildItem {
  display_text: string | null;
  link: { url: string | null } | null;
  new_tab: boolean | null;
  service: string | null;
}

interface ChildrenListProps {
  items: ChildItem[];
}

const iconMap: Record<string, { comp: () => React.ReactElement }> = {
  medium: {
    comp: () => (
      <IconContainer>
        <MediumIcon width="100%" />
      </IconContainer>
    ),
  },
  youtube: {
    comp: () => (
      <IconContainer
        css={{
          boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
        }}
      >
        <YoutubeIcon color="#FF0000" width="16" />
      </IconContainer>
    ),
  },
};

const ChildrenList: React.FC<ChildrenListProps> = ({ items }) => {
  const parseLink = useLinkParser();
  const location = useLocation();

  const validChildren = items.filter((item) => item.link?.url);

  if (validChildren.length === 0) {
    return null;
  }

  return (
    <Container>
      {validChildren.map((child) => (
        // biome-ignore lint/style/noNonNullAssertion: filtered above
        <li key={child.link!.url}>
          {/* biome-ignore lint/style/noNonNullAssertion: filtered above */}
          {mapLink(parseLink(child.link!.url!), {
            Internal: (link) => (
              <ChildLink
                to={link.pathname}
                active={
                  link.pathname === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.pathname)
                }
              >
                {child.display_text}
              </ChildLink>
            ),
            External: (link) => (
              <ExternalChildLink
                as="a"
                rel="external noopener"
                href={link.url.href}
                target={child.new_tab ? '_blank' : undefined}
              >
                {child.service && iconMap[child.service]?.comp()}
                <span>{child.display_text}</span>
              </ExternalChildLink>
            ),
          })}
        </li>
      ))}
    </Container>
  );
};

export default ChildrenList;
