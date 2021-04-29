import { Link, graphql } from 'gatsby';
import { rem } from 'polished';
import { useLocation } from '@reach/router';
import { mapAbstractType } from '@cometjs/graphql-utils';
import { styled } from '~/gatsby-theme-stitches/stitches.config';

type HamburgerMenuProps = {
  controlId: string,
  className?: string,
  navigation: GatsbyTypes.NavigationMenu_navigationFragment,
};

export const query = graphql`
  fragment NavigationMenu_navigation on SiteNavigation {
    headerEntries {
      __typename
      href
      displayName
      ...on SiteNavigationEntryInternal {
        pathname
      }
      ...on SiteNavigationEntryExternal {
        url
      }
    }
  }
`;

const Container = styled('nav', {
  position: 'relative',
});

const Hamburger = styled('label', {
  position: 'absolute',
  top: '50%',
  right: 0,
  transform: 'translateY(-50%)',
  zIndex: 1,
  cursor: 'pointer',

  variants: {
    disabled: {
      true: {
        display: 'none',
      },
    },
  },
});

const HamburgerControl = styled('input', {
  display: 'none',
});

const HamburgerSvg = styled('svg', {
  width: rem(24),
  height: rem(24),
});

const Line = styled('path', {
  fill: 'none',
  stroke: '$gray900',
  strokeWidth: '6',
  strokeLinecap: 'round',
  strokeDasharray: '60 207',
  transition: [
    'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1)',
    'stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)',
  ].join(', '),

  ':checked + label &': {
    strokeDasharray: '90 207',
    strokeDashoffset: '-134',
  },
});

const NavigationList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',

  paddingX: rem(24),
  paddingY: rem(94),

  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transform: 'translateX(100%)',

  transition: 'background .3s ease-in-out',

  ':checked ~ &': {
    transform: 'translateX(0)',
    background: '#fff',
  },

  variants: {
    fixed: {
      false: {
        flexDirection: 'row',
        position: 'relative',
        transform: 'none',
        paddingX: 0,
        paddingY: 0,
      },
    },
  },
});

const NavigationListItem = styled('li', {
  fontSize: '$subtitle2',
  fontWeight: 'bold',

  opacity: 0.5,
  transform: 'translateY(50%)',
  transition: [
    'opacity .3s',
    'transform .3s',
  ].join(','),

  ':checked ~ ul > &': {
    opacity: 1,
    transform: 'none',
  },

  variants: {
    size: {
      sm: {
        fontSize: '$body2',
        opacity: 1,
        transform: 'none',
      },
    },
  },
});

const NavigationLink = styled(Link, {
  textDecoration: 'none',
  color: '$gray900',
  '&:hover, &:active, &:focus': {
    color: '$gray600',
  },

  variants: {
    active: {
      true: {
        color: '$carrot500',
        '&:hover, &:active, &:focus': {
          color: '$carrot600',
        },
      },
    },
  },
});

export default function NavigationMenu({
  controlId,
  className,
  navigation,
}: HamburgerMenuProps) {
  const location = useLocation();

  return (
    <Container className={className}>
      <HamburgerControl type="checkbox" id={controlId} />
      <Hamburger
        htmlFor={controlId}
        aria-label="네비게이션 메뉴 토글"
        disabled={{ '@sm': true }}
      >
        <HamburgerSvg viewBox="0 0 100 100">
          <Line d="M 20 30 H 80 C 80 30 95 30 95 65 C 95 80 90 80 85 80 C 80 80 75 75 75 75 L 25 25" />
          <Line d="M 20 70 H 80 C 80 70 95 70 95 35 C 95 20 90 20 85 20 C 80 20 75 25 75 25 L 25 75" />
        </HamburgerSvg>
      </Hamburger>
      <NavigationList fixed={{ initial: true, '@sm': false }}>
        {navigation.headerEntries.map(entry => (
          <NavigationListItem key={entry.href} size={{ '@sm': 'sm' }}>
            {mapAbstractType(entry, {
              SiteNavigationEntryInternal: entry => (
                <NavigationLink
                  to={entry.pathname}
                  active={location.pathname.startsWith(entry.pathname)}
                >
                  {entry.displayName}
                </NavigationLink>
              ),
              SiteNavigationEntryExternal: entry => (
                <NavigationLink
                  as="a"
                  target="_blank"
                  rel="external noopener"
                  href={entry.url}
                >
                  {entry.displayName}
                </NavigationLink>
              ),
            })}
          </NavigationListItem>
        ))}
      </NavigationList>
    </Container>
  );
}
