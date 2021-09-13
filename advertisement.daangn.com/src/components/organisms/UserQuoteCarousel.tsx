import React from "react";
import { styled } from "~/gatsby-theme-stitches/stitches.config";
import { rem } from "polished";
import { useSwipeable } from "react-swipeable";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ArrowLink } from "~/components/molecules/ArrowLink";
import { graphql, useStaticQuery } from "gatsby";

type SlideItemProps = {
  picture: any;
  talk: string[];
  story: string;
  link: string;
};

export const UserQuoteCarousel: React.FC = () => {
  const [slide, setSlide] = React.useState<number>(0);

  const carouselImage = useStaticQuery<GatsbyTypes.CarouselImageQuery>(graphql`
    query CarouselImage {
      tensoba: file(relativePath: { eq: "tensoba.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, formats: [AUTO, AVIF, WEBP])
        }
      }
      meltingDog: file(relativePath: { eq: "meltingDog.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, formats: [AUTO, AVIF, WEBP])
        }
      }
      jjinijjinni: file(relativePath: { eq: "jjinijjini.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, formats: [AUTO, AVIF, WEBP])
        }
      }
      tensoba_m: file(relativePath: { eq: "tensoba_m.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, formats: [AUTO, AVIF, WEBP])
        }
      }
      meltingDog_m: file(relativePath: { eq: "meltingDog_m.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, formats: [AUTO, AVIF, WEBP])
        }
      }
      jjinijjinni_m: file(relativePath: { eq: "jjinijjini_m.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, formats: [AUTO, AVIF, WEBP])
        }
      }
    }
  `);

  const items: SlideItemProps[] = [
    {
      picture: carouselImage?.tensoba?.childImageSharp?.gatsbyImageData,
      talk: [
        "당근마켓 광고는 반응이 정말 빨라요.",
        "광고 시작한지 하루만에",
        "가게 근처 학원 학생들이 방문했어요.",
      ],
      story: "음식점 '텐소바' 사장님 이야기",
      link: "https://www.youtube.com/watch?v=agdA0fMZ7u4",
    },
    {
      picture: carouselImage.meltingDog?.childImageSharp?.gatsbyImageData,
      talk: [
        "광고할 동네를 지정할 수 있어서 좋아요.",
        "가게에 직접 올 만한 가까운 동네에",
        "광고하니까 효과가 좋더라고요.",
      ],
      story: "애견유치원  '멜팅독' 사장님 이야기",
      link: "https://www.youtube.com/watch?v=NLO0GJ3Yft8",
    },
    {
      picture: carouselImage?.jjinijjinni?.childImageSharp?.gatsbyImageData,
      talk: [
        "당근마켓 광고는 정말 쉬운게 장점이에요.",
        "부모님이 재배한 사과를 중고거래하듯 올렸는데,",
        "바로 주문이 들어와서 신기했어요.",
      ],
      story: "농수산물 '찌니찌니' 사장님 이야기",
      link: "https://www.youtube.com/watch?v=si4DM8_PxSk",
    },
  ];

  const itemsMobile: SlideItemProps[] = [
    {
      picture: carouselImage?.tensoba_m?.childImageSharp?.gatsbyImageData,
      talk: [
        "당근마켓 광고는 반응이 정말 빨라요. 광고 시작한지 하루만에 가게 근처 학원 학생들이 방문했어요.",
      ],
      story: "음식점 '텐소바' 사장님 이야기",
      link: "https://www.youtube.com/watch?v=agdA0fMZ7u4",
    },
    {
      picture: carouselImage.meltingDog_m?.childImageSharp?.gatsbyImageData,
      talk: [
        "광고할 동네를 지정할 수 있어서 좋아요. 가게에 직접 올 만한 가까운 동네에 광고하니까 효과가 좋더라고요.",
      ],
      story: "애견유치원  '멜팅독' 사장님 이야기",
      link: "https://www.youtube.com/watch?v=NLO0GJ3Yft8",
    },
    {
      picture: carouselImage?.jjinijjinni_m?.childImageSharp?.gatsbyImageData,
      talk: [
        "당근마켓 광고는 정말 쉬운게 장점이에요. 부모님이 재배한 사과를 중고거래하듯 올렸는데, 바로 주문이 들어와서 신기했어요.",
      ],
      story: "농수산물 '찌니찌니' 사장님 이야기",
      link: "https://www.youtube.com/watch?v=si4DM8_PxSk",
    },
  ];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: (_) => {
      setSlide((prev) => Math.min(prev + 1, items.length - 1));
    },
    onSwipedRight: (_) => {
      setSlide((prev) => Math.max(prev - 1, 0));
    },
    trackMouse: true,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (slide < 2) {
        setSlide(slide + 1);
      } else {
        setSlide(0);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <Container {...swipeHandlers}>
      <SlideCamera>
        <Slide
          css={{
            $$slide: slide,
            display: "none",
            "@md": { display: "flex" },
          }}
        >
          {items.map((item, index) => {
            const loadedImg = getImage(item.picture);
            return (
              <div key={index}>
                <CarouselItemWrapperDesktop>
                  <ImageContainer>
                    <GatsbyImage alt="" image={loadedImg!} />
                  </ImageContainer>
                  <QuoteContainer>
                    <div>
                      {item.talk.map((str, idx) => {
                        return <Quote key={idx}>{str}</Quote>;
                      })}

                      <ByRow>
                        <By>{item.story}</By>
                        <div style={{ marginLeft: rem(8) }}>
                          <ArrowLink
                            target={item.link}
                            color={"white"}
                          />
                        </div>
                      </ByRow>
                    </div>
                  </QuoteContainer>
                </CarouselItemWrapperDesktop>
              </div>
            );
          })}
        </Slide>
        <Slide
          css={{
            $$slide: slide,
            display: "flex",
            alignItems: "center",
            "@md": { display: "none" },
          }}
        >
          {itemsMobile.map((item, index) => {
            return (
              <div key={index}>
                <CarouselItemWrapperMobile>
                  <ImageContainer>
                    <GatsbyImage alt={""} image={item.picture} />
                  </ImageContainer>
                  <QuoteContainer>
                    <Quote>{item.talk[0]}</Quote>
                    <ByRow>
                      <By>{item.story}</By>
                      <div style={{ marginLeft: rem(8) }}>
                        <ArrowLink
                          target={item.link}
                          color={"white"}
                        />
                      </div>
                    </ByRow>
                  </QuoteContainer>
                </CarouselItemWrapperMobile>
              </div>
            );
          })}
        </Slide>
      </SlideCamera>
      <Dots>
        {items.map((_, i) => (
          <Dot key={i} active={slide === i} onClick={() => setSlide(i)} />
        ))}
      </Dots>
    </Container>
  );
};

const Container = styled("section", {
  position: "relative",
  contentArea: true,
  width: "100%",
  boxSizing: "border-box",
  display: "grid",
});

const SlideCamera = styled("div", {
  overflowX: "hidden",
});

const Slide = styled("div", {
  flexDirection: "row",
  alignItems: "center",
  // width: "100vw",
  transition: "transform 0.3s ease-in-out",
  transform: `translateX(calc(-100% * $$slide))`,

  "& > *": {
    flexShrink: 0,
    width: "100%",
  },
});

const CarouselItemWrapperMobile = styled("article", {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  "@md": {
    display: "none",
  },
});

const CarouselItemWrapperDesktop = styled("div", {
  display: "none",

  "@md": {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

const ImageContainer = styled("div", {
  display: "grid",
  position: "relative",
});

const QuoteContainer = styled("div", {
  position: "absolute",
  display: "grid",
  marginBottom: rem(76),
  width: "100%",
  "@md": {
    position: "absolute",
    width: "40%",
    marginBottom: 0,
  },
});

const Quote = styled("p", {
  typography: "$subtitle",
  fontWeight: "bold",
  color: "$white",
  paddingX: rem(24),
  "@md": {
    typography: "$subtitle2",
    paddingX: 0,
  },
});

const ByRow = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: rem(24),
});

const By = styled("p", {
  typography: "$body3",
  color: "$white",
  paddingLeft: rem(24),
  "@md": {
    typography: "$body1",
    paddingLeft: 0,
    // marginTop: rem(24),
    color: "$white",
  },
});

const Dots = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: rem(32),
  marginTop: rem(-32),
  // '@lg': {
  //   '& > :nth-child(2n)': {
  //     display: 'none',
  //   },
  // },
});

const Dot = styled("button", {
  position: "relative",
  borderRadius: "100%",
  border: "1px solid $white",
  width: rem(12),
  height: rem(12),
  padding: 0,
  background: "transparent",
  cursor: "pointer",

  "&::after": {
    content: "",
    position: "absolute",
    left: "-10px",
    right: "-10px",
    top: "-10px",
    bottom: "-10px",
  },

  variants: {
    active: {
      true: {
        background: "$white",
      },
    },
  },
});
