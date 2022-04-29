import * as React from 'react';
import { useSwipeable } from 'react-swipeable';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token'

import CarouselItem from './prismicTeamContentsDataMainBodyMemberQuoteCarousel/CarouselItem';
import _ArrowButton from './prismicTeamContentsDataMainBodyMemberQuoteCarousel/ArrowButton';
import { ReactComponent as ArrowButtonIcon } from './prismicTeamContentsDataMainBodyMemberQuoteCarousel/arrow.svg';

type PrismicTeamContentsDataMainBodyMemberQuoteCarouselProps = {
  data: GatsbyTypes.PrismicTeamContentsDataMainBodyMemberQuoteCarousel_dataFragment,
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamContentsDataMainBodyMemberQuoteCarousel_data on PrismicTeamContentsDataMainBodyMemberQuoteCarousel {
    items {
      ...TeamWebsite_CarouselItem_item
    }
  }
`;

const Container = styled('section', {
  position: 'relative',
  contentArea: true,
  width: '100%',
  boxSizing: 'border-box',
  display: 'grid',
  gap: rem(40),
  
  '@lg': {
    gap: rem(56),
  },
});

const SlideCamera = styled('div', {
  overflowX: 'hidden',
});

const Slide = styled('div', {
  '$$width': rem(560),
  '$$gap': rem(40),

  display: 'flex',
  gap: '$$gap',
  transition: 'transform 0.3s ease-in-out',

  transform: `translateX(calc(-100% * $$slide - $$gap * $$slide))`,
  '@lg': {
    transform: `translateX(max(calc(-1 * ($$width + $$gap)) * $$slide, calc(-50% * $$slide - $$gap / 2 * $$slide)))`,
  },

  '& > *': {
    flexShrink: 0,
    width: '100%',
    '@lg': {
      maxWidth: `min($$width, calc(50% - $$gap / 2))`,
    },
  },
});

const ArrowButton = styled(_ArrowButton, {
  variants: {
    viewport: {
      initial: {
        display: 'none',
      },
      xxl: {
        display: 'inline-flex',
      },
    },
    hide: {
      true: {
        display: 'none',
      },
      false: {
        display: 'inline-flex',
      },
    },
  },

  compoundVariants: [
    {
      viewport: 'xxl',
      hide: true,
      css: {
        display: 'none',
      },
    },
    {
      viewport: 'initial',
      hide: false,
      css: {
        display: 'none',
      },
    },
    {
      viewport: 'xxl',
      hide: false,
      css: {
        display: 'inline-flex',
      },
    },
  ],

  defaultVariants: {
    hide: false,
  },
});

const LeftArrowButton = styled(ArrowButton, {
  position: 'absolute',
  right: `calc(100% + ${rem(16)})`,
  top: rem(200),
});

const RightArrowButton = styled(ArrowButton, {
  position: 'absolute',
  left: `calc(100% + ${rem(16)})`,
  top: rem(200),
});

const Dots = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: rem(32),

  '@lg': {
    '& > :nth-child(2n)': {
      display: 'none',
    },
  },
});

const Dot = styled('button', {
  position: 'relative',
  borderRadius: '100%',
  border: `1px solid ${vars.$scale.color.gray900}`,
  width: rem(12),
  height: rem(12),
  padding: 0,
  background: vars.$semantic.color.paperDefault,
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
        background: vars.$scale.color.gray900,
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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: _ => {
      setSlide(slide => Math.min(slide + 1, items.length - 1));
    },
    onSwipedRight: _ => {
      setSlide(slide => Math.max(slide - 1, 0));
    },
  });

  return (
    <Container className={className}>
      <LeftArrowButton
        direction="left"
        viewport={{ '@initial': 'initial', '@xxl': 'xxl' }}
        hide={slide === 0}
        onClick={() => setSlide(slide => Math.max(~~(slide / 2) * 2 - 2, 0))}
      >
        <ArrowButtonIcon />
      </LeftArrowButton>
      <SlideCamera {...swipeHandlers}>
        <Slide css={{ '$$slide': slide }}>
          {items.map((item, i) => (
            <CarouselItem
              key={i}
              item={item!}
            />
          ))}
        </Slide>
      </SlideCamera>
      <RightArrowButton
        direction="right"
        viewport={{ '@initial': 'initial', '@xxl': 'xxl' }}
        hide={slide === items.length - 2}
        onClick={() => setSlide(slide => Math.min(~~(slide / 2) * 2 + 2, items.length - 1))}
      >
        <ArrowButtonIcon />
      </RightArrowButton>
      <Dots>
        {items.map((_item, i) => (
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
