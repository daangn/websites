import { graphql } from 'gatsby';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

type FeaturedPostProps = {
  data: GatsbyTypes.FeaturedPost_aboutContentFragment;
};

export const query = graphql`
  fragment FeaturedPost_aboutContent on PrismicAboutContentDataType {
    featured_post {
      uid
      document {
        ... on PrismicAboutBlogPost {
          id
          data {
            summary
            title {
              text
            }
            thumbnail_image {
              alt
              localFile {
                publicURL
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
    <Container>
      <FeaturedImage src={data.document.data.thumbnail_image.localFile.publicURL} />
      <FeaturedDescription>
        <FeaturedTitle>{data.document.data.title.text}</FeaturedTitle>
        <FeaturedSummary>{data.document.data.summary}</FeaturedSummary>
      </FeaturedDescription>
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: rem(66),
});

const FeaturedImage = styled('img', {
  width: '100%',
  maxWidth: 1054,
  maxheight: 634,
  borderRadius: rem(8),
});

const FeaturedDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: rem(20),
});

const FeaturedTitle = styled('h1', {
  marginBottom: rem(2),
  typography: '$subtitle2',

  '@media (min-width: 1096px)': {
    typography: '$subtitle1',
  },
});

const FeaturedSummary = styled('p', {
  color: vars.$scale.color.gray700,
  typography: '$body2',

  '@media (min-width: 1096px)': {
    typography: '$subtitle4',
  },
});

export default FeaturedPost;
