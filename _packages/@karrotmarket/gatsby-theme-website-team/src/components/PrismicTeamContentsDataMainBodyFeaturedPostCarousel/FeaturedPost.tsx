import * as React from 'react';
import { rem } from 'polished';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { vars } from '@seed-design/design-token';

type FeaturedPostProps = {
  item: GatsbyTypes.TeamWebsite_FeaturedPostProps_itemFragment;
  className?: string;
};

export const query = graphql`
  fragment TeamWebsite_FeaturedPostProps_item on PrismicTeamContentsDataMainBodyFeaturedPostCarouselItem {
    main_page_featured_post {
      slug
      uid
      document {
        ... on PrismicPost {
          data {
            thumbnail_image {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            summary
            title {
              text
            }
          }
        }
      }
    }
  }
`;

const Container = styled(Link, {
  display: 'grid',
  gridTemplateRows: 'repeat(2, min-content)',
  justifyContent: 'center',
  borderRadius: rem(30),
  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 8px 0px',
  boxSizing: 'border-box',
  marginBottom: rem(20),
  cursor: 'pointer',
  textDecoration: 'none',
});

const ImageWrapper = styled('figure', {
  display: 'grid',
});

const Image = styled(GatsbyImage, {
  borderRadius: `${rem(30)} ${rem(30)} 0 0`,
});

const TextWrapper = styled('figure', {
  display: 'grid',
  padding: `${rem(22)} ${rem(20)}`,
  borderRadius: `0 0 ${rem(30)} ${rem(30)}`,
  backgroundColor: vars.$scale.color.gray00,

  '@sm': {
    padding: `${rem(44)} ${rem(40)}`,
  },
});

const Title = styled('h3', {
  typography: '$subtitle3',
  fontWeight: 'bold',
  color: vars.$scale.color.gray900,

  '@md': {
    typography: '$subtitle2',
    maxWidth: rem(300),
  },
});

const Summary = styled('p', {
  typography: '$body3',
  color: vars.$scale.color.gray600,
  marginTop: rem(4),

  '@md': {
    marginTop: rem(12),
    typography: '$subtitle4',
  },
});

const FeaturedPost: React.FC<FeaturedPostProps> = ({ item, className }) => {
  const image =
    item.main_page_featured_post?.document?.data?.thumbnail_image?.localFile?.childImageSharp
      ?.gatsbyImageData &&
    getImage(
      item.main_page_featured_post.document.data.thumbnail_image.localFile.childImageSharp
        .gatsbyImageData,
    );

  if (image == null) {
    return null;
  }
  return (
    <Container className={className} to={`/blog/archive/${item.main_page_featured_post.slug}/`}>
      <ImageWrapper>
        <Image image={image} alt={item.image?.alt || ''} />
      </ImageWrapper>
      <TextWrapper>
        <Title>{item.main_page_featured_post?.document?.data?.title?.text}</Title>
        <Summary>{item.main_page_featured_post?.document?.data?.summary}</Summary>
      </TextWrapper>
    </Container>
  );
};

export default React.memo(FeaturedPost);
