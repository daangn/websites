import { vars } from '@seed-design/design-token';
import { Link, graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

type PostCardProps = {
  post: GatsbyTypes.PostCard_postFragment;
};

export const query = graphql`
  fragment PostCard_post on Post {
    slug
    title
    summary
    thumbnailImage {
      publicURL
    }
    category {
      name
      uid
    }
  }
`;

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Container>
      <BlogLink to={`/blog/archive/${post.slug}/`}>
        {post.thumbnailImage.publicURL && (
          <Image src={post.thumbnailImage.publicURL} alt={`${post.title}_이미지`} />
        )}
        <PostTitle>{post.title}</PostTitle>
        <PostSummary>{post.summary}</PostSummary>
      </BlogLink>
      <PostCategory to={`/blog/category/${post.category.uid}/`}>{post.category.name}</PostCategory>
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
    width: rem(480),
    height: rem(460),
  },
});

const BlogLink = styled(Link, {
  width: '100%',
  textDecoration: 'none',
});

const Image = styled('img', {
  width: '100%',
  borderRadius: rem(20),
});

const PostTitle = styled('h3', {
  width: '100%',
  marginTop: rem(20),
  color: vars.$scale.color.gray900,
  fontSize: rem(22),

  '@media (min-width: 1096px)': {
    fontSize: '$subtitle2',
  },
});

const PostSummary = styled('p', {
  width: '100%',
  marginTop: rem(10),
  color: vars.$scale.color.gray600,
  fontSize: '$body2',
  whiteSpace: 'pre-line',

  '@sm': {
    marginTop: rem(12),
  },
});

const PostCategory = styled(Link, {
  display: 'inline-block',
  width: 'fit-content',
  padding: `${rem(4)} ${rem(10)}`,
  marginTop: rem(18),
  border: 'none',
  borderRadius: rem(40),
  backgroundColor: vars.$scale.color.gray100,
  color: vars.$scale.color.gray600,
  typography: '$caption2',
  textDecoration: 'none',
  cursor: 'pointer',

  '@sm': {
    marginTop: rem(24),
  },

  '@lg': {
    typography: '$caption1',
  },
});

export default PostCard;
