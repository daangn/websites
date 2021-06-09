import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

type CarouselItemProps = {
  item: GatsbyTypes.CarouselItem_itemFragment,
  className?: string,
};

export const query = graphql`
  fragment CarouselItem_item on PrismicTeamContentsDataMainBodyMemberQuoteCarouselItem {
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
  color: '$gray700',

  '@md': {
    typography: '$subtitle3',
  },
});

const CarouselItem: React.FC<CarouselItemProps> = ({
  item,
  className,
}) => {
  const image = item.image?.localFile?.childImageSharp?.gatsbyImageData && getImage(
    item.image.localFile.childImageSharp.gatsbyImageData
  );

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
