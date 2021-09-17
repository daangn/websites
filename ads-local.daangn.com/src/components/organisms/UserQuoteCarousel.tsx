import React from "react";
import { styled } from "~/gatsby-theme-stitches/stitches.config";
import { rem } from "polished";
import { useSwipeable } from "react-swipeable";
import { ArrowLink } from "~/components/molecules/ArrowLink";

import tensoba from "~/image/tensoba.jpg"
import meltingDog from "~/image/meltingDog.jpg"
import jjinijjini from "~/image/jjinijjini.jpg"

import tensoba_m from "~/image/tensoba_m.png"
import meltingDog_m from "~/image/meltingDog_m.png"
import jjinijjini_m from "~/image/jjinijjini_m.png"

type SlideItemProps = {
  picture: any;
  talk: string[];
  story: string;
  link: string;
};

export const UserQuoteCarousel: React.FC = () => {
  const [slide, setSlide] = React.useState<number>(0);

  const items: SlideItemProps[] = [
    {
      picture: tensoba,
      talk: [
        "당근마켓 광고는 반응이 정말 빨라요.",
        "광고 시작한지 하루만에",
        "가게 근처 학원 학생들이 방문했어요.",
      ],
      story: "음식점 '텐소바' 사장님 이야기",
      link: "https://www.youtube.com/watch?v=agdA0fMZ7u4",
    },
    {
      picture: meltingDog,
      talk: [
        "광고할 동네를 지정할 수 있어서 좋아요.",
        "가게에 직접 올 만한 가까운 동네에",
        "광고하니까 효과가 좋더라고요.",
      ],
      story: "애견유치원  '멜팅독' 사장님 이야기",
      link: "https://www.youtube.com/watch?v=NLO0GJ3Yft8",
    },
    {
      picture: jjinijjini,
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
      picture: tensoba_m,
      talk: [
        "당근마켓 광고는 반응이 정말 빨라요. 광고 시작한지 하루만에 가게 근처 학원 학생들이 방문했어요.",
      ],
      story: "음식점 '텐소바' 사장님 이야기",
      link: "https://www.youtube.com/watch?v=agdA0fMZ7u4",
    },
    {
      picture: meltingDog_m,
      talk: [
        "광고할 동네를 지정할 수 있어서 좋아요. 가게에 직접 올 만한 가까운 동네에 광고하니까 효과가 좋더라고요.",
      ],
      story: "애견유치원  '멜팅독' 사장님 이야기",
      link: "https://www.youtube.com/watch?v=NLO0GJ3Yft8",
    },
    {
      picture: jjinijjini_m,
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
            return (
              <div key={index}>
                <CarouselItemWrapperDesktop css={{
                    backgroundImage: `url(${item.picture})`,
                    backgroundSize: "cover",
                    
                    "@md": {
                      backgroundPosition: "center 50%",
                    }
                  }}>
                  <QuoteContainer>
                    <div>
                      {item.talk.map((str, idx) => {
                        return <Quote key={idx}>{str}</Quote>;
                      })}
                      <ByRow>
                        <a href={item.link} style={{textDecoration: 'none'}} target="_blank">
                          <By>{item.story}</By>
                        </a>
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
                <CarouselItemWrapperMobile css={{
                  backgroundImage: `url(${item.picture})`,
                  backgroundSize: "cover",
                }}>
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
  display: "flex",
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
  height: rem(500),
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
    height: rem(500),
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
    // top: "50%"
  },
});

const Quote = styled("p", {
  typography: "$subtitle4",
  lineHeight: rem(28),
  fontWeight: "bold",
  color: "$white",
  paddingX: rem(24),
  "@md": {
    typography: "$subtitle3",
    lineHeight: rem(34),
    paddingX: 0,
  },

  
  "@xl": {
    typography: "$subtitle2",
    lineHeight: rem(39),
    paddingX: 0,
  }

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
    typography: "$body2",
    paddingLeft: 0,
    marginTop: rem(2),
  },

  "@xl": {
    typography: "$body1",
    paddingLeft: 0,
    marginTop: rem(2),
    color: "$white",
  },
});

const Dots = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: rem(24),
  position: "absolute",
  width: "100%",
  bottom: rem(32),
  

  // marginTop: rem(-32),
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
  width: rem(10),
  height: rem(10),
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
