import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

import PostCard from './PostCard';

type PostListProps = {
  data: GatsbyTypes.PostList_queryFragment;
};

export const query = graphql`
  fragment PostList_query on Query {
    allNoteContent {
      nodes {
        ...PostCard_note
      }
    }
  }
`;

const PostList: React.FC<PostListProps> = ({ data }) => {
  return (
    <>
      {data.allNoteContent.nodes.length === 0 ? (
        <NoPostDescription>登録された記事がありません。</NoPostDescription>
      ) : (
        <Container>
          {data.allNoteContent.nodes.map((post) => (
            <PostCard key={post.id} post={post} />
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
  rowGap: rem(24),
  justifyItems: 'center',
  justifyContent: 'center',
  marginTop: rem(24),

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
