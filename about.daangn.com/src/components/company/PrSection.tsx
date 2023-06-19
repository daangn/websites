import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';
import { Link, graphql } from 'gatsby';

type PrSectionProps = {
  slice: GatsbyTypes.PrSection;
  data: GatsbyTypes.PrPostList_queryFragment;
};

export const query = graphql`
  fragment PrPostList_query on Query {
    allPost(
      filter: {category: {name: {eq: "pr"}}}
      sort: {publishedAt: DESC}
      limit: 10
    ) {
      nodes {
        slug
        title
        publishedAt
      }
    }
  }
`;

const PrSection: React.FC<PrSectionProps> = ({ slice, data }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const containerWidth = container.clientWidth;
    const contentWidth = container.scrollWidth;
    container.scrollLeft = (contentWidth - containerWidth) / 2;
  });

  return (
    <Section>
      <Image
        image={slice.primary.background_image.localFile.childImageSharp.gatsbyImageData}
        alt={slice.primary.background_image.alt}
      />
      <ContentWrapper>
        <PrSectionTitle>{slice.primary.section_title.text}</PrSectionTitle>
        <Button to='/company/pr/'>자세히보기</Button>
        <PrListWraaper ref={scrollRef}>
          {data.allPost.nodes.map((post) => (
            <PrCard key={post.slug} to={`/company/pr/archive/${post.slug}/`}>
              <PrTitle>{post.title}</PrTitle>
              <PublishedAt dateTime={post.publishedAt}>{post.publishedAt}</PublishedAt>
            </PrCard>
          ))}
        </PrListWraaper>
      </ContentWrapper>
    </Section>
  );
};

const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 'calc(100vh - 58px)',
  overflow: 'hidden',

  '@sm': {
    height: 'calc(100vh - 68px)',
  },
});

const Image = styled(GatsbyImage, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(50%)',
});

const ContentWrapper = styled('div', {
  position: 'absolute',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

const PrSectionTitle = styled('h2', {
  margin: `${rem(20)} 0`,
  fontSize: vars.$scale.dimension.fontSize600,
  color: vars.$scale.color.gray00,

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
  border: `1px solid ${vars.$scale.color.gray00}`,
  color: vars.$scale.color.gray00,
});

const PrListWraaper = styled('div', {
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  width: '100%',
  overflowX: 'scroll',
  margin: `${rem(60)} 0`,
  paddingX: rem(24),

  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '&': {
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
  },
});

const PrCard = styled(Link, {
  display: 'flex',
  flexShrink: 0,
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  width: rem(180),
  height: rem(160),
  margin: rem(8),
  opacity: 0.85,
  padding: `${rem(4)} ${rem(20)}`,
  borderRadius: rem(30),
  backgroundColor: vars.$scale.color.gray00,
  color: vars.$scale.color.gray900,
  cursor: 'pointer',
  textDecoration: 'none',

  '@sm': {
    width: rem(260),
    height: rem(200),
  },

  transition: 'all .3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.03)',
  },
});

const PrTitle = styled('p', {
  maxWidth: rem(180),
  textAlign: 'left',
  fontSize: vars.$scale.dimension.fontSize300,
  fontWeight: 700,

  '@sm': {
    maxWidth: rem(200),
    fontSize: vars.$scale.dimension.fontSize400,
  },
});

const PublishedAt = styled('time', {
  color: vars.$scale.color.gray500,
});

export default PrSection;
