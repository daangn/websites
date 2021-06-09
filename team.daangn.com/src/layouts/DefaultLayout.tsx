import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { defaultRepositoryConfig } from '@karrotmarket/gatsby-theme-prismic/src/defaultRepositoryConfig';
import type { OverrideProps } from '@cometjs/core';
import { required } from '@cometjs/core';

import _Header from '@karrotmarket/gatsby-theme-website/src/components/Header';
import _Footer from '@karrotmarket/gatsby-theme-website/src/components/Footer';

type DefaultLayoutProps = OverrideProps<
  PageProps<GatsbyTypes.DefaultLayout_queryFragment>,
  {
    children: any,
  }
>;

export const query = graphql`
  fragment DefaultLayout_query on Query {
    prismicSiteNavigation(uid: { eq: "team.daangn.com" }) {
      _previewable
      data {
        ...Header_navigationData
        ...Footer_navigationData
      }
    }
  }
`;

const Header = styled(_Header, {
  marginBottom: rem(36),

  '@sm': {
    marginBottom: rem(100),
  },
});

const Footer = styled(_Footer, {
  marginTop: rem(120),

  '@sm': {
    marginTop: rem(160),
  },
});

const Main = styled('main', {
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
      />
      <Main key="main">
        {children}
      </Main>
      <Footer
        key="footer"
        navigationData={data.prismicSiteNavigation.data}
      />
    </>
  );
}

export default withPrismicPreview(DefaultLayout, [
  defaultRepositoryConfig,
]);
