import { type OverrideProps, required } from '@cometjs/core';
import { useTranslation } from '@karrotmarket/gatsby-theme-website-team/src/translation';
import _Footer from '@karrotmarket/gatsby-theme-website/src/components/Footer';
import _Header from '@karrotmarket/gatsby-theme-website/src/components/Header';
import { type PageProps, graphql } from 'gatsby';
import { Facebook, HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import { SocialProfileJsonLd } from 'gatsby-plugin-head-seo/src/jsonld';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

import logoPath from '../assets/logo.png';

export const query = graphql`
  fragment TeamWebsite_DefaultLayout_query on Query {
    site {
      siteMetadata {
        locale
      }
    }
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

const Footer = styled(_Footer, {
  marginTop: rem(120),

  '@sm': {
    marginTop: rem(160),
  },
});

type DefaultLayoutProps = OverrideProps<
  PageProps<GatsbyTypes.TeamWebsite_DefaultLayout_queryFragment>,
  {
    children: React.ReactNode;
  }
>;
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ data, children }) => {
  required(data.prismicSiteNavigation?.data);

  return (
    <>
      <_Header navigationData={data.prismicSiteNavigation.data} />
      <div id="layout">{children}</div>
      <Footer navigationData={data.prismicSiteNavigation.data} />
    </>
  );
};
export default DefaultLayout;

type DefaultLayoutHeadProps = {
  location: {
    pathname: string;
  };
  data: GatsbyTypes.TeamWebsite_DefaultLayout_queryFragment;
  title?: string;
  description?: string;
  image?: {
    url: URL;
    width: number;
    height: number;
  };
};
export const DefaultLayoutHead: React.FC<DefaultLayoutHeadProps> = ({
  location,
  data,
  title,
  description,
  image,
}) => {
  required(data.prismicTeamContents?.data);

  const messages = useTranslation();

  const facebookAppId = data.prismicTeamContents.data.facebook_app_id;
  const twitterSiteHandle = data.prismicTeamContents.data.twitter_site_handle;

  return (
    <HeadSeo location={location} title={title} description={description}>
      {(props) => [
        <OpenGraph
          key="og"
          og={{
            ...props,
            type: 'website',
            ...(image && {
              images: [image],
            }),
          }}
        />,
        <TwitterCard
          key="twittercard"
          card={{
            ...props,
            type: image ? 'summary_large_image' : 'summary',
            site: twitterSiteHandle,
          }}
        />,
        facebookAppId && <Facebook key="facebook" appId={facebookAppId} />,
        <SocialProfileJsonLd
          key="org-jsonld"
          type="Organization"
          name={messages.form_field__organization_name}
          url={new URL(props.url.origin)}
          logo={logoPath.startsWith('http') ? new URL(logoPath) : new URL(logoPath, props.url)}
          sameAs={
            data.prismicSiteNavigation.data.sns_profiles
              .map((profile) => new URL(profile.link?.url))
              .filter(Boolean) as URL[]
          }
        />,
      ]}
    </HeadSeo>
  );
};
