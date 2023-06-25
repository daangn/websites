import { Link, graphql } from 'gatsby';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

type BlogListSectionProps = {
  slice: GatsbyTypes.BlogListSection;
  data: GatsbyTypes.BlogPostList_queryFragment;
};

export const query = graphql`
  fragment BlogPostList_query on Query {
    allPost(
      filter: {category: {uid: {eq: "career"}}}
      sort: {publishedAt: DESC}
    ) {
      nodes {
        slug
        title
        verticalThumbnailImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const BlogListSection: React.FC<BlogListSectionProps> = ({ slice, data }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const containerWidth = container.clientWidth;
    const contentWidth = container.scrollWidth;
    container.scrollLeft = (contentWidth - containerWidth) / 2;
  });

  return (
    <BlogSection>
      <BlogSectionTitle>{slice.primary.blog_list_title}</BlogSectionTitle>
      <Button to='/blog'>자세히보기</Button>
      <BlogCardWraaper ref={scrollRef}>
        {data.allPost.nodes.map((post) => (
          <BlogCard key={post.slug} to={`/blog/archive/${post.slug}`}>
            <BlogcardThumbnail
              image={post.verticalThumbnailImage?.childImageSharp?.gatsbyImageData}
              alt={`${post.slug}_썸네일이미지`}
            />
            <BlogTitleBox>
              <BlogTitle>{post.title}</BlogTitle>
            </BlogTitleBox>
          </BlogCard>
        ))}
      </BlogCardWraaper>
    </BlogSection>
  );
};

const BlogSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: `${rem(100)} 0`,
});

const BlogSectionTitle = styled('h2', {
  margin: `${rem(20)} 0`,
  padding: `0 ${rem(16)}`,
  textAlign: 'center',
  fontSize: vars.$scale.dimension.fontSize600,

  '@md': {
    fontSize: vars.$scale.dimension.fontSize800,
  },
});

const Button = styled(Link, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: rem(110),
  height: rem(40),
  margin: rem(20),
  borderRadius: rem(20),
  textDecoration: 'none',
  backgroundColor: vars.$scale.color.gray900,
  color: vars.$scale.color.gray00,
});

const BlogCardWraaper = styled('div', {
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  overflowX: 'scroll',
  width: '100%',
  margin: `${rem(60)} 0`,

  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '&': {
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
  },
});

const BlogCard = styled(Link, {
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  flexShrink: 0,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  width: rem(245),
  height: rem(322),
  margin: rem(16),
  marginBottom: rem(40),
  borderRadius: rem(30),
  backgroundColor: vars.$scale.color.gray00,
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
  color: vars.$scale.color.gray900,
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all .3s ease-in-out',

  '&:hover': {
    transform: 'translateY(-8px)',
  },
});

const BlogcardThumbnail = styled(GatsbyImage, {
  position: 'absolute',
  top: 0,
  height: '100%',
  objectFit: 'scale-down',
});

const BlogTitleBox = styled('div', {
  position: 'absolute',
  top: 225,
  width: '100%',
  height: rem(100),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  background: 'linear-gradient(rgba(175, 175, 175, 0) 0%, rgb(129 129 129 / 53%) 100%)',
});

const BlogTitle = styled('p', {
  padding: `${rem(16)} ${rem(20)}`,
  color: vars.$scale.color.gray00,
  fontSize: vars.$scale.dimension.fontSize300,
  fontWeight: 'bold',
});

export default BlogListSection;
