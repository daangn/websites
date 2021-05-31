import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

type PrismicTeamContentsDataMainBodyMemberQuoteCarouselProps = {
  data: GatsbyTypes.PrismicTeamContentsDataMainBodyMemberQuoteCarousel_dataFragment,
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamContentsDataMainBodyMemberQuoteCarousel_data on PrismicTeamContentsDataMainBodyMemberQuoteCarousel {
    items {
      member {
        document {
          __typename
          ...on PrismicMemberProfile {
            id
            data {
              nickname
              role
              image {
                thumbnails {
                  small_banner {
                    gatsbyImageData(
                      layout: FULL_WIDTH
                    )
                  }
                }
              }
            }
          }
        }
      }
      quote
    }
  }
`;

const Container = styled('section', {
  width: '100%',
});

const Slide = styled('div', {
  display: 'grid',
  gap: rem(24),
  gridTemplateRows: 'auto auto',
});

const Quote = styled('div', {
  display: 'grid',
  gap: rem(16),
  gridTemplateRows: 'auto auto',
  
  '@md': {
    gap: rem(24),
  },
});

const QuoteText = styled('blockquote', {
});

const QuoteBy = styled('span', {
});

const PrismicTeamContentsDataMainBodyMemberQuoteCarousel: React.FC<PrismicTeamContentsDataMainBodyMemberQuoteCarouselProps> = ({
  data,
  className,
}) => {
  if (data.items == null) {
    return null;
  }

  return (
    <Container className={className}>
    </Container>
  );
};

export default PrismicTeamContentsDataMainBodyMemberQuoteCarousel;
