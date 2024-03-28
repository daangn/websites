import { required } from '@cometjs/core';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';
import { type HeadProps, type PageProps, graphql } from 'gatsby';
import { HeadSeo } from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

import _PageTitle from '../components/PageTitle';
import PrismicTeamContentsDataLifeBodyLifeContent from '../components/PrismicTeamContentsDataLifeBodyLifeContent';
import { DefaultLayoutHead } from '../layouts/DefaultLayout';
import { isCanonicalUrl } from '../utils/common';

export const query = graphql`
  query TeamWebsite_LifePage(
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query

    prismicTeamContents(
      lang: { eq: $locale }
    ) {
      data {
        life_page_meta_title
        life_page_meta_description
        life_page_meta_image {
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
        life_page_title {
          text
        }
        life_body {
          __typename
          ...PrismicTeamContentsDataLifeBodyLifeContent_data
        }
      }
    }
  }
`;

const Container = styled('main', {
  contentArea: true,
  maxWidth: rem(760),
  margin: '0 auto',
  contentSpaceTop: true,
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

type LifePageProps = PageProps<GatsbyTypes.TeamWebsite_LifePageQuery>;
const LifePage: React.FC<LifePageProps> = ({ data }) => {
  required(data.prismicTeamContents?.data?.life_body);

  return (
    <Container>
      <PageTitle>{data.prismicTeamContents.data.life_page_title?.text}</PageTitle>
      <Content>
        {data.prismicTeamContents.data.life_body.map((data, i) =>
          // biome-ignore lint/style/noNonNullAssertion: intentional
          mapAbstractTypeWithDefault(data!, {
            PrismicTeamContentsDataLifeBodyLifeContent: (data) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataLifeBodyLifeContent key={i} data={data} />
            ),
            _: null,
          }),
        )}
      </Content>
    </Container>
  );
};

export default LifePage;

type LifePageHeadProps = HeadProps<GatsbyTypes.TeamWebsite_LifePageQuery>;
export const Head: React.FC<LifePageHeadProps> = ({ data, location }) => {
  required(data.prismicTeamContents?.data);

  const metaTitle = data.prismicTeamContents.data.life_page_meta_title;
  const metaDescription = data.prismicTeamContents.data.life_page_meta_description;
  const metaImage =
    data.prismicTeamContents.data.life_page_meta_image?.localFile?.childImageSharp?.fixed;
  const canonicalUrl = 'https://about.daangn.com'.concat(location.pathname);

  return (
    <HeadSeo location={location} title={metaTitle} description={metaDescription}>
      {(props) => (
        <>
          {!isCanonicalUrl(String(props.url)) && (
            <meta http-equiv="refresh" content={`0; url=${canonicalUrl}`} />
          )}
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
          <link rel="canonical" href={canonicalUrl} />
        </>
      )}
    </HeadSeo>
  );
};
