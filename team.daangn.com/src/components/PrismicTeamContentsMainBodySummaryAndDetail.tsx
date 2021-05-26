import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

type PrismicTeamContentsMainBodySummaryAndDetailProps = {
  data: GatsbyTypes.PrismicTeamContentsMainBodySummaryAndDetail_dataFragment,
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamContentsMainBodySummaryAndDetail_data on PrismicTeamContentsMainBodySummaryAndDetail {
    primary {
      key_text
      summary {
        text
      }
      link {
        url
      }
    }
  }
`;

const Container = styled('section', {
});

const PrismicTeamContentsMainBodySummaryAndDetail: React.FC<PrismicTeamContentsMainBodySummaryAndDetailProps> = ({
  data,
}) => {
  return (
    <Container>
      Summary and Detail
    </Container>
  );
};

export default PrismicTeamContentsMainBodySummaryAndDetail;
