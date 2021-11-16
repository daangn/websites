import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { useSiteOrigin } from '@karrotmarket/gatsby-theme-website/src/siteMetadata';
import { required } from '@cometjs/core';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';

import _PageTitle from '../components/PageTitle';
import Divider from '../components/Divider';
import PrismicTeamContentsDataCultureBodyKeyVisual from '../components/PrismicTeamContentsDataCultureBodyKeyVisual';
import PrismicTeamContentsDataCultureBodyHowWeWork from '../components/PrismicTeamContentsDataCultureBodyHowWeWork';
import PrismicTeamContentsDataCultureBodyBenefit from '../components/PrismicTeamContentsDataCultureBodyBenefit';
import PrismicTeamContentsDataCultureBodyTitleAndDescription from '../components/PrismicTeamContentsDataCultureBodyTitleAndDescription';
import PrismicTeamContentsDataCultureBodyTitleAndIllustration from '../components/PrismicTeamContentsDataCultureBodyTitleAndIllustration';
import PrismicTeamContentsDataCultureBodyIllustrationAndDescription from '../components/PrismicTeamContentsDataCultureBodyIllustrationAndDescription';
import PrismicTeamContentsDataCultureBodyWideBanner from '../components/PrismicTeamContentsDataCultureBodyWideBanner';

type CulturePageProps = PageProps<GatsbyTypes.TeamWebsite_CulturePageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query TeamWebsite_CulturePage(
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query
    prismicTeamContents(
      lang: { eq: $locale }
    ) {
      _previewable
      data {
        culture_page_meta_title
        culture_page_meta_description
        culture_page_meta_image {
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
        culture_page_title {
          text
        }
        culture_body {
          __typename
          ...PrismicTeamContentsDataCultureBodyKeyVisual_data
          ...PrismicTeamContentsDataCultureBodyWideBanner_data
          ...PrismicTeamContentsDataCultureBodyHowWeWork_data
          ...PrismicTeamContentsDataCultureBodyBenefit_data
          ...PrismicTeamContentsDataCultureBodyIllustrationAndDescription_data
          ...PrismicTeamContentsDataCultureBodyTitleAndDescription_data
          ...PrismicTeamContentsDataCultureBodyTitleAndIllustration_data
        }
      }
    }
  }
`;

const TitleContainer = styled('div', {
  contentArea: true,
});

const PageTitle = styled(_PageTitle, {
  marginBottom: rem(40),

  '@md': {
    marginBottom: rem(80),
  },
});

const Content = styled('div', {
  display: 'grid',
  gap: rem(80),

  '@md': {
    gap: rem(160),
  },
});

const CulturePage: React.FC<CulturePageProps> = ({
  data,
}) => {
  const siteOrigin = useSiteOrigin();

  required(data.prismicTeamContents?.data?.culture_body);

  const metaTitle = data.prismicTeamContents.data.culture_page_meta_title;
  const metaDescription = data.prismicTeamContents.data.culture_page_meta_description;
  const metaImage = data.prismicTeamContents.data.culture_page_meta_image?.localFile?.childImageSharp?.fixed;

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
          {data.prismicTeamContents.data.culture_page_title?.text}
        </PageTitle>
      </TitleContainer>
      <Content>
        {data.prismicTeamContents.data.culture_body
          .map((data, i) => mapAbstractTypeWithDefault(data!, {
            PrismicTeamContentsDataCultureBodyKeyVisual: data => (
              <PrismicTeamContentsDataCultureBodyKeyVisual
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataCultureBodyHowWeWork: data => (
              <PrismicTeamContentsDataCultureBodyHowWeWork
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataCultureBodyBenefit: data => (
              <PrismicTeamContentsDataCultureBodyBenefit
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataCultureBodyIllustrationAndDescription: data => (
              <PrismicTeamContentsDataCultureBodyIllustrationAndDescription
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataCultureBodyTitleAndDescription: data => (
              <PrismicTeamContentsDataCultureBodyTitleAndDescription
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataCultureBodyTitleAndIllustration: data => (
              <PrismicTeamContentsDataCultureBodyTitleAndIllustration
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataCultureBodyWideBanner: data => (
              <PrismicTeamContentsDataCultureBodyWideBanner
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataCultureBodyDivider: (
              <Divider key={i} />
            ),
            _: null,
          }))}
      </Content>
    </>
  );
};

export default CulturePage;
