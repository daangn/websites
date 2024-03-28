import { vars } from '@seed-design/design-token';
import slugify from 'cjk-slug';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

type FeaturedPostProps = {
  data: GatsbyTypes.FeaturedPost_blogContentFragment;
};

export const query = graphql`
  fragment FeaturedPost_blogContent on PrismicBlogContentData {
    featured_post {
      uid
      document {
        ... on PrismicPost {
          id
          uid
          data {
            title {
              text
            }
            summary
            thumbnail_image {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`;

const FeaturedPost: React.FC<FeaturedPostProps> = ({ data }) => {
  return (
    <Container to={`/blog/archive/${slugify(data.document.uid)}/`}>
      {data?.document?.data?.thumbnail_image?.localFile?.childImageSharp?.gatsbyImageData && (
        <FeaturedImage
          image={data.document.data.thumbnail_image.localFile.childImageSharp.gatsbyImageData}
          alt={data?.document?.data?.thumbnail_image?.alt || ''}
        />
      )}
      <FeaturedDescription>
        <FeaturedTitle>{data.document.data.title.text}</FeaturedTitle>
        <FeaturedSummary>{data.document.data.summary}</FeaturedSummary>
      </FeaturedDescription>
    </Container>
  );
};

const Container = styled(Link, {
  display: 'none',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: rem(100),
  textDecoration: 'none',

  '@sm': {
    display: 'flex',
  },
});

const FeaturedImage = styled(GatsbyImage, {
  opacity: 0.99,
  width: '100%',
  maxWidth: 1054,
  maxheight: 634,
  borderRadius: rem(20),
  '-webkit-border-radius': rem(20),
  '-moz-border-radius': rem(20),

  '@sm': {
    borderRadius: rem(40),
    '-webkit-border-radius': rem(40),
    '-moz-border-radius': rem(40),
  },
});

const FeaturedDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: rem(20),
  wordWrap: 'break-word',
  textAlign: 'center',

  '@sm': {
    marginTop: rem(44),
  },
});

const FeaturedTitle = styled('h1', {
  color: vars.$scale.color.gray900,
  marginBottom: rem(2),
  typography: '$subtitle3',
  fontSize: rem(22),

  '@sm': {
    typography: '$subtitle2',
  },

  '@media (min-width: 1096px)': {
    typography: '$subtitle1',
  },
});

const FeaturedSummary = styled('p', {
  color: vars.$scale.color.gray600,
  typography: '$body2',
  textAlign: 'center',

  '@media (min-width: 1096px)': {
    typography: '$subtitle4',
  },
});

export default FeaturedPost;
