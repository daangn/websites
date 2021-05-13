import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

import NavigationMenu from './header/NavigationMenu';
import { ReactComponent as LogoSvg } from './header/logo.svg';

type HeaderProps = {
  className?: string,
  navigation: GatsbyTypes.Header_navigationFragment,
};

export const query = graphql`
  fragment Header_navigation on SiteNavigation {
    ...NavigationMenu_navigation
  }
`;

const Container = styled('header', {
  position: 'fixed',
  top: 0,
  background: '#fff',
  width: '100%',
  height: rem(58),
  zIndex: 1,

  variants: {
    size: {
      sm: {
        height: rem(68),
      },
    },
  },
});

const Placer = styled('div', {
  height: rem(58),

  variants: {
    size: {
      sm: {
        height: rem(68),
      },
    },
  },
});

const Content = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  paddingX: rem(24),

  variants: {
    wide: {
      true: {
        maxWidth: '$maxContent',
        margin: '0 auto',
      },
    },
  },
});

const HomeLink = styled(Link, {
  display: 'inline-block',
  lineHeight: 0,
});

const Logo = styled(LogoSvg, {
  height: rem(26),

  variants: {
    size: {
      sm: {
        height: rem(32),
      },
    },
  },
});

const Header: React.FC<HeaderProps> = ({
  className,
  navigation,
}) => {
  return (
    <div className={className}>
      <Placer size={{ '@sm': 'sm' }} />
      <Container size={{ '@sm': 'sm' }}>
        <Content wide={{ '@sm': true }}>
          <HomeLink to="/">
            <Logo size={{ '@sm': 'sm' }} />
          </HomeLink>
          <NavigationMenu
            controlId="navigation-menu"
            navigation={navigation}
          />
        </Content>
      </Container>
    </div>
  );
};

export default Header;
