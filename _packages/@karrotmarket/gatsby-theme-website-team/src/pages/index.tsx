import * as React from 'react';
import { rem } from 'polished';
import { graphql, type PageProps, type HeadProps } from 'gatsby';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { HeadSeo } from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';
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

type IndexPageProps = PageProps<GatsbyTypes.TeamWebsite_IndexPageQuery>;
const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <main>
      <TitleContainer>
        <PageTitle>{data.prismicTeamContents.data.main_page_title?.text}</PageTitle>
      </TitleContainer>
      <Content>
        {data.prismicTeamContents.data.main_body?.filter(Boolean)?.map((data, i) =>
          // rome-ignore lint/style/noNonNullAssertion: intentional
          mapAbstractTypeWithDefault(data!, {
            PrismicTeamContentsDataMainBodyKeyVisual: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyKeyVisual key={i} data={data} />
            ),
            PrismicTeamContentsDataMainBodyMemberQuoteCarousel: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyMemberQuoteCarousel key={i} data={data} />
            ),
            PrismicTeamContentsDataMainBodyTitleAndDescription: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyTitleAndDescription key={i} data={data} />
            ),
            PrismicTeamContentsDataMainBodyTitleAndIllustration: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyTitleAndIllustration key={i} data={data} />
            ),
            PrismicTeamContentsDataMainBodyIllustrationAndDescription: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyIllustrationAndDescription key={i} data={data} />
            ),
            PrismicTeamContentsDataMainBodyWideBanner: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyWideBanner key={i} data={data} />
            ),
            PrismicTeamContentsDataMainBodyHowWeWork: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyHowWeWork key={i} data={data} />
            ),
            PrismicTeamContentsDataMainBodyBenefit: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyBenefit key={i} data={data} />
            ),
            _: null,
          }),
        )}
      </Content>
    </main>
  );
};

export default withPrismicPreview(IndexPage);

type IndexPageHeadProps = HeadProps<GatsbyTypes.TeamWebsite_IndexPageQuery>;
export const Head: React.FC<IndexPageHeadProps> = ({ data, location }) => {
  const metaTitle = data.prismicTeamContents.data.main_page_meta_title;
  const metaDescription = data.prismicTeamContents.data.main_page_meta_description;
  const metaImage =
    data.prismicTeamContents.data.main_page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <HeadSeo location={location} title={metaTitle} description={metaDescription}>
      {(props) => (
        <DefaultLayoutHead
          {...props}
          location={location}
          data={data}
          image={
            metaImage && {
              url: new URL(
                metaImage.src,
                metaImage.src.startsWith('http') ? metaImage.src : props.url,
              ),
              width: metaImage.width,
              height: metaImage.height,
            }
          }
        />
      )}
    </HeadSeo>
  );
};
