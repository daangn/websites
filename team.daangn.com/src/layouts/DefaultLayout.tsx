import * as React from 'react';
import type { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet-async';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';
import type { OverrideProps } from '@cometjs/core';
import { required } from '@cometjs/core';

import _Header from '~/components/Header';
import _Footer from '~/components/Footer';

type DefaultLayoutProps = OverrideProps<
  PageProps<GatsbyTypes.DefaultLayout_queryFragment>,
  {
    children: React.ReactNode,
  }
>;

export const query = graphql`
  fragment DefaultLayout_query on Query {
    prismicSiteNavigation(uid: { eq: "team.daangn.com" }) {
      data {
        ...Header_navigationData
        ...Footer_navigationData
      }
    }
  }
`;

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

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  data,
  children,
}) => {
  required(data.prismicSiteNavigation);

  return (
    <>
      <Helmet key="helmet">
        <html lang="ko" />
      </Helmet>
      <Header
        key="header"
        navigationData={data.prismicSiteNavigation.data}
        wide={{ '@sm': true }}
      />
      <Main
        key="main"
        wide={{ '@sm': true }}
      >
        {children}
      </Main>
      <Footer
        key="footer"
        navigationData={data.prismicSiteNavigation.data}
        wide={{ '@sm': true }}
      />
    </>
  );
}

export default DefaultLayout;
