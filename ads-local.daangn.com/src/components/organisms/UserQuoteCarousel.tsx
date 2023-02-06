import * as React from "react";
import { useSwipeable } from "react-swipeable";
import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from "@seed-design/design-token";

import { ArrowLink } from "~/components/molecules/ArrowLink";
import tensoba from "~/image/tensoba.jpg";
import promiseBycicle from "~/image/promise_bycicle.jpg";
import jjinijjini from "~/image/jjinijjini.jpg";
import tensoba_m from "~/image/tensoba_m.jpg";
import promiseBycicle_m from "~/image/promise_bycicle_m.jpg";
import jjinijjini_m from "~/image/jjinijjini_m.jpg";

type SlideItemProps = {
  picture: any;
  talk: string[];
  story: string;
  link: string;
  id: string;
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
      id: "Success Story_A",
    },
    {
      picture: promiseBycicle,
      talk: [
        "가게 위치가 숨어있는 편인데",
        "당근마켓 광고 이후에",
        "연매출 50%, 정기 회원수는 6배나 늘었어요.",
      ],
      story: "자전거 대여점 ‘약속의 자전거' 사장님 이야기 ",
      link: "https://www.youtube.com/watch?v=iqDcidk3MbY",
      id: "Success Story_B",
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
      id: "Success Story_C",
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
      id: "Success Story_A",
    },
    {
      picture: promiseBycicle_m,
      talk: [
        "동네 이웃들이 많이 사용하는 앱 답게,광고 효과가 확실해요. 1년 사이, 정기 회원수가 6배나 늘었어요.",
      ],
      story: "자전거 대여점 ‘약속의 자전거' 사장님 이야기 ",
      link: "https://www.youtube.com/watch?v=iqDcidk3MbY",
      id: "Success Story_B",
    },
    {
      picture: jjinijjini_m,
      talk: [
        "당근마켓 광고는 정말 쉬운게 장점이에요. 부모님이 재배한 사과를 중고거래하듯 올렸는데, 바로 주문이 들어와서 신기했어요.",
      ],
      story: "농수산물 '찌니찌니' 사장님 이야기",
      link: "https://www.youtube.com/watch?v=si4DM8_PxSk",
      id: "Success Story_C",
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
                <CarouselItemWrapperDesktop
                  css={{
                    backgroundImage: `url(${item.picture})`,
                    backgroundSize: "cover",

                    "@md": {
                      backgroundPosition: "center 50%",
                    },
                  }}
                >
                  <QuoteContainer>
                    <div>
                      {item.talk.map((str, idx) => {
                        return <Quote key={idx}>{str}</Quote>;
                      })}
                      <ByRow>
                        <a
                          href={item.link}
                          style={{ textDecoration: "none" }}
                          target="_blank"
                        >
                          <By>{item.story}</By>
                        </a>
                        <div style={{ marginLeft: rem(8) }}>
                          <ArrowLink
                            target={item.link}
                            color={"white"}
                            id={item.id}
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
                <CarouselItemWrapperMobile
                  css={{
                    backgroundImage: `url(${item.picture})`,
                    backgroundSize: "cover",
                  }}
                >
                  <QuoteContainer>
                    <Quote>{item.talk[0]}</Quote>
                    <ByRow>
                      <By>{item.story}</By>
                      <div style={{ marginLeft: rem(8) }}>
                        <ArrowLink target={item.link} color={"white"} />
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
          <Dot
            aria-label={`carousel button index ${i + 1}`}
            key={i}
            active={slide === i}
            onClick={() => setSlide(i)}
          />
        ))}
      </Dots>
    </Container>
  );
};

const Container = styled("div", {
  position: "relative",
  contentArea: true,
  boxSizing: "border-box",
  display: "grid",
  maxWidth: "100vw",
  paddingX: 0,
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

const CarouselItemWrapperMobile = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  height: rem(500),
  paddingBottom: rem(76),
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

const QuoteContainer = styled("div", {
  position: "absolute",
  display: "grid",
  // marginBottom: rem(76),
  width: "100%",
  "@md": {
    position: "absolute",
    width: "40%",
    // marginBottom: 0,
    // top: "50%"
  },
});

const Quote = styled("p", {
  typography: "$subtitle4",
  lineHeight: rem(28),
  fontWeight: "bold",
  color: vars.$static.color.staticWhite,
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
  },
});

const ByRow = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: rem(14),

  "@md": {
    marginTop: rem(24),
  },
});

const By = styled("p", {
  typography: "$body3",
  color: vars.$static.color.staticWhite,
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
  border: `1px solid ${vars.$static.color.staticWhite}`,
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
        background: vars.$static.color.staticWhite,
      },
    },
  },
});
