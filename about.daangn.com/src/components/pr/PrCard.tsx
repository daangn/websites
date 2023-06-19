import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { rem } from 'polished';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

type PrCardProps = {
  data: GatsbyTypes.PrCard_postFragment;
};

export const query = graphql`
  fragment PrCard_post on Post {
    slug
    title
    summary
    publishedAt
    thumbnailImage {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

const PostCard: React.FC<PrCardProps> = ({ data }) => {
  const image =
    data.thumbnailImage?.childImageSharp?.gatsbyImageData &&
    getImage(data.thumbnailImage.childImageSharp.gatsbyImageData);

  return (
    <Container to={`/company/pr/archive/${data.slug}/`}>
      <ThumbnailWrapper>
        {image && <ThumbnailImage alt={`썸네일-${data.title}`} image={image} />}
      </ThumbnailWrapper>
      <DescriptionWrapper>
        <Title>{data.title}</Title>
        <Summary>{data.summary}</Summary>
        <PublishDate>{data.publishedAt.replaceAll('-', '.')}</PublishDate>
      </DescriptionWrapper>
    </Container>
  );
};

const Container = styled(Link, {
  display: 'flex',
  width: '100%',
  marginBottom: rem(24),
  textDecoration: 'none',

  '@sm': {
    marginBottom: rem(52),
  },

  transition: 'all .3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.03)',
  },
});

const ThumbnailWrapper = styled('div', {
  width: rem(110),
  aspectRatio: '16 / 9',
  borderRadius: rem(8),
  backgroundColor: vars.$scale.color.gray100,
  overflow: 'hidden',

  '@sm': {
    width: rem(180),
    borderRadius: rem(10),
  },

  '@md': {
    width: rem(240),
    borderRadius: rem(12),
  },
});

const ThumbnailImage = styled(GatsbyImage, {
  height: '100%',
  opacity: 0.99,
  objectFit: 'cover',
});

const DescriptionWrapper = styled('div', {
  marginLeft: rem(20),
  maxHeight: rem(67.5),

  '@sm': {
    marginLeft: rem(44),
    maxHeight: rem(101.25),
  },

  '@md': {
    marginLeft: rem(72),
    maxHeight: rem(135),
  },
});

const Title = styled('h3', {
  width: rem(210),
  wordBreak: 'break-all',
  fontSize: vars.$scale.dimension.fontSize200,
  fontWeight: 500,
  color: vars.$scale.color.gray900,

  '@sm': {
    width: 'auto',
    maxWidth: rem(500),
    fontSize: vars.$scale.dimension.fontSize300,
    fontWeight: vars.$static.fontWeight.bold,
  },

  '@md': {
    fontSize: vars.$scale.dimension.fontSize400,
  },
});

const Summary = styled('p', {
  display: 'none',
  marginTop: rem(8),
  overflow: 'hidden',
  whiteSpace: 'pre-line',
  textOverflow: 'ellipsis',
  wordBreak: 'break-word',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
  color: vars.$scale.color.gray700,
  fontSize: vars.$scale.dimension.fontSize150,

  '@md': {
    display: '-webkit-box',
    maxWidth: rem(500),
  },
});

const PublishDate = styled('p', {
  marginTop: rem(10),
  color: vars.$scale.color.gray600,
  fontSize: vars.$scale.dimension.fontSize100,
});

export default PostCard;
