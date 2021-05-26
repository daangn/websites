import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

type PrismicTeamContentsMainBodyMemberQuoteCarouselProps = {
  data: GatsbyTypes.PrismicTeamContentsMainBodyMemberQuoteCarousel_dataFragment,
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamContentsMainBodyMemberQuoteCarousel_data on PrismicTeamContentsMainBodyMemberQuoteCarousel {
    items {
      member {
        document {
          ...on PrismicMemberProfile {
            id
            data {
              nickname
              role
            }
          }
        }
      }
    }
  }
`;

const Container = styled('section', {
});

const PrismicTeamContentsMainBodyMemberQuoteCarousel: React.FC<PrismicTeamContentsMainBodyMemberQuoteCarouselProps> = ({
  data,
  className,
}) => {
  return (
    <Container className={className}>
      Carousel
    </Container>
  );
};

export default PrismicTeamContentsMainBodyMemberQuoteCarousel;
