import * as React from 'react';
import { rem } from 'polished';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';
import { graphql, type PageProps, type HeadProps } from 'gatsby';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import { globalStyles, styled } from 'gatsby-theme-stitches/src/config';
import Header from '@karrotmarket/gatsby-theme-website/src/components/Header';
import Footer from '@karrotmarket/gatsby-theme-website/src/components/Footer';
import { vars } from '@seed-design/design-token';

import DownloadBtnMobile from '~/components/DownloadBtnMobile';
import HeroSection from '~/components/HeroSection';
import PrismicAdsContentDataBodyUsageSliderSection from '~/components/PrismicAdsContentDataBodyUsageSliderSection';
import PrismicAdsContentDataBodyPreviewSection from '~/components/PrismicAdsContentDataBodyPreviewSection';
import PrismicAdsContentDataBodyDownloadSection from '~/components/PrismicAdsContentDataBodyDownloadSection';
import PrismicAdsContentDataBodyFeaturesSection from '~/components/PrismicAdsContentDataBodyFeaturesSection';
import PrismicAdsContentDataBodyStepsSection from '~/components/PrismicAdsContentDataBodyStepsSection';
import PrismicAdsContentDataBodyUserStorySection from '~/components/PrismicAdsContentDataBodyUserStorySection';
import PrismicAdsContentDataBodyGuideSection from '~/components/PrismicAdsContentDataBodyGuideSection';

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }

    prismicSiteNavigation(uid: { eq: "ads-local.daangn.com" }) {
      data {
        ...Header_navigationData
        ...Footer_navigationData
      }
    }

    prismicAdsContent {
      data {
        meta_title
        meta_description
        meta_image {
          localFile {
            publicURL
          }
          dimensions {
            width
            height
          }
        }

        ...DownloadBtnMobile_data
        ...HeroSection_data

        body {
          __typename
          ...PrismicAdsContentDataBodyUsageSliderSection_data
          ...PrismicAdsContentDataBodyPreviewSection_data
          ...PrismicAdsContentDataBodyDownloadSection_data
          ...PrismicAdsContentDataBodyFeaturesSection_data
          ...PrismicAdsContentDataBodyStepsSection_data
          ...PrismicAdsContentDataBodyUserStorySection_data
          ...PrismicAdsContentDataBodyGuideSection_data
        }

        disclaimer {
          html
        }
      }
    }
  }
`;

export default function IndexPage({ data }: PageProps<GatsbyTypes.IndexPageQuery>) {
  globalStyles();

  // rome-ignore lint/style/noNonNullAssertion: intentional
  const prismicAdsContent = data.prismicAdsContent!;
  // rome-ignore lint/style/noNonNullAssertion: intentional
  const prismicSiteNavigation = data.prismicSiteNavigation!;

  return (
    <div>
      <DownloadBtnMobile data={prismicAdsContent.data} />

      <Header isStatic navigationData={prismicSiteNavigation.data} />

      <main>
        <HeroSection data={prismicAdsContent.data} />

        {prismicAdsContent.data.body.map((data, i) =>
          mapAbstractTypeWithDefault(data, {
            PrismicAdsContentDataBodyUsageSliderSection: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicAdsContentDataBodyUsageSliderSection key={i} data={data} />
            ),
            PrismicAdsContentDataBodyPreviewSection: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicAdsContentDataBodyPreviewSection key={i} data={data} />
            ),
            PrismicAdsContentDataBodyDownloadSection: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicAdsContentDataBodyDownloadSection key={i} data={data} />
            ),
            PrismicAdsContentDataBodyFeaturesSection: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicAdsContentDataBodyFeaturesSection key={i} data={data} />
            ),
            PrismicAdsContentDataBodyStepsSection: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicAdsContentDataBodyStepsSection key={i} data={data} />
            ),
            PrismicAdsContentDataBodyUserStorySection: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicAdsContentDataBodyUserStorySection key={i} data={data} />
            ),
            PrismicAdsContentDataBodyGuideSection: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicAdsContentDataBodyGuideSection key={i} data={data} />
            ),
            _: null,
          }),
        )}
      </main>

      <Footer navigationData={prismicSiteNavigation.data} />

      <Disclaimer>
        <DisclaimerContent
          dangerouslySetInnerHTML={{
            __html: prismicAdsContent.data.disclaimer?.html || '',
          }}
        />
      </Disclaimer>
    </div>
  );
}

export function Head({ data, location }: HeadProps<GatsbyTypes.IndexPageQuery>) {
  // rome-ignore lint/style/noNonNullAssertion: intentional
  const siteMetadata = data.site?.siteMetadata!;
  // rome-ignore lint/style/noNonNullAssertion: intentional
  const prismicAdsContent = data.prismicAdsContent!;

  // rome-ignore lint/style/noNonNullAssertion: intentional
  const siteUrl = new URL(siteMetadata.siteUrl!);
  const image = prismicAdsContent.data.meta_image;

  return (
    <HeadSeo location={location}>
      {(props) => [
        <OpenGraph
          og={{
            ...props,
            type: 'website',
            // rome-ignore lint/style/noNonNullAssertion: intentional
            title: prismicAdsContent.data.meta_title || siteMetadata.title!,
            // rome-ignore lint/style/noNonNullAssertion: intentional
            description: prismicAdsContent.data.meta_description || siteMetadata.description!,
            ...(image && {
              images: [
                {
                  // rome-ignore lint/style/noNonNullAssertion: intentional
                  url: new URL(image.localFile!.publicURL!, siteUrl),
                  // rome-ignore lint/style/noNonNullAssertion: intentional
                  width: image.dimensions!.width,
                  // rome-ignore lint/style/noNonNullAssertion: intentional
                  height: image.dimensions!.height,
                },
              ],
            }),
          }}
        />,
        <TwitterCard
          card={{
            ...props,
            type: image ? 'summary_large_image' : 'summary',
          }}
        />,
      ]}
    </HeadSeo>
  );
}

const Disclaimer = styled('div', {
  display: 'flex',

  justifyContent: 'center',
  height: rem(190),
});

const DisclaimerContent = styled('div', {
  boxSizing: 'border-box',
  borderTop: `1px solid ${vars.$semantic.color.divider3}`,
  paddingTop: rem(24),
  paddingX: rem(24),
  margin: '0 auto',
  maxWidth: 'var(--sizes-maxContent)',
  width: '100%',

  '& p': {
    fontSize: rem(12),
    lineHeight: rem(18),
    color: vars.$scale.color.gray600,
  },

  '& a': {
    textDecoration: 'underline',
    color: vars.$scale.color.gray600,
  },
});
