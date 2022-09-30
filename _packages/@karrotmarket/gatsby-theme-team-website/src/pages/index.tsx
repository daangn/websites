import * as React from 'react';
import { rem } from 'polished';
import {
  graphql,
  type PageProps,
  type HeadProps,
} from 'gatsby';
import { HeadSeo } from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';
import { required } from '@cometjs/core';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';

import { DefaultLayoutHead } from '../layouts/DefaultLayout';
import _PageTitle from '../components/PageTitle';
import PrismicTeamContentsDataMainBodyKeyVisual from '../components/PrismicTeamContentsDataMainBodyKeyVisual';
import PrismicTeamContentsDataMainBodyMemberQuoteCarousel from '../components/PrismicTeamContentsDataMainBodyMemberQuoteCarousel';
import PrismicTeamContentsDataMainBodyTitleAndDescription from '../components/PrismicTeamContentsDataMainBodyTitleAndDescription';
import PrismicTeamContentsDataMainBodyTitleAndIllustration from '../components/PrismicTeamContentsDataMainBodyTitleAndIllustration';
import PrismicTeamContentsDataMainBodyIllustrationAndDescription from '../components/PrismicTeamContentsDataMainBodyIllustrationAndDescription';
import PrismicTeamContentsDataMainBodyWideBanner from '../components/PrismicTeamContentsDataMainBodyWideBanner';
import PrismicTeamContentsDataMainBodyHowWeWork from '../components/PrismicTeamContentsDataMainBodyHowWeWork';
import PrismicTeamContentsDataMainBodyBenefit from '../components/PrismicTeamContentsDataMainBodyBenefit';

export const query = graphql`
  query TeamWebsite_IndexPage(
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query

    prismicTeamContents(
      lang: { eq: $locale }
    ) {
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

type IndexPageProps = PageProps<GatsbyTypes.TeamWebsite_IndexPageQuery>;
const IndexPage: React.FC<IndexPageProps> = ({
  data,
}) => {
  required(data.prismicTeamContents?.data);

  return (
    <main>
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
    </main>
  );
};

export default IndexPage;

type IndexPageHeadProps = HeadProps<GatsbyTypes.TeamWebsite_IndexPageQuery>;
export const Head: React.FC<IndexPageHeadProps> = ({
  data,
  location,
}) => {
  required(data.prismicTeamContents?.data);

  const metaTitle = data.prismicTeamContents.data.main_page_meta_title;
  const metaDescription = data.prismicTeamContents.data.main_page_meta_description;
  const metaImage = data.prismicTeamContents.data.main_page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <HeadSeo
      location={location}
      title={metaTitle}
      description={metaDescription}
    >
      {props => (
        <DefaultLayoutHead
          {...props}
          location={location}
          data={data}
          image={metaImage && {
            url: new URL(
              metaImage.src,
              metaImage.src.startsWith('http')
                ? metaImage.src
                : props.url,
            ),
            width: metaImage.width,
            height: metaImage.height,
          }}
        />
      )}
    </HeadSeo>
  );
};
