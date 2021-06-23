import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { GatsbySeo, LogoJsonLd, SocialProfileJsonLd } from 'gatsby-plugin-next-seo';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { useLocation } from '@reach/router';
import { defaultRepositoryConfig } from '@karrotmarket/gatsby-theme-prismic/src/defaultRepositoryConfig';
import { useSiteMetadata } from '@karrotmarket/gatsby-theme-website/src/siteMetadata';
import type { OverrideProps } from '@cometjs/core';
import { required } from '@cometjs/core';

import _Header from '@karrotmarket/gatsby-theme-website/src/components/Header';
import _Footer from '@karrotmarket/gatsby-theme-website/src/components/Footer';

import logoUrl from '~/assets/logo.png';

type DefaultLayoutProps = OverrideProps<
  PageProps<GatsbyTypes.DefaultLayout_queryFragment>,
  {
    children: any,
  }
>;

export const query = graphql`
  fragment DefaultLayout_query on Query {
    prismicTeamContents {
      _previewable
      data {
        fb_app_id
        twitter_site_handle
      }
    }
    prismicSiteNavigation(uid: { eq: "team.daangn.com" }) {
      _previewable
      data {
        ...Header_navigationData
        ...Footer_navigationData

        sns_profiles {
          link {
            url
          }
        }
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
  const { siteUrl } = useSiteMetadata();
  const { origin: siteOrigin } = new URL(siteUrl);
  const { pathname: currentPath, origin: currentOrigin } = useLocation();

  required(data.prismicSiteNavigation);
  required(data.prismicTeamContents?.data);

  return (
    <>
      <Helmet>
        <html
          lang="ko"
          prefix="og: https://ogp.me/ns/website#"
        />
      </Helmet>
      <GatsbySeo
        canonical={siteOrigin + currentPath}
        openGraph={{
          type: 'website',
          url: currentOrigin + currentPath,
        }}
        facebook={data.prismicTeamContents.data.fb_app_id != null ? {
          appId: data.prismicTeamContents.data.fb_app_id,
        } : undefined}
        twitter={data.prismicTeamContents.data.twitter_site_handle != null ? {
          cardType: 'summary',
          site: data.prismicTeamContents.data.twitter_site_handle,
        } : undefined}
      />
      <LogoJsonLd
        url="https://www.daangn.com"
        logo={currentOrigin + logoUrl}
      />
      <SocialProfileJsonLd
        type="Organization"
        name="당근마켓 팀"
        url={siteOrigin}
        sameAs={data.prismicSiteNavigation.data.sns_profiles
          .map(profile => profile.link?.url)
          .filter(Boolean) as string[]
        }
      />
      <Header
        navigationData={data.prismicSiteNavigation.data}
      />
      <Main>{children}</Main>
      <Footer
        navigationData={data.prismicSiteNavigation.data}
      />
    </>
  );
}

export default withPrismicPreview(DefaultLayout, [
  defaultRepositoryConfig,
]);
