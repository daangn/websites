import { vars } from '@seed-design/design-token';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

type CarouselItemProps = {
  item: GatsbyTypes.TeamWebsite_CarouselItem_itemFragment;
  className?: string;
};

export const query = graphql`
  fragment TeamWebsite_CarouselItem_item on PrismicTeamContentsDataMainBodyMemberQuoteCarouselItem {
    image {
      alt
      localFile {
        childImageSharp {
          gatsbyImageData(
            width: 560
            layout: CONSTRAINED
            quality: 80
          )
        }
      }
    }
    quote
    who
  }
`;

const Container = styled('article', {
  display: 'grid',
  gridTemplateRows: 'repeat(2, min-content)',
  justifyContent: 'center',
  gap: rem(32),
});

const ImageContainer = styled('figure', {
  display: 'grid',
});

const QuoteContainer = styled('figure', {
  display: 'grid',
  gap: rem(16),

  '@md': {
    gap: rem(24),
  },
});

const Quote = styled('blockquote', {
  typography: '$subtitle4',
  fontWeight: 'bold',

  '@md': {
    typography: '$subtitle2',
  },
});

const By = styled('figcaption', {
  typography: '$body2',
  color: vars.$scale.color.gray700,

  '@md': {
    typography: '$subtitle3',
  },
});

const CarouselItem: React.FC<CarouselItemProps> = ({ item, className }) => {
  const image =
    item.image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(item.image.localFile.childImageSharp.gatsbyImageData);

  if (image == null || item.quote == null || item.who == null) {
    return null;
  }

  return (
    <Container className={className}>
      <ImageContainer>
        <GatsbyImage image={image} alt={item.image?.alt || ''} />
      </ImageContainer>
      <QuoteContainer>
        <Quote>{item.quote}</Quote>
        <By>{item.who}</By>
      </QuoteContainer>
    </Container>
  );
};

export default React.memo(CarouselItem);
