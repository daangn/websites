import { graphql } from 'gatsby';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';

import PostCard from './PostCard';

type PostListProps = {
  query: GatsbyTypes.PostList_queryFragment;
};

export const query = graphql`
  fragment PostList_query on Query {
    allBlogPost(filter: {category: {uid: {glob: $id}}}) {
      nodes {
        ...PostCard_blogpost
      }
    }
  }
`;

const PostList: React.FC<PostListProps> = ({ query }) => {
  return (
    <Container>
      {query.allBlogPost.nodes.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </Container>
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

export default PostList;
