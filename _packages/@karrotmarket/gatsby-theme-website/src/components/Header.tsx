import { vars } from '@seed-design/design-token';
import { Link, graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';
import { useInView } from 'react-intersection-observer';

import NavigationMenu from './header/NavigationMenu';
import Something from './header/Something';
import { ReactComponent as LogoSvg } from './header/logo.svg';

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

const Container = styled('header', {
  position: 'fixed',
  top: 0,
  background: 'var(--header-background)',
  width: '100%',
  height: rem(58),
  zIndex: 100,
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
  height: rem(58),

  '@sm': {
    height: rem(68),
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

  return (
    <div className={className}>
      <Placer
        ref={placerRef}
        css={{
          position: isStatic ? 'absolute' : 'relative',
        }}
      />
      <Container transparent={isStatic && placerInView}>
        <Content>
          <HomeLink to="/">
            <Logo />
          </HomeLink>
          <Something />
          <NavigationMenu controlId="navigation-menu" data={navigationData} sns={sns} />
        </Content>
      </Container>
    </div>
  );
};

export default Header;
