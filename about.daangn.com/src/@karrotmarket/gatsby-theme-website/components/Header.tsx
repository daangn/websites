import NavigationMenu from '@karrotmarket/gatsby-theme-website/src/components/header/NavigationMenu';
import Something from '@karrotmarket/gatsby-theme-website/src/components/header/Something';
import { ReactComponent as LogoSvg } from '@karrotmarket/gatsby-theme-website/src/components/header/logo.svg';
import { useLocation } from '@reach/router';
import { Link, graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';
import { useInView } from 'react-intersection-observer';

import AnnouncementBanner, { useAnnouncement } from '../../../components/AnnouncementBanner';

type HeaderProps = {
  className?: string;
  navigationData: GatsbyTypes.Header_navigationDataFragment;
  isStatic?: boolean;
  sns?: boolean;
};

export const query = graphql`
  fragment Header_navigationData on PrismicSiteNavigationData {
    ...NavigationMenu_data
  }
`;

const Root = styled('div', {
  variants: {
    showBanner: {
      true: {
        '--banner-height': rem(48),

        '@sm': {
          '--banner-height': rem(52),
        },
      },
    },
  },
});

const Fixed = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
});

const Container = styled('header', {
  background: 'var(--header-background)',
  width: '100%',
  height: rem(58),
  transition: 'background 0.3s',
  backdropFilter: 'var(--header-backdrop-filter)',
  color: 'var(--header-color)',

  '@sm': {
    height: rem(68),
  },

  variants: {
    transparent: {
      true: {
        background: 'transparent',
      },
    },
  },
});

const Placer = styled('div', {
  height: `calc(${rem(58)} + var(--banner-height, 0px))`,

  '@sm': {
    height: `calc(${rem(68)} + var(--banner-height, 0px))`,
  },
});

const Content = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  paddingX: rem(24),

  '@sm': {
    contentArea: true,
  },
});

const HomeLink = styled(Link, {
  display: 'inline-block',
  lineHeight: 0,
});

const Logo = styled(LogoSvg, {
  height: rem(26),

  '@sm': {
    height: rem(32),
  },
});

const Header: React.FC<HeaderProps> = ({ className, navigationData, isStatic = false, sns }) => {
  const [placerRef, placerInView] = useInView({ threshold: 1, initialInView: true });
  const { pathname } = useLocation();
  const announcement = useAnnouncement();

  const showBanner = pathname === '/' && announcement.active;

  return (
    <Root className={className} showBanner={showBanner}>
      <Placer
        ref={placerRef}
        css={{
          position: isStatic ? 'absolute' : 'relative',
        }}
      />
      <Fixed>
        {showBanner && <AnnouncementBanner text={announcement.text} href={announcement.href} />}
        <Container transparent={isStatic && placerInView}>
          <Content>
            <HomeLink to="/">
              <Logo />
            </HomeLink>
            <Something />
            <NavigationMenu controlId="navigation-menu" data={navigationData} sns={sns} />
          </Content>
        </Container>
      </Fixed>
    </Root>
  );
};

export default Header;
