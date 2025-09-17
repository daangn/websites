import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

import PostCard from './PostCard';
import EmptyPlaceholder from './postList/EmptyPlaceholder';

type PostListProps = {
  data: GatsbyTypes.PostList_queryFragment;
  searchResults?: string[];
  onResetFilter?: () => void;
};

export const query = graphql`
  fragment PostList_query on Query {
    allPost(
      filter: {
        category: {
          uid: { ne: "pr" }
        }
        blogCategory: {
          elemMatch: {
            uid: { glob: $id }
          }
        }
      }
      sort: {
        publishedAt: DESC
      }
    ) {
      nodes {
        id
        ...PostCard_post
      }
    }
  }
`;

const PostList: React.FC<PostListProps> = ({ data, searchResults, onResetFilter }) => {
  return (
    <>
      {data.allPost.nodes.length === 0 ? (
        <NoPostDescription>등록된 글이 없습니다.</NoPostDescription>
      ) : searchResults === undefined ? (
        <Container>
          {data.allPost.nodes.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </Container>
      ) : searchResults.length === 0 ? (
        <EmptyPlaceholder link="/blog/#_filter" onReset={onResetFilter} />
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
