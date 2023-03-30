import { vars } from '@seed-design/design-token';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

type PostCardProps = {
  post: GatsbyTypes.PostCard_noteFragment;
};

export const query = graphql`
  fragment PostCard_note on Note {
    hashtags
    id
    noteUrl
    title
    eyecatch {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const thumbnailImage =
    post.eyecatch.childImageSharp?.gatsbyImageData &&
    getImage(post.eyecatch.childImageSharp?.gatsbyImageData);
  const hashtags = post.hashtags.slice(0, 4);

  return (
    <Container>
      <NoteLink target="_blank" rel="external noopener" href={post.noteUrl}>
        <Image image={thumbnailImage} />
        <PostTitle>{post.title}</PostTitle>
        <HashtagWrapper>
          {hashtags.map((hashtag) => (
            <PostHashtag>{hashtag}</PostHashtag>
          ))}
        </HashtagWrapper>
      </NoteLink>
    </Container>
  );
};

const Container = styled('div', {
  width: rem(320),
  minHeight: rem(320),

  '@sm': {
    width: rem(380),
    height: rem(360),
  },

  '@lg': {
    width: rem(440),
    height: rem(420),
  },

  '@xl': {
    width: rem(460),
    height: rem(420),
  },
});

const NoteLink = styled('a', {
  width: '100%',
  textDecoration: 'none',
});

const Image = styled(GatsbyImage, {
  width: '100%',
  borderRadius: rem(20),
  opacity: 0.99,
});

const PostTitle = styled('h3', {
  width: '100%',
  marginTop: rem(20),
  color: vars.$scale.color.gray900,
  fontSize: rem(18),

  '@xl': {
    typography: '$subtitle2',
  },
});

const PostHashtag = styled('span', {
  display: 'inline-block',
  width: 'fit-content',
  padding: `${rem(4)} ${rem(10)}`,
  marginTop: rem(18),
  marginRight: rem(4),
  border: 'none',
  borderRadius: rem(40),
  backgroundColor: vars.$scale.color.gray100,
  color: vars.$scale.color.gray600,
  typography: '$caption2',
  textDecoration: 'none',

  '@sm': {
    marginTop: rem(24),
  },

  '@lg': {
    typography: '$caption1',
  },
});

const HashtagWrapper = styled('div', {
  width: '100%',
  maxHeight: rem(50),
  overflowX: 'scroll',
  overflowY: 'hidden',
});

export default PostCard;
