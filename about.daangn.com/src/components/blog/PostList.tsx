import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

import PostCard from './PostCard';

type PostListProps = {
  data: GatsbyTypes.PostList_queryFragment;
};

export const query = graphql`
  fragment PostList_query on Query {
    allPost(filter: {category: {uid: {glob: $id, ne: "pr"}}}) {
      nodes {
        ...PostCard_post
      }
    }
  }
`;

const PostList: React.FC<PostListProps> = ({ data }) => {
  console.log('data.allPost.nodes ::', data.allPost.nodes.length);
  return (
    <>
      {data.allPost.nodes.length === 0 ? (
        <NoPostDescription>등록된 글이 없습니다.</NoPostDescription>
      ) : (
        <Container>
          {data.allPost.nodes.map((post) => (
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
