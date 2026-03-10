import { getCdnImage } from '@karrotmarket/gatsby-theme-prismic/image-utils';
import { vars } from '@seed-design/design-token';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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
      alt
      gatsbyImageData(width: 500)
    }
    blogCategory {
      name
      uid
      priority # 사전 정렬 보장 안됨
    }
  }
`;

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const categories = [...post.blogCategory].sort((a, b) => b.priority - a.priority);
  return (
    <Container>
      <BlogLink to={`/blog/archive/${post.slug}/`}>
        <ImageWrapper>
          {post.thumbnailImage && (
            <Image
              image={getCdnImage(post.thumbnailImage.gatsbyImageData)}
              alt={post.thumbnailImage.alt || ''} 
              loading="lazy" 
            />
          )}
        </ImageWrapper>
        <PostTitle>{post.title}</PostTitle>
        <PostSummary>{post.summary}</PostSummary>
      </BlogLink>
      <PostCategoryList>
        {categories.map((category) => (
          <PostCategory key={category.uid} to={`/blog/category/${category.uid}/#_filter`}>
            {category.name}
          </PostCategory>
        ))}
      </PostCategoryList>
    </Container>
  );
};

const Container = styled('div', {
  width: rem(360),
  minHeight: rem(320),

  '@sm': {
    width: `max(${rem(380)}, 100%)`,
  },

  '@lg': {
    width: rem(440),
  },

  '@xl': {
    width: rem(480),
  },

  transition: 'all .3s ease-in-out',

  '&:hover h3': {
    color: vars.$scale.color.gray700,
  },

  '&:hover': {
    transform: 'translateY(-8px)',
  },
});

const BlogLink = styled(Link, {
  width: '100%',
  textDecoration: 'none',
});

const ImageWrapper = styled('div', {
  width: '100%',
  borderRadius: rem(20),
  overflow: 'hidden',
});

const Image = styled(GatsbyImage, {
  width: '100%',
  height: 'auto',
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

const PostCategoryList = styled('div', {
  display: 'flex',
  columnGap: rem(8),
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
