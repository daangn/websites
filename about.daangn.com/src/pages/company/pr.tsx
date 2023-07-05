import * as React from 'react';
import { graphql, type PageProps, type HeadProps } from 'gatsby';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

import PrCard from '../../components/pr/PrCard';

type PrPageProps = PageProps<GatsbyTypes.PrPageQuery>;

export const query = graphql`
  query PrPage($locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query

    prismicTeamContents(
      lang: { eq: $locale }
    ) {
      data {
        main_page_meta_image {
          localFile {
            childImageSharp {
              fixed(width: 1200, height: 630, toFormat: PNG, quality: 90) {
                src
                width
                height
              }
            }
          }
        }
      }
    }

    allPost(
      filter: {category: {name: {eq: "pr"}}}
      sort: {publishedAt: DESC}
    ) {
      nodes {
        ...PrCard_post
      }
    }
  }
`;

const PrPage: React.FC<PrPageProps> = ({ data }) => {
  return (
    <Main>
      <Title>당근마켓 보도자료</Title>
      {data.allPost.nodes.length === 0 ? (
        <NoPostDescription>등록된 글이 없습니다.</NoPostDescription>
      ) : (
        <section>
          {data.allPost.nodes.map((node) => (
            <PrCard key={node.slug} data={node} />
          ))}
        </section>
      )}
    </Main>
  );
};

const Main = styled('main', {
  contentArea: true,
  contentSpaceTop: true,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Title = styled('h1', {
  marginBottom: rem(80),
});

const NoPostDescription = styled('div', {
  width: '100%',
  marginTop: rem(64),
  textAlign: 'center',
});

export default PrPage;

type PrPageHeadProps = HeadProps<GatsbyTypes.PrPageQuery>;

export const Head: React.FC<PrPageHeadProps> = ({ data, location }) => {
  const metaTitle = '당근마켓 보도자료';
  const metaDescription = '당근마켓에서 제공하는 공식 보도자료입니다.';
  /**
   * (임시)어바웃당근 메인페이지와 동일한 og 이미지 사용
   */
  const metaImage =
    data.prismicTeamContents?.data.main_page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <HeadSeo location={location} title={metaTitle} description={metaDescription}>
      {(props) => [
        <OpenGraph
          key='og'
          og={{
            ...props,
            type: 'website',
            ...(metaImage && {
              images: [
                {
                  url: new URL(
                    metaImage.src,
                    metaImage.src.startsWith('http') ? metaImage.src : props.url,
                  ),
                  width: metaImage.width,
                  height: metaImage.height,
                },
              ],
            }),
          }}
        />,
        <TwitterCard
          key='twitter'
          card={{
            ...props,
            type: 'summary_large_image',
          }}
        />,
      ]}
    </HeadSeo>
  );
};
