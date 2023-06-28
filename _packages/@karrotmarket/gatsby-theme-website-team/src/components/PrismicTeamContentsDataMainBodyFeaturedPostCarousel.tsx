import * as React from 'react';
import { useSwipeable } from 'react-swipeable';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';
import SeedIcon from '@karrotmarket/gatsby-theme-seed-design/src/Icon';

import FeaturedPost from './PrismicTeamContentsDataMainBodyFeaturedPostCarousel/FeaturedPost';
import _ArrowButton from './PrismicTeamContentsDataMainBodyFeaturedPostCarousel/ArrowButton';

type PrismicTeamContentsDataMainBodyMemberQuoteCarouselProps = {
  data: GatsbyTypes.PrismicTeamContentsDataMainBodyMemberQuoteCarousel_dataFragment;
  className?: string;
};

export const query = graphql`
  fragment PrismicTeamContentsDataMainBodyFeaturedPostCarousel_data on PrismicTeamContentsDataMainBodyFeaturedPostCarousel {
    id
    slice_type
    items {
      ...TeamWebsite_FeaturedPostProps_item
    }
  }
`;

const TextContainer = styled('section', {
  contentArea: true,
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: `${rem(24)} 0`,
  alignItems: 'center',
  marginBottom: rem(-40),
  textAlign: 'center',

  '@md': {
    marginBottom: rem(-60),
  },
});

const KeyText = styled('span', {
  typography: '$body2',
  fontWeight: 'bold',

  '@md': {
    typography: '$subtitle3',
  },
});

const Title = styled('h2', {
  whiteSpace: 'pre-line',
  typography: '$subtitle2',
  maxWidth: rem(250),

  '@md': {
    typography: '$heading4',
    maxWidth: rem(700),
  },
});

const Summary = styled('p', {
  maxWidth: rem(300),
  color: vars.$scale.color.gray700,
  typography: '$body2',
  lineHeight: '150%',

  '@md': {
    typography: '$body1',
    maxWidth: rem(500),
  },
});

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
  $$width: rem(560),
  $$gap: rem(40),

  display: 'flex',
  gap: '$$gap',
  transition: 'transform 0.3s ease-in-out',
  borderRadius: rem(30),
  margin: `0 ${rem(12)}`,

  transform: 'translateX(calc(-100% * $$slide - $$gap * $$slide))',
  '@lg': {
    transform:
      'translateX(max(calc(-1 * ($$width + $$gap)) * $$slide, calc(-50% * $$slide - $$gap / 2 * $$slide)))',
  },

  '& > *': {
    flexShrink: 0,
    width: '100%',
    '@lg': {
      maxWidth: 'min($$width, calc(50% - $$gap / 2))',
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
  transform: 'scaleX(-1)',
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

const PrismicTeamContentsDataMainBodyFeaturedPostCarousel: React.FC<
  PrismicTeamContentsDataMainBodyMemberQuoteCarouselProps
> = ({ data, className }) => {
  const items = data.items || [];
  const [slide, setSlide] = React.useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: (_) => {
      setSlide((slide) => Math.min(slide + 1, items.length - 1));
    },
    onSwipedRight: (_) => {
      setSlide((slide) => Math.max(slide - 1, 0));
    },
  });

  return (
    <>
      <TextContainer>
        <KeyText>당근이 일하는 방식</KeyText>
        <Title>사용자 가치를 가장 중요하게 생각해요</Title>
        <Summary>
          좋은 서비스에 대한 답은 항상 사용자에게 있어요. 오래 고민하는 대신 빠르게 실험하며 사용자를 위한 서비스를 만들어요.
        </Summary>
      </TextContainer>
      <Container className={className}>
        <LeftArrowButton
          viewport={{ '@initial': 'initial', '@xxl': 'xxl' }}
          hide={slide === 0}
          onClick={() => setSlide((slide) => Math.max(~~(slide / 2) * 2 - 2, 0))}
        >
          <SeedIcon name="icon_chevron_right_regular" />
        </LeftArrowButton>
        <SlideCamera {...swipeHandlers}>
          <Slide css={{ $$slide: slide }}>
            {items.map((item, i) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              // rome-ignore lint/style/noNonNullAssertion: intentional
              <FeaturedPost key={i} item={item!} />
            ))}
          </Slide>
        </SlideCamera>
        <RightArrowButton
          viewport={{ '@initial': 'initial', '@xxl': 'xxl' }}
          hide={slide === items.length - 2}
          onClick={() => setSlide((slide) => Math.min(~~(slide / 2) * 2 + 2, items.length - 1))}
        >
          <SeedIcon name="icon_chevron_right_regular" />
        </RightArrowButton>
        <Dots>
          {items.map((_item, i) => (
            // rome-ignore lint/suspicious/noArrayIndexKey: intentional
            <Dot key={i} active={slide === i} onClick={() => setSlide(i)} />
          ))}
        </Dots>
      </Container>
    </>
  );
};

export default PrismicTeamContentsDataMainBodyFeaturedPostCarousel;
