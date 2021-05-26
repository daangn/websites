import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

type PrismicTeamContentsMainBodySingleIllustrationProps = {
  data: GatsbyTypes.PrismicTeamContentsMainBodySingleIllustration_dataFragment,
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamContentsMainBodySingleIllustration_data on PrismicTeamContentsMainBodySingleIllustration {
    primary {
      illustration {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 1920,
            )
          }
        }
      }
    }
  }
`;

const Container = styled('section', {
});

const PrismicTeamContentsMainBodySingleIllustration: React.FC<PrismicTeamContentsMainBodySingleIllustrationProps> = ({
  data,
}) => {
  return (
    <Container>
      일러스트
    </Container>
  );
};

export default PrismicTeamContentsMainBodySingleIllustration;
