import * as React from 'react';
import { graphql, Link, type PageProps } from 'gatsby';
import { rem } from 'polished';
import { GatsbyImage } from 'gatsby-plugin-image';
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
  return (
    <Container to={`/company/pr/archive/${data.slug}/`}>
      <ThumbnailImage
        alt={'이미지'}
        image={data.thumbnailImage?.childImageSharp?.gatsbyImageData}
      />
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
});

const ThumbnailImage = styled(GatsbyImage, {
  width: rem(130),
  height: rem(90),
  minWidth: rem(130),
  minHeight: rem(90),
  borderRadius: rem(8),
  marginRight: rem(20),
  opacity: 0.99,
  objectFit: 'cover',

  '@sm': {
    minWidth: rem(184),
    minHeight: rem(138),
    marginRight: rem(72),
    borderRadius: rem(12),
  },
});

const DescriptionWrapper = styled('div', {
  position: 'relative',
});

const Title = styled('h3', {
  fontSize: '$subtitle4',
  color: vars.$scale.color.gray900,

  '@sm': {
    fontSize: '$subtitle3',
  },
});

const Summary = styled('p', {
  display: 'none',
  marginTop: rem(8),
  color: vars.$scale.color.gray700,
  fontSize: '$body3',
  whiteSpace: 'pre-line',

  '@sm': {
    display: 'block',
  },
});

const PublishDate = styled('p', {
  marginTop: rem(10),
  color: vars.$scale.color.gray600,
  fontSize: '$body3',
  whiteSpace: 'pre-line',
});

export default PostCard;
