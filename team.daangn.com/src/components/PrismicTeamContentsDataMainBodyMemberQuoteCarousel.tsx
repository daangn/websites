import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

import CarouselItem from './prismicTeamContentsDataMainBodyMemberQuoteCarousel/CarouselItem';

type PrismicTeamContentsDataMainBodyMemberQuoteCarouselProps = {
  data: GatsbyTypes.PrismicTeamContentsDataMainBodyMemberQuoteCarousel_dataFragment,
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamContentsDataMainBodyMemberQuoteCarousel_data on PrismicTeamContentsDataMainBodyMemberQuoteCarousel {
    items {
      ...CarouselItem_item
    }
  }
`;

const Container = styled('section', {
  contentArea: true,
  width: '100%',
  boxSizing: 'border-box',
  display: 'grid',
  gap: rem(40),
  
  '@md': {
    gap: rem(56),
  },
});

const SlideCamera = styled('div', {
  overflowX: 'hidden',
});

const Slide = styled('div', {
  display: 'flex',
  gap: rem(40),
  transition: 'transform 0.3s ease-in-out',
  '& > *': {
    flexShrink: 0,
    width: '100%',
    maxWidth: rem(560),
  },
});

const Dots = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: rem(32),

  '@md': {
    '& > :nth-child(2n)': {
      display: 'none',
    },
  },
});

const Dot = styled('button', {
  position: 'relative',
  borderRadius: '100%',
  border: '1px solid $gray900',
  width: rem(12),
  height: rem(12),
  padding: 0,
  background: '$white',
  cursor: 'pointer',

  '&::after': {
    content: '',
    position: 'absolute',
    left: '-10px',
    right: '-10px',
    top: '-10px',
    bottom: '-10px',
  },

  variants: {
    active: {
      true: {
        background: '$gray900',
      },
    },
  },
});

const PrismicTeamContentsDataMainBodyMemberQuoteCarousel: React.FC<PrismicTeamContentsDataMainBodyMemberQuoteCarouselProps> = ({
  data,
  className,
}) => {
  const items = data.items || [];
  const [slide, setSlide] = React.useState(0);

  return (
    <Container className={className}>
      <SlideCamera>
        <Slide
          css={{
            transform: `translateX(calc(-100% * ${slide} - ${rem(40 * slide)}))`,
            '@md': {
              transform: `translateX(-${rem((560 + 40) * slide)})`,
            },
          }}
        >
          {items.map((item, i) => (
            <CarouselItem
              key={i}
              item={item}
            />
          ))}
        </Slide>
      </SlideCamera>
      <Dots>
        {items.map((item, i) => (
          <Dot
            key={i}
            active={slide === i}
            onClick={() => setSlide(i)}
          />
        ))}
      </Dots>
    </Container>
  );
};

export default PrismicTeamContentsDataMainBodyMemberQuoteCarousel;
