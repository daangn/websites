import * as React from 'react';
import { rem } from 'polished';
import { graphql, type PageProps, type HeadProps } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { HeadSeo } from 'gatsby-plugin-head-seo/src';
import { required } from '@cometjs/core';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';

import { DefaultLayoutHead } from '../layouts/DefaultLayout';
import _PageTitle from '../components/PageTitle';
import Divider from '../components/Divider';
import PrismicTeamContentsDataCultureBodyKeyVisual from '../components/PrismicTeamContentsDataCultureBodyKeyVisual';
import PrismicTeamContentsDataCultureBodyHowWeWork from '../components/PrismicTeamContentsDataCultureBodyHowWeWork';
import PrismicTeamContentsDataCultureBodyBenefit from '../components/PrismicTeamContentsDataCultureBodyBenefit';
import PrismicTeamContentsDataCultureBodyTitleAndDescription from '../components/PrismicTeamContentsDataCultureBodyTitleAndDescription';
import PrismicTeamContentsDataCultureBodyTitleAndIllustration from '../components/PrismicTeamContentsDataCultureBodyTitleAndIllustration';
import PrismicTeamContentsDataCultureBodyIllustrationAndDescription from '../components/PrismicTeamContentsDataCultureBodyIllustrationAndDescription';
import PrismicTeamContentsDataCultureBodyWideBanner from '../components/PrismicTeamContentsDataCultureBodyWideBanner';

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

type CulturePageProps = PageProps<GatsbyTypes.TeamWebsite_CulturePageQuery>;
const CulturePage: React.FC<CulturePageProps> = ({ data }) => {
  required(data.prismicTeamContents?.data?.culture_body);

  return (
    <main>
      <TitleContainer>
        <PageTitle>{data.prismicTeamContents.data.culture_page_title?.text}</PageTitle>
      </TitleContainer>
      <Content>
        {data.prismicTeamContents.data.culture_body.map((data, i) =>
          // rome-ignore lint/style/noNonNullAssertion: intentional
          mapAbstractTypeWithDefault(data!, {
            PrismicTeamContentsDataCultureBodyKeyVisual: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataCultureBodyKeyVisual key={i} data={data} />
            ),
            PrismicTeamContentsDataCultureBodyHowWeWork: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataCultureBodyHowWeWork key={i} data={data} />
            ),
            PrismicTeamContentsDataCultureBodyBenefit: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataCultureBodyBenefit key={i} data={data} />
            ),
            PrismicTeamContentsDataCultureBodyIllustrationAndDescription: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataCultureBodyIllustrationAndDescription key={i} data={data} />
            ),
            PrismicTeamContentsDataCultureBodyTitleAndDescription: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataCultureBodyTitleAndDescription key={i} data={data} />
            ),
            PrismicTeamContentsDataCultureBodyTitleAndIllustration: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataCultureBodyTitleAndIllustration key={i} data={data} />
            ),
            PrismicTeamContentsDataCultureBodyWideBanner: (data) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataCultureBodyWideBanner key={i} data={data} />
            ),
            PrismicTeamContentsDataCultureBodyDivider: (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <Divider key={i} />
            ),
            _: null,
          }),
        )}
      </Content>
    </main>
  );
};

export default CulturePage;

type CulturePageHeadProps = HeadProps<GatsbyTypes.TeamWebsite_CulturePageQuery>;
export const Head: React.FC<CulturePageHeadProps> = ({ data, location }) => {
  required(data.prismicTeamContents?.data);

  const metaTitle = data.prismicTeamContents.data.culture_page_meta_title;
  const metaDescription = data.prismicTeamContents.data.culture_page_meta_description;
  const metaImage =
    data.prismicTeamContents.data.culture_page_meta_image?.localFile?.childImageSharp?.fixed;

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
