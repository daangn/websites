import { vars } from '@seed-design/design-token';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';
import { SimpleReveal } from 'simple-reveal';

import CtaButton from '../CtaButton';

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

  return (
    <Section>
      <Image
        image={slice.primary.background_image.localFile.childImageSharp.gatsbyImageData}
        alt={slice.primary.background_image.alt}
      />
      <ContentWrapper>
        <SimpleReveal
          render={({ ref, cn, style }) => (
            <div ref={ref} className={cn()} style={style}>
              <PrSectionTitle>{slice.primary.section_title.text}</PrSectionTitle>
              <CtaButton link="/company/pr/">보도자료 보러 가기</CtaButton>
            </div>
          )}
          duration={1000}
          delay={400}
          initialTransform="translateY(2rem)"
        />
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
  marginBottom: rem(-120),

  '@sm': {
    marginBottom: rem(-160),
  },

  '@lg': {
    height: 'auto',
  },
});

const Image = styled(GatsbyImage, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
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
  maxWidth: rem(320),
  margin: `${rem(20)} 0`,
  fontSize: vars.$scale.dimension.fontSize600,
  color: vars.$scale.color.gray900,

  '@md': {
    maxWidth: rem(700),
    fontSize: vars.$scale.dimension.fontSize900,
  },
});

const PrListWraaper = styled('div', {
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  width: '100%',
  overflowX: 'scroll',
  overflowY: 'hidden',
  margin: `${rem(60)} 0`,
  paddingLeft: rem(24),
  paddingRight: rem(30),
  marginLeft: rem(24),

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
  justifyContent: 'space-between',
  width: rem(200),
  height: rem(200),
  margin: rem(8),
  opacity: 0.85,
  padding: `${rem(24)} ${rem(30)}`,
  borderRadius: rem(30),
  backgroundColor: vars.$scale.color.gray00,
  color: vars.$scale.color.gray900,
  cursor: 'pointer',
  textDecoration: 'none',
  boxSizing: 'border-box',

  '@sm': {
    width: rem(300),
    height: rem(200),
  },

  transition: 'all .3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.03)',
  },
});

const PrTitle = styled('p', {
  width: '100%',
  textAlign: 'left',
  fontSize: vars.$scale.dimension.fontSize200,
  fontWeight: 700,

  '@sm': {
    fontSize: vars.$scale.dimension.fontSize400,
  },
});

const PublishedAt = styled('time', {
  color: vars.$scale.color.gray500,
});

export default PrSection;
