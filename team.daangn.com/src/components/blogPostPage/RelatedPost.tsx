import { graphql, Link } from "gatsby";
import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from "@seed-design/design-token";

type RelatedPostProps = {
  data: GatsbyTypes.RelatedPost_blogPostFragment;
};

export const query = graphql`
  fragment RelatedPost_blogPost on BlogPost {
    relatedPosts {
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
  }
`;

const RelatedPost: React.FC<RelatedPostProps> = ({ data }) => {
  return (
    <Container>
      <RelatedPostsTitle>추천 포스트</RelatedPostsTitle>
      <CardContainer>
        {data.relatedPosts.map(post => (
          <PostCard key={post.slug}>
            <BlogLink to={`/blog/archive/${post.slug}/`}>
              {post.thumbnailImage.publicURL && (
                <Image src={post.thumbnailImage.publicURL} alt={`${post.title}_이미지`} />
              )}
              <PostTitle>{post.title}</PostTitle>
              <PostSummary>{post.summary}</PostSummary>
            </BlogLink>
            <PostCategory>{post.category.name}</PostCategory>
          </PostCard>
        ))}
      </CardContainer>
    </Container>
  );
};

const Container = styled("section", {
  width: "100%",
  marginTop: rem(88),
  padding: `${rem(56)} 0`,
  backgroundColor: vars.$scale.color.gray50,
});

const RelatedPostsTitle = styled("h2", {
  blogContentArea: true,
});

const CardContainer = styled("div", {
  width: "100%",
  contentArea: true,
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  rowGap: rem(48),
  justifyItems: "center",
  marginTop: rem(44),
  "@lg" : {
    gridTemplateColumns: "repeat(2, 1fr)",
  }
});

const PostCard = styled("div", {
  maxWidth: rem(480),
});

const Image = styled("img", {
  width: "100%",
  maxWidth: 480,
  maxHeight: 270,
  borderRadius: rem(8),
});

const BlogLink = styled(Link, {
  textDecoration: "none",
});

const PostTitle = styled("h3", {
  marginTop: rem(20),
  color: vars.$scale.color.gray900,
  fontSize: "$subtitle2",
});

const PostSummary = styled("p", {
  marginTop: rem(4),
  color: vars.$scale.color.gray700,
  fontSize: "$body2",
});

const PostCategory = styled("div", {
  width: "fit-content",
  padding: `${rem(4)} ${rem(10)}`,
  marginTop: rem(12),
  border: `1px solid ${vars.$scale.color.gray700}`,
  borderRadius: rem(40),
  color: vars.$scale.color.gray700,
  fontSize: "$caption1",
  cursor: "pointer",
});

export default RelatedPost;
