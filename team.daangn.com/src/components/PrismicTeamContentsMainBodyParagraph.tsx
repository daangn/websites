import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

type PrismicTeamContentsMainBodyParagraphProps = {
  data: GatsbyTypes.PrismicTeamContentsMainBodyParagraph_dataFragment
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamContentsMainBodyParagraph_data on PrismicTeamContentsMainBodyParagraph {
    primary {
      content {
        html
      }
    }
  }
`;

const Container = styled('section', {
});

const PrismicTeamContentsMainBodyParagraph: React.FC<PrismicTeamContentsMainBodyParagraphProps> = ({
  data,
  className,
}) => {
  return (
    <Container
      className={className}
      dangerouslySetInnerHTML={{ __html: data.primary.content?.html || '' }}
    />
  );
};

export default PrismicTeamContentsMainBodyParagraph;
