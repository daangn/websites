import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { styled } from 'gatsby-theme-stitches/src/config';
import { required, Condition } from '@cometjs/core';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';
import { useSiteOrigin } from '@karrotmarket/gatsby-theme-website/src/siteMetadata';

import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';

import _PageTitle from '../components/PageTitle';
import PrismicTeamsArticleDataBodyArticleSection from '../components/PrismicTeamsArticleDataBodyArticleSection';

type TeamsArticlePageProps = PageProps<GatsbyTypes.TeamWebsite_TeamsArticlePageQuery, GatsbyTypes.SitePageContext>;

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

const Container = styled('div', {
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



const TeamsArticlePage: React.FC<TeamsArticlePageProps> = ({
  data,
}) => {
  const siteOrigin = useSiteOrigin();

  required(data.prismicTeamsArticle?.data?.body);

  const metaTitle = data.prismicTeamsArticle.data.page_meta_title;
  const metaDescription = data.prismicTeamsArticle.data.page_meta_description;
  const metaImage = data.prismicTeamsArticle.data.page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <Container>
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
