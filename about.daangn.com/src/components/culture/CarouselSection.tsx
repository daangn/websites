import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbyImage } from 'gatsby-plugin-image';
import { rem } from 'polished';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { SimpleReveal } from 'simple-reveal';

import { ReactComponent as ArrowLeft } from '../../assets/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow_right.svg';

type ArrowProps = {
  clickHandler: () => void;
  hasPrev: boolean;
};

type CarouselProps = {
  slice: GatsbyTypes.Carousel;
};

const PrevArrow: React.FC<ArrowProps> = (clickHandler, hasPrev) =>
  hasPrev && (
    <PrevArrowWapper onClick={clickHandler}>
      <ArrowLeft />
    </PrevArrowWapper>
  );

const NextArrow: React.FC<ArrowProps> = (clickHandler, hasNext) =>
  hasNext && (
    <NextArrowWapper onClick={clickHandler}>
      <ArrowRight />
    </NextArrowWapper>
  );

const CarouselSection: React.FC<CarouselProps> = ({ slice }) => {
  return (
    <Container>
      <SimpleReveal
        render={({ ref, cn, style }) => (
          <CarouselSectionTitle ref={ref} className={cn()} style={style}>
            {slice.primary.carousel_section_title}
          </CarouselSectionTitle>
        )}
        duration={1000}
        delay={200}
        initialTransform="translateY(2rem)"
      />
      <CarouselWrapper>
        <Carousel
          infiniteLoop={true}
          // autoPlay={true}
          // interval={4000}
          showArrows={true}
          showIndicators={false}
          renderArrowPrev={PrevArrow}
          renderArrowNext={NextArrow}
          swipeable={true}
          showStatus={false}
        >
          {slice.items.map((item) => (
            <Card key={item?.carousel_card_title}>
              <ImageWrapper>
                <CarouselImage
                  image={item.carousel_card_image?.localFile?.childImageSharp?.gatsbyImageData}
                  alt={item.carousel_card_image?.alt ?? ''}
                />
              </ImageWrapper>
              <CarouselTitle>{item.carousel_card_title}</CarouselTitle>
              <CarouselDescription
                dangerouslySetInnerHTML={{
                  __html: item.carousel_card_description?.html || '',
                }}
              />
            </Card>
          ))}
        </Carousel>
      </CarouselWrapper>
    </Container>
  );
};

const ArrowWapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '26%',
  width: rem(44),
  height: rem(44),
  fontSize: '2em',
  cursor: 'pointer',
  zIndex: 2,
  borderRadius: '50%',
  textAlign: 'center',
  backgroundColor: 'none',

  '@sm': {
    top: '35%',
  },

  '@md': {
    top: '38%',
    // width: rem(44),
    // height: rem(44),
  },
});

const PrevArrowWapper = styled(ArrowWapper, {
  left: 20,

  '@sm': {
    left: 30,
  },

  '@md': {
    left: 50,
  },
});

const NextArrowWapper = styled(ArrowWapper, {
  right: 20,

  '@sm': {
    right: 30,
  },

  '@md': {
    right: 50,
  },
});

const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  overflow: 'hidden',

  '@md': {
    padding: `${rem(40)} 0`,
  },
});

const CarouselSectionTitle = styled('h2', {
  maxWidth: rem(240),
  marginBottom: rem(48),
  padding: `0 ${rem(16)}`,
  textAlign: 'center',
  fontSize: vars.$scale.dimension.fontSize600,

  '@md': {
    marginBottom: rem(80),
    maxWidth: rem(400),
    fontSize: vars.$scale.dimension.fontSize900,
  },
});

const CarouselWrapper = styled('div', {
  width: '100%',
  maxWidth: rem(900),
  position: 'relative',
});

const Card = styled('div', {
  width: '100%',
  color: vars.$scale.color.gray600,
});

const ImageWrapper = styled('div', {
  width: '100%',
  aspectRatio: '16 / 9',
  overflow: 'hidden',
  marginBottom: rem(44),
});

const CarouselImage = styled(GatsbyImage, {
  width: '100%',
  opacity: 0.99,
  objectFit: 'cover',
  borderRadius: rem(0),

  '@md': {
    borderRadius: rem(30),
  },
});

const CarouselTitle = styled('h3', {
  color: vars.$scale.color.gray900,
  fontSize: vars.$scale.dimension.fontSize400,

  '@md': {
    fontSize: vars.$scale.dimension.fontSize600,
  },
});

const CarouselDescription = styled('div', {
  lineHeight: '150%',
  marginTop: rem(8),
  fontSize: vars.$scale.dimension.fontSize150,

  '@md': {
    fontSize: vars.$scale.dimension.fontSize200,
  },
});

export default CarouselSection;
