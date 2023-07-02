import * as React from 'react';
import { rem } from 'polished';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';
import { SimpleReveal } from 'simple-reveal';

import _DetailLink from './DetailLink';

type LatestBlogSectionProps = {
  data: GatsbyTypes.LatestBlogPostList_queryFragment;
  className?: string;
};

export const query = graphql`
  fragment LatestBlogPostList_query on Query {
    allPost(
      filter: {category: {uid: {ne: "pr"}}}
      sort: {publishedAt: DESC}
      limit: 20
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

const Container = styled('section', {
  width: '100%',
  overflowX: 'hidden',
});

const TextWrapper = styled('div', {
  display: 'grid',
  justifyContent: 'center',
  gap: rem(32),
  paddingX: rem(64),
  paddingBottom: rem(12),

  '@md': {
    paddingBottom: rem(50),
  },
});

const Title = styled('h1', {
  textAlign: 'center',
  typography: '$subtitle2',

  '@md': {
    typography: '$heading4',
  },
});

const DetailLink = styled(_DetailLink, {
  justifyContent: 'center',
});

const BlogCardWraaper = styled('div', {
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  overflowX: 'scroll',
  width: '100%',
  marginTop: rem(60),

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
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 10px 0px',
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

const LatestBlogSection: React.FC<LatestBlogSectionProps> = ({ data, className }) => {
  const parseLink = useLinkParser();
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const containerWidth = container.clientWidth;
    const contentWidth = container.scrollWidth;
    container.scrollLeft = (contentWidth - containerWidth) / 2;
  }, []);

  return (
    <Container className={className}>
      <SimpleReveal
        render={({ ref, cn, style }) => (
          <TextWrapper ref={ref} className={cn()} style={style}>
            <Title>당근마켓 팀 이야기가 더 궁금하다면</Title>
            <DetailLink
              link={parseLink('https://about.daangn.com/blog/')}
              message="블로그 글 보러가기"
            />
          </TextWrapper>
        )}
        duration={1000}
        delay={200}
        initialTransform="translateY(2rem)"
      />
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
    </Container>
  );
};

export default LatestBlogSection;
