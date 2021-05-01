import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { graphql, useStaticQuery } from 'gatsby';
import { global, styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';

import _Header from './layout/Header';
import _Footer from './layout/Footer';
import FadeInWhenVisible from './FadeInWhenVisible';

const globalStyles = global({
  '*': {
    margin: 0,
    fontFamily: 'inherit',
  },
  'body': {
    color: '$gray900',
    fontFamily: 'sans-serif',
    textRendering: 'optimizeLegibility',
    wordBreak: 'break-word',
    WebkitFontSmoothing: 'antialiased'
  },
  'body:lang(ko)': {
    wordBreak: 'keep-all',
  },
  'a': {
    color: '$carrot500',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    ':focus': {
      transition: 'outline-offset .25s ease',
      outlineOffset: '3px',
    },
  },
});

const Header = styled(_Header, {
  marginBottom: rem(36),

  variants: {
    wide: {
      true: {
        marginBottom: rem(100),
      },
    },
  },
});

const Footer = styled(_Footer, {
  marginTop: rem(120),

  variants: {
    wide: {
      true: {
        marginTop: rem(160),
      },
    },
  },
});

const Main = styled('main', {
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

const Layout: React.FC = ({
  children,
}) => {
  globalStyles();

  const data = useStaticQuery<GatsbyTypes.LayoutStaticQuery>(graphql`
    query LayoutStatic {
      siteNavigation {
        ...Header_navigation
        ...Footer_navigation
      }
    }
  `);

  if (!data.siteNavigation) {
    throw new Error('SiteNavigation 노드가 없습니다.');
  }

  return (
    <>
      <Helmet key="helmet">
        <html lang="ko" />
      </Helmet>
      <Header
        key="header"
        navigation={data.siteNavigation}
        wide={{ '@sm': true }}
      />
      <FadeInWhenVisible>
        <Main
          key="main"
          wide={{ '@sm': true }}
        >
          {children}
        </Main>
      </FadeInWhenVisible>
      <Footer
        key="footer"
        navigation={data.siteNavigation}
        wide={{ '@sm': true }}
      />
    </>
  );
}

export default Layout;
