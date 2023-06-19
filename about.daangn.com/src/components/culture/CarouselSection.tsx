import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbyImage } from 'gatsby-plugin-image';
import { rem } from 'polished';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import SeedIcon from '@karrotmarket/gatsby-theme-seed-design/src/Icon';

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
      <SeedIcon name="icon_chevron_left_fill" size="24px" />
    </PrevArrowWapper>
  );

const NextArrow: React.FC<ArrowProps> = (clickHandler, hasNext) =>
  hasNext && (
    <NextArrowWapper onClick={clickHandler}>
      <SeedIcon name="icon_chevron_right_fill" size="24px" />
    </NextArrowWapper>
  );

const CarouselSection: React.FC<CarouselProps> = ({ slice }) => {
  const [centerMode, setCenterMode] = React.useState(false);
  // const swiper = new Swiper('.swiper', {
  //   // configure Swiper to use modules
  //   modules: [Navigation, Pagination],
  // });

  React.useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth <= 1062;
      setCenterMode(!isMobileScreen);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [centerMode]);

  return (
    <Container>
      <CarouselSectionTitle>{slice.primary.carousel_section_title}</CarouselSectionTitle>
      <CarouselWrapper>
        <Carousel
          centerMode={centerMode}
          centerSlidePercentage={65}
          infiniteLoop={true}
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
      {/* <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        <div className="swiper-pagination" />
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div> */}
    </Container>
  );
};

const ArrowWapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '40%',
  width: rem(24),
  height: rem(24),
  padding: rem(20),
  color: 'darkgray',
  fontSize: '2em',
  cursor: 'pointer',
  zIndex: 2,
  borderRadius: '50%',
  textAlign: 'center',
  backgroundColor: 'none',

  '@md': {
    top: '45%',
    backgroundColor: vars.$scale.color.gray00,
  },
});

const PrevArrowWapper = styled(ArrowWapper, {
  left: 10,
});

const NextArrowWapper = styled(ArrowWapper, {
  right: 10,
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
  marginBottom: rem(48),
  padding: `0 ${rem(16)}`,
  textAlign: 'center',
  fontSize: vars.$scale.dimension.fontSize600,

  '@md': {
    fontSize: vars.$scale.dimension.fontSize900,
  },
});

const CarouselWrapper = styled('div', {
  width: '100%',
  height: 'auto',
});

const Card = styled('div', {
  width: '100%',
  color: vars.$scale.color.gray600,
});

const ImageWrapper = styled('div', {
  width: '100%',
  // aspectRatio: '16 / 9',
  // borderRadius: rem(60),
  overflow: 'hidden',
  padding: `${rem(20)} ${rem(10)}`,
});

const CarouselImage = styled(GatsbyImage, {
  width: '100%',
  // height: 'auto',
  opacity: 0.99,
  objectFit: 'cover',
  borderRadius: rem(30),

  '@md': {
    borderRadius: rem(60),
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
