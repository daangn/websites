import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

type PrismicTeamContentsMainBodyKeyVisualWithTextProps = {
  data: GatsbyTypes.PrismicTeamContentsMainBodyKeyVisualWithText_dataFragment
};

export const query = graphql`
  fragment PrismicTeamContentsMainBodyKeyVisualWithText_data on PrismicTeamContentsMainBodyKeyVisualWithText {
    primary {
      key_visual_image {
        url
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 750
              formats: [WEBP, AVIF, AUTO]
              layout: CONSTRAINED
              placeholder: BLURRED
              blurredOptions: { width: 50 }
            )
          }
        }
      }
      description {
        html
      }
    }
  }
`;

const Container = styled('section', {
});

const PrismicTeamContentsMainBodyKeyVisualWithText: React.FC<PrismicTeamContentsMainBodyKeyVisualWithTextProps> = ({
  data,
}) => {
  console.log(data.primary.key_visual_image?.localFile?.childImageSharp?.gatsbyImageData);
  return (
    <Container>
      Key visual
    </Container>
  );
};

export default PrismicTeamContentsMainBodyKeyVisualWithText;
