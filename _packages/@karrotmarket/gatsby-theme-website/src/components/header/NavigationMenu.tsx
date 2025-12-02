import { useLocation } from '@reach/router';
import { vars } from '@seed-design/design-token';
import { graphql } from 'gatsby';
import { config, styled } from 'gatsby-theme-stitches/src/config';
import { em, hideVisually, rem } from 'polished';
import * as React from 'react';

import SocialServiceProfile from '../footer/SocialServiceProfile';
import NavigationListItem from './NavigationListItem';

type NavigationMenuProps = {
  className?: string;
  data: GatsbyTypes.NavigationMenu_dataFragment;
  sns?: boolean;
};

export const query = graphql`
  fragment NavigationMenu_data on PrismicSiteNavigationData {
    header_entries {
      link {
        url
      }
      display_text
      children {
        document {
          ... on PrismicSiteNavigationHeaderEntryChildren {
            data {
              children {
                display_text
                link {
                  url
                }
                new_tab
                service
              }
            }
          }
        }
      }
    }
    sns_profiles {
      ...SocialServiceProfile_profile
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
  zIndex: 2,
  cursor: 'pointer',
  lineHeight: '100%',

  variants: {
    hidden: {
      true: {
        display: 'none',
      },
    },
  },
});

const HamburgerControl = styled('input', hideVisually());

const HamburgerSvg = styled('svg', {
  width: rem(24),
  height: rem(24),
});

const Line = styled('path', {
  fill: 'none',
  stroke: vars.$scale.color.gray900,
  strokeWidth: '6',
  strokeLinecap: 'round',
  strokeDasharray: '60 207',
  transition: [
    'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1)',
    'stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)',
  ].join(', '),

  variants: {
    active: {
      true: {
        strokeDasharray: '90 207',
        strokeDashoffset: '-134',
      },
    },
  },
});

const NavigationList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: rem(36),
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

  variants: {
    open: {
      true: {
        transform: 'translateX(0)',
        height: '100vh',
        background: vars.$semantic.color.paperDefault,
      },
    },
    fixed: {
      false: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: rem(56),
        position: 'relative',
        transform: 'none',
        paddingX: 0,
        paddingY: 0,
      },
    },
  },
});

const SocialServiceProfileList = styled('ul', {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: 0,
  listStyle: 'none',
  flexDirection: 'column',
  flex: 1,
  gap: rem(24),

  variants: {
    fixed: {
      false: {
        flexDirection: 'row',
        gap: rem(28),
      },
    },
  },
});

const SocialServiceProfileItem = styled('li', {
  display: 'inline-flex',
  width: rem(32),
  height: rem(32),
  alignItems: 'center',
  justifyContent: 'center',
});

const DESKTOP_BREAKPOINT = `(min-width: ${em(768)})`; // @md

const NavigationMenu: React.FC<NavigationMenuProps> = ({ className, data, sns }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    location.pathname;
    setIsMenuOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_BREAKPOINT);
    setIsDesktop(mediaQuery.matches);

    const handleBreakpointChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
      setIsMenuOpen(false);
    };

    mediaQuery.addEventListener('change', handleBreakpointChange);
    return () => mediaQuery.removeEventListener('change', handleBreakpointChange);
  }, []);

  return (
    <Container className={className}>
      <Hamburger hidden={{ '@md': true }}>
        <div style={hideVisually()}>네비게이션 메뉴 토글</div>
        <HamburgerControl
          type="checkbox"
          checked={isMenuOpen}
          onChange={(e) => setIsMenuOpen(e.target.checked)}
        />
        <HamburgerSvg viewBox="0 0 100 100">
          <Line
            active={isMenuOpen}
            d="M 20 30 H 80 C 80 30 95 30 95 65 C 95 80 90 80 85 80 C 80 80 75 75 75 75 L 25 25"
          />
          <Line
            active={isMenuOpen}
            d="M 20 70 H 80 C 80 70 95 70 95 35 C 95 20 90 20 85 20 C 80 20 75 25 75 25 L 25 75"
          />
        </HamburgerSvg>
      </Hamburger>
      <NavigationList open={isMenuOpen} fixed={{ initial: true, '@md': false }}>
        {data.header_entries
          .filter((entry) => entry.link)
          .map((entry) => (
            <NavigationListItem
              key={entry.link.url}
              entry={entry}
              menuOpen={isMenuOpen}
              isDesktop={isDesktop}
            />
          ))}
        {sns && (
          <SocialServiceProfileList fixed={{ initial: true, '@sm': false }}>
            {data.sns_profiles
              .filter((profile) => profile.link)
              .map((profile) => (
                // biome-ignore lint/style/noNonNullAssertion: intentional
                <SocialServiceProfileItem key={profile.link!.url}>
                  <SocialServiceProfile profile={profile} />
                </SocialServiceProfileItem>
              ))}
          </SocialServiceProfileList>
        )}
      </NavigationList>
    </Container>
  );
};

export default NavigationMenu;
