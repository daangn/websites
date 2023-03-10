import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

import PostCard from './PostCard';

type PostListProps = {
  data: GatsbyTypes.PostList_postconnectionFragment;
};

export const query = graphql`
  fragment PostList_postconnection on PostConnection {
    allPost(filter: {category: {uid: {glob: $id, ne: 'pr'}}}) {
      nodes {
        ...PostCard_post
      }
    }
  }
`;

console.log("!!!!!query ::", query);

const PostList: React.FC<PostListProps> = ({ data }) => {
  return (
    <Container>
      {data.allPost.nodes.map((post) => (
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
