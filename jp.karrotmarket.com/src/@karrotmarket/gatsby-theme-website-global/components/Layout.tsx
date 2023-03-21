import * as React from 'react';
import { graphql } from 'gatsby';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import _Header from '@karrotmarket/gatsby-theme-website-global/src/components/Header';
import Footer from '@karrotmarket/gatsby-theme-website-global/src/components/Footer';
import globalStyles from '@karrotmarket/gatsby-theme-website-global/src/styles/global';

interface LayoutProps {
  data: GatsbyTypes.DefaultLayout_dataFragment;
  id?: string;
}

export const query = graphql`
  fragment DefaultLayout_data on PrismicSiteNavigation {
    data {
      ...Header_navigationData
      ...Footer_navigationData
    }
  }
`;

const Header = styled(_Header, {
  '@sm': {
    'nav > ul > li:first-child': {
      display: 'none',
    },
  },

  'header > div': {
    '@sm': {
      width: '100%',
      // width: rem(540),
      paddingLeft: rem(16),
      paddingRight: rem(16),
    },
    '@md': {
      paddingLeft: rem(0),
      paddingRight: rem(0),
      width: rem(720),
    },
    '@lg': {
      width: rem(960),
    },
    '@xl': {
      width: rem(1150),
    },
  },
});

const Layout: React.FC<LayoutProps> = ({ children, data, id }) => {
  if (!data) return <></>;

  globalStyles();

  return (
    <>
      <Header key="header" navigationData={data} sns />

      <main id={id}>{children}</main>

      <Footer key="footer" navigationData={data} />
    </>
  );
};

export default Layout;
