import { vars } from '@seed-design/design-token';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';
import { SimpleReveal } from 'simple-reveal';

import CtaButton from '../CtaButton';

type BlogListSectionProps = {
  slice: GatsbyTypes.BlogListSection;
  data: GatsbyTypes.BlogPostList_queryFragment;
};

export const query = graphql`
  fragment BlogPostList_query on Query {
    allPost(
      filter: {category: {uid: {eq: "culture"}}}
      sort: {publishedAt: DESC}
      limit: 5
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
      <SimpleReveal
        render={({ ref, cn, style }) => (
          <BlogSectionTitle ref={ref} className={cn()} style={style}>
            {slice.primary.blog_list_title}
          </BlogSectionTitle>
        )}
        duration={1000}
        delay={200}
        initialTransform="translateY(2rem)"
      />
      <CtaButton link="/blog/category/career/">블로그 글 보러 가기</CtaButton>
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
  marginTop: rem(64),

  '@md': {
    marginTop: rem(160),
  },
});

const BlogSectionTitle = styled('h2', {
  margin: `${rem(28)} 0`,
  padding: `0 ${rem(16)}`,
  textAlign: 'center',
  fontSize: vars.$scale.dimension.fontSize600,

  '@md': {
    fontSize: vars.$scale.dimension.fontSize900,
  },
});

const BlogCardWraaper = styled('div', {
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  overflowX: 'scroll',
  width: '100%',
  marginTop: rem(80),

  '@md': {
    marginTop: rem(110),
  },

  '@xl': {
    width: rem(1380),
  },

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
  opacity: 0.99,

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
  top: 205,
  width: '100%',
  height: rem(120),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'left',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%)',
});

const BlogTitle = styled('p', {
  width: '100%',
  maxWidth: rem(200),
  padding: `${rem(16)} ${rem(20)}`,
  color: vars.$scale.color.gray00,
  fontSize: vars.$scale.dimension.fontSize400,
  fontWeight: 'bold',
});

export default BlogListSection;
