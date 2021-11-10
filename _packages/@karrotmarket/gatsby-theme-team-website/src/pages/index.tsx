import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { defaultRepositoryConfig } from '@karrotmarket/gatsby-theme-prismic/src/defaultRepositoryConfig';
import { useSiteOrigin } from '@karrotmarket/gatsby-theme-website/src/siteMetadata';
import { required } from '@cometjs/core';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';

import _PageTitle from '../components/PageTitle';
import PrismicTeamContentsDataMainBodyKeyVisual from '../components/PrismicTeamContentsDataMainBodyKeyVisual';
import PrismicTeamContentsDataMainBodyMemberQuoteCarousel from '../components/PrismicTeamContentsDataMainBodyMemberQuoteCarousel';
import PrismicTeamContentsDataMainBodyTitleAndDescription from '../components/PrismicTeamContentsDataMainBodyTitleAndDescription';
import PrismicTeamContentsDataMainBodyTitleAndIllustration from '../components/PrismicTeamContentsDataMainBodyTitleAndIllustration';
import PrismicTeamContentsDataMainBodyIllustrationAndDescription from '../components/PrismicTeamContentsDataMainBodyIllustrationAndDescription';
import PrismicTeamContentsDataMainBodyWideBanner from '../components/PrismicTeamContentsDataMainBodyWideBanner';
import PrismicTeamContentsDataMainBodyHowWeWork from '../components/PrismicTeamContentsDataMainBodyHowWeWork';
import PrismicTeamContentsDataMainBodyBenefit from '../components/PrismicTeamContentsDataMainBodyBenefit';

type IndexPageProps = PageProps<GatsbyTypes.TeamWebsite_IndexPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query TeamWebsite_IndexPage(
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query
    prismicTeamContents(
      lang: { eq: $locale }
    ) {
      _previewable
      data {
        main_page_meta_title
        main_page_meta_description
        main_page_meta_image {
          localFile {
            childImageSharp {
              fixed(
                width: 1200
                height: 630
                toFormat: PNG
                quality: 90
              ) {
                src
                width
                height
              }
            }
          }
        }
        main_page_title {
          text
        }
        main_body {
          __typename
          ...PrismicTeamContentsDataMainBodyKeyVisual_data
          ...PrismicTeamContentsDataMainBodyMemberQuoteCarousel_data
          ...PrismicTeamContentsDataMainBodyTitleAndDescription_data
          ...PrismicTeamContentsDataMainBodyTitleAndIllustration_data
          ...PrismicTeamContentsDataMainBodyIllustrationAndDescription_data
          ...PrismicTeamContentsDataMainBodyWideBanner_data
          ...PrismicTeamContentsDataMainBodyHowWeWork_data
          ...PrismicTeamContentsDataMainBodyBenefit_data
        }
      }
    }
  }
`;

const TitleContainer = styled('div', {
  contentArea: true,
});

const PageTitle = styled(_PageTitle, {
  marginBottom: rem(32),

  '@md': {
    marginBottom: rem(88),
  },
});

const Content = styled('div', {
  display: 'grid',
  gap: rem(80),

  '@md': {
    gap: rem(160),
  },
});

const IndexPage: React.FC<IndexPageProps> = ({
  data,
}) => {
  const siteOrigin = useSiteOrigin();

  required(data.prismicTeamContents?.data);

  const metaTitle = data.prismicTeamContents.data.main_page_meta_title;
  const metaDescription = data.prismicTeamContents.data.main_page_meta_description;
  const metaImage = data.prismicTeamContents.data.main_page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <>
      <GatsbySeo
        title={metaTitle}
        description={metaDescription}
        openGraph={{
          title: metaTitle,
          description: metaDescription,
          ...metaImage && {
            images: [{
              url: siteOrigin + metaImage.src,
              width: metaImage.width,
              height: metaImage.height,
            }],
          },
        }}
        twitter={{
          ...metaImage && {
            cardType: 'summary_large_image',
          },
        }}
      />
      <TitleContainer>
        <PageTitle>
          {data.prismicTeamContents.data.main_page_title?.text}
        </PageTitle>
      </TitleContainer>
      <Content>
        {data.prismicTeamContents.data.main_body
          ?.filter(Boolean)
          ?.map((data, i) => mapAbstractTypeWithDefault(data!, {
            PrismicTeamContentsDataMainBodyKeyVisual: data => (
              <PrismicTeamContentsDataMainBodyKeyVisual
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataMainBodyMemberQuoteCarousel: data => (
              <PrismicTeamContentsDataMainBodyMemberQuoteCarousel
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataMainBodyTitleAndDescription: data => (
              <PrismicTeamContentsDataMainBodyTitleAndDescription
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataMainBodyTitleAndIllustration: data => (
              <PrismicTeamContentsDataMainBodyTitleAndIllustration
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataMainBodyIllustrationAndDescription: data => (
              <PrismicTeamContentsDataMainBodyIllustrationAndDescription
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataMainBodyWideBanner: data => (
              <PrismicTeamContentsDataMainBodyWideBanner
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataMainBodyHowWeWork: data => (
              <PrismicTeamContentsDataMainBodyHowWeWork
                key={i}
                data={data}
              />
            ),
             PrismicTeamContentsDataMainBodyBenefit: data => (
              <PrismicTeamContentsDataMainBodyBenefit
                key={i}
                data={data}
              />
            ),
            _: null,
          }))
        }
      </Content>
    </>
  );
};

export default withPrismicPreview(IndexPage, [
  defaultRepositoryConfig,
]);
