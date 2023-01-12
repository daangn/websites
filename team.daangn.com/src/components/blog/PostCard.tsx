import { rem } from "polished";
import { Link } from 'gatsby';
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from '@seed-design/design-token';

const PostCard = ({ post }) => {
  return (
    <BlogLink to={`/blog/archive/${post.slug}/`}>
      {post.thumbnailImage.publicURL && (
        <Image src={post.thumbnailImage.publicURL} alt={`${post.title}_이미지`} />
      )}
      <PostTitle>{post.title}</PostTitle>
      <PostSummary>{post.summary}</PostSummary>
      <PostCategory>{post.category.name}</PostCategory>
    </BlogLink>
  );
};

const Image = styled("img", {
  width: 480,
  height: 270,
  borderRadius: rem(8),
});

const BlogLink = styled(Link, {
  maxWidth: rem(480),
  textDecoration: "none",
});

const PostTitle = styled("h3", {
  marginTop: rem(20),
  color: vars.$scale.color.gray900,
  fontSize: rem(20),
});

const PostSummary = styled("p", {
  marginTop: rem(8),
  color: vars.$scale.color.gray600,
  fontSize: rem(14),
});

const PostCategory = styled("div", {
  width: "fit-content",
  padding: `${rem(4)} ${rem(10)}`,
  marginTop: rem(18),
  border: `1px solid ${vars.$scale.color.gray600}`,
  borderRadius: rem(40),
  color: vars.$scale.color.gray600,
  fontSize: rem(10),
});

export default PostCard;
