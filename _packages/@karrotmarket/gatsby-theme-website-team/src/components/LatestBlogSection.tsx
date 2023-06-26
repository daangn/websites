import * as React from 'react';
import { rem } from 'polished';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';

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
  paddingY: rem(72),

  '@md': {
    paddingY: rem(100),
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
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 10px 0px',
  color: vars.$scale.color.gray900,
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all .3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.03)',
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
  textAlign: 'left',
  background: 'linear-gradient(rgba(175, 175, 175, 0) 0%, rgb(129 129 129 / 53%) 100%)',
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
      <TextWrapper>
        <Title>당근마켓의 이야기가 더 궁금하다면</Title>
        <DetailLink
          link={parseLink('https://about.daangn.com/blog/')}
          message="블로그 글 보러가기"
        />
      </TextWrapper>
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
