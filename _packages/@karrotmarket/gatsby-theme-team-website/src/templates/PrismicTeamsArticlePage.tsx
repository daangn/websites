import * as React from 'react';
import { rem } from 'polished';
import {
  graphql,
  type PageProps,
  type HeadProps,
} from 'gatsby';
import { HeadSeo } from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { required, Condition } from '@cometjs/core';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';

import { DefaultLayoutHead } from '../layouts/DefaultLayout';
import _PageTitle from '../components/PageTitle';
import PrismicTeamsArticleDataBodyArticleSection from '../components/PrismicTeamsArticleDataBodyArticleSection';

export const query = graphql`
  query TeamWebsite_TeamsArticlePage(
    $uid: String!
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query

    prismicTeamsArticle(uid: { eq: $uid }) {
      _previewable
      data {
        page_meta_title
        page_meta_description
        page_meta_image {
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
        page_title {
          text
        }
        body {
          __typename
          ...PrismicTeamsArticleDataBodyArticleSection_data
        }
      }
    }
  }
`;

const Container = styled('main', {
  contentArea: true,

  maxWidth: rem(760),
  margin: '0 auto',
});

const PageTitle = styled(_PageTitle, {
  marginBottom: rem(56),

  '@sm': {
    marginBottom: rem(120),
  },
});

const Content = styled('div', {
  display: 'grid',
  gap: rem(64),
});

type TeamsArticlePageProps = PageProps<GatsbyTypes.TeamWebsite_TeamsArticlePageQuery>;
const TeamsArticlePage: React.FC<TeamsArticlePageProps> = ({
  data,
}) => {
  required(data.prismicTeamsArticle?.data?.body);

  return (
    <Container>
      <PageTitle>
        {data.prismicTeamsArticle.data.page_title?.text}
      </PageTitle>
      <Content>
        {data.prismicTeamsArticle.data.body
          .filter(Condition.isTruthy)
          .map((data, i) => mapAbstractTypeWithDefault(data, {
            PrismicTeamsArticleDataBodyArticleSection: data => (
              <PrismicTeamsArticleDataBodyArticleSection
                key={i}
                data={data}
              />
            ),
          _: null,
        }))}
      </Content>
    </Container>
  );
};

export default withPrismicPreview(TeamsArticlePage);

type TeamsArticlePageHeadProps = HeadProps<GatsbyTypes.TeamWebsite_TeamsArticlePageQuery>;
export const Head: React.FC<TeamsArticlePageHeadProps> = ({
  data,
  location,
}) => {
  required(data.prismicTeamsArticle?.data);

  const metaTitle = data.prismicTeamsArticle.data.page_meta_title;
  const metaDescription = data.prismicTeamsArticle.data.page_meta_description;
  const metaImage = data.prismicTeamsArticle.data.page_meta_image?.localFile?.childImageSharp?.fixed;

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
}
