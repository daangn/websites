import * as React from 'react';
import { graphql, type PageProps } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import PrCard from '../../components/pr/PrCard';
import { rem } from 'polished';

type PrPageProps = PageProps<GatsbyTypes.PrPageQuery>;

export const query = graphql`
  query PrPage($locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query

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

export const Head: React.FC = () => {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
    </>
  );
};
