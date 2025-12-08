import { useLocation } from '@reach/router';
import { Link, graphql } from 'gatsby';
import { em, rem } from 'polished';
import * as React from 'react';

import { styled } from 'gatsby-theme-stitches/src/config';
import { mapLink, useLinkParser } from '../../../link';

import externalSvgUrl from '!!file-loader!./external.svg';

import { vars } from '@seed-design/design-token';
import { ReactComponent as LogoSvg } from '../../../assets/logo.svg';
import { ReactComponent as MediumIcon } from '../../../assets/medium.svg';
import { ReactComponent as YoutubeIcon } from '../../../assets/youtube.svg';

const useBreakpointTransitionGuard = (query: string) => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handler = () => {
      setActive(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setActive(false);
        });
      });
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return active;
};

export const query = graphql`
  fragment ChildrenList_item on PrismicSiteNavigationHeaderEntryChildrenDataChildrenItem {
    display_text
    link {
      url
    }
    new_tab
    service
  }
`;

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
    left: '50%',

    alignItems: 'stretch',

    padding: rem(6),
    backgroundColor: vars.$semantic.color.paperDefault,
    boxShadow: '0 3px 15px rgba(0, 0, 0, 0.1)',

    opacity: 0,
    visibility: 'hidden',
    transform: 'translateX(-50%) scale(0.9)',
    transformOrigin: 'top center',

    transition: 'opacity 0.2s 0.5s, visibility 0.2s 0.5s, transform 0.2s 0.5s',

    '&[data-disable-transition]': {
      transition: 'none',
    },

    '&:hover, &:focus-within': {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateX(-50%) scale(1)',

      transition: 'opacity 0.2s, visibility 0.2s, transform 0.2s',
    },
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
  transition: 'opacity .2s, transform .2s, background-color 0.2s, color 0.2s',

  '& > span': {
    whiteSpace: 'nowrap',
    flexGrow: 1,
  },

  ':checked ~ ul > li > ul > li > &': {
    opacity: 1,
    transform: 'none',
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
      backgroundColor: vars.$semantic.color.grayHover,
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

  '& > svg': {
    flexShrink: 0,
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

interface ChildrenListProps {
  items: ReadonlyArray<GatsbyTypes.ChildrenList_itemFragment>;
}

const iconMap: Record<string, { comp: () => React.ReactElement }> = {
  daangn: {
    comp: () => (
      <IconContainer
        css={{
          boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
        }}
      >
        <LogoSvg height="18" />
      </IconContainer>
    ),
  },
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
        <YoutubeIcon color="#FF0000" width="14" />
      </IconContainer>
    ),
  },
};

const ChildrenList: React.FC<ChildrenListProps> = ({ items }) => {
  const parseLink = useLinkParser();
  const location = useLocation();
  const suppress = useBreakpointTransitionGuard(`(min-width: ${em(768)})`);

  return (
    <Container {...(suppress && { 'data-disable-transition': '' })}>
      {items.map((child) => (
        // biome-ignore lint/style/noNonNullAssertion: filtered already
        <li key={child.link!.url!}>
          {/* biome-ignore lint/style/noNonNullAssertion: filtered already */}
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
                {child.service && iconMap[child.service]?.comp()}
                <span>{child.display_text}</span>
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
