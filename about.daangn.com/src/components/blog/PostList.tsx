import { graphql, useStaticQuery } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

import PostCard from './PostCard';
import EmptyPlaceholder from './postList/EmptyPlaceholder';
import { useSearchIndex } from './postList/useSearchIndex';

type PostListProps = {
  data: GatsbyTypes.PostList_queryFragment;
  location: Location;
};

export const query = graphql`
  fragment PostList_query on Query {
    allPost(
      filter: {category: {uid: {glob: $id, ne: "pr"}}}
      sort: {publishedAt: DESC}
    ) {
      nodes {
        id
        ...PostCard_post
      }
    }
  }
`;

const PostList: React.FC<PostListProps> = ({ data, location }) => {
  const initialSearchParams = new URLSearchParams(location.search);
  const searchQuery = initialSearchParams.get('q') || '';
  const searchResults = useSearchIndex(searchQuery);

  return (
    <>
      {data.allPost.nodes.length === 0 ? (
        <NoPostDescription>등록된 글이 없습니다.</NoPostDescription>
      ) : searchResults?.length === 0 ? (
        <EmptyPlaceholder link="/blog/#_filter" />
      ) : searchResults === undefined ? (
        <Container>
          {data.allPost.nodes.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </Container>
      ) : (
        <Container>
          {data.allPost.nodes
            .filter((node) => searchResults.includes(node.id))
            .map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
        </Container>
      )}
    </>
  );
};

const Container = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  rowGap: rem(48),
  justifyItems: 'center',
  justifyContent: 'center',
  marginTop: rem(44),

  '@media (min-width: 880px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});

const NoPostDescription = styled('div', {
  width: '100%',
  marginTop: rem(64),
  textAlign: 'center',
});

export default PostList;
