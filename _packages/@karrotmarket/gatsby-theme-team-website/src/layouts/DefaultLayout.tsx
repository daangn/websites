import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbySeo, SocialProfileJsonLd } from 'gatsby-plugin-next-seo';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { useSiteOrigin } from '@karrotmarket/gatsby-theme-website/src/siteMetadata';
import type { OverrideProps } from '@cometjs/core';
import { required } from '@cometjs/core';
import { useLocation } from '@reach/router';
import _Header from '@karrotmarket/gatsby-theme-website/src/components/Header';
import _Footer from '@karrotmarket/gatsby-theme-website/src/components/Footer';
import { useTranslation } from '@karrotmarket/gatsby-plugin-lokalise-translation/src/translation';

type DefaultLayoutProps = OverrideProps<
  PageProps<GatsbyTypes.TeamWebsite_DefaultLayout_queryFragment>,
  {
    children: any,
  }
>;

export const query = graphql`
  fragment TeamWebsite_DefaultLayout_query on Query {
    prismicTeamContents(
      lang: { eq: $locale }
    ) {
      _previewable
      data {
        fb_app_id
        twitter_site_handle
      }
    }
    prismicSiteNavigation(
      lang: { eq: $locale }
      uid: { eq: $navigationId }
    ) {
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

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  data,
  children,
}) => {
  const messages = useTranslation();

  const siteOrigin = useSiteOrigin();
  const { pathname: currentPath } = useLocation();

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
          url: siteOrigin + currentPath,
        }}
        facebook={data.prismicTeamContents.data.fb_app_id != null ? {
          appId: data.prismicTeamContents.data.fb_app_id,
        } : undefined}
        twitter={data.prismicTeamContents.data.twitter_site_handle != null ? {
          cardType: 'summary',
          site: data.prismicTeamContents.data.twitter_site_handle,
        } : undefined}
      />
      <SocialProfileJsonLd
        type="Organization"
        name={messages.form_field__organization_name}
        url={siteOrigin}
        sameAs={data.prismicSiteNavigation.data.sns_profiles
          .map(profile => profile.link?.url)
          .filter(Boolean) as string[]
        }
      />
      <Header
        navigationData={data.prismicSiteNavigation.data}
      />
      <div id="layout">{children}</div>
      <Footer
        navigationData={data.prismicSiteNavigation.data}
      />
    </>
  );
}

export default withPrismicPreview(DefaultLayout);
