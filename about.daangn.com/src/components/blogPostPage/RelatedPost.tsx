import { graphql, Link } from 'gatsby';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

type RelatedPostProps = {
  data: GatsbyTypes.RelatedPost_postFragment;
};

export const query = graphql`
  fragment RelatedPost_post on Post {
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
    <>
      {data.relatedPosts.length === 0 ? (
        <></>
      ) : (
        <Container>
          <RelatedPostsTitle>추천 포스트</RelatedPostsTitle>
          <CardContainer>
            {data.relatedPosts.map((post) => (
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
      )}
    </>
  );
};

const Container = styled('section', {
  width: '100%',
  marginTop: rem(88),
  padding: `${rem(56)} 0`,
  backgroundColor: vars.$scale.color.gray50,
});

const RelatedPostsTitle = styled('h2', {
  contentArea: true,
  maxWidth: rem(1100),
  width: "100%",
  display: 'flex',
  justifyContent: 'center',

  '@xl': {
    justifyContent: 'flex-start',
  },
});

const CardContainer = styled('div', {
  width: '100%',
  contentArea: true,
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: rem(12),
  rowGap: rem(48),
  justifyItems: 'center',
  justifyContent: 'center',
  marginTop: rem(44),
  maxWidth: rem(1100),

  '@xl': {
    justifyContent: 'space-between',
  },
});

const PostCard = styled('div', {
  maxWidth: rem(480),
});

const Image = styled('img', {
  width: '100%',
  maxWidth: 480,
  maxHeight: 270,
  borderRadius: rem(20),

  '@md': {
    borderRadius: rem(30),
  },
});

const BlogLink = styled(Link, {
  textDecoration: 'none',
});

const PostTitle = styled('h3', {
  marginTop: rem(20),
  color: vars.$scale.color.gray900,
  fontSize: '$subtitle3',

  '@md': {
    fontSize: '$subtitle2',
  },
});

const PostSummary = styled('p', {
  marginTop: rem(4),
  color: vars.$scale.color.gray700,
  fontSize: '$body2',
});

const PostCategory = styled('div', {
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

export default RelatedPost;
