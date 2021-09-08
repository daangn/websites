import * as React from "react";
import { styled } from "gatsby-theme-stitches/src/stitches.config";
import { ArrowLink } from "~/components/molecules/ArrowLink";
import { rem } from "polished";
import chevronIconUrl from "~/image/chevron.svg";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { gtag as GA } from "~/components/molecules/gtag";

export const LearnMore = () => {
  const handleFaqClick = (gtag: string[], href: string) => {
    GA(gtag[0], gtag[1]);
    window.open(href, "_blank");
  };

  return (
    <Wrapper>
      <Container>
        <Item left>
          <DocsWrapper>
            <LearnMoreTitle>당근마켓 지역광고</LearnMoreTitle>
            <LearnMoreTitle>더 알아보기</LearnMoreTitle>
          </DocsWrapper>
          <DocsLink>
            <p>지역광고 소개서</p>
            <ArrowLink
              target="https://drive.google.com/drive/u/1/folders/13AkcMwom4aLQBsJ7mhHyaEglj6rSDW1j"
              gtag={["event", "click"]}
            />
          </DocsLink>
          <DocsLink>
            <p>지역광고 만들기 가이드</p>
            <ArrowLink
              target="https://www.notion.so/daangn/86a4348d469846728378036321255052"
              fbPixel={["trackCustom", "Click_guide"]}
              gtag={["event", "click"]}
            />
          </DocsLink>
        </Item>
        <Item right>
          <FaqItem>
            <p
              onClick={() =>
                handleFaqClick(
                  ["event", "click"],
                  "https://www.daangn.com/wv/faqs/149"
                )
              }
            >
              지역광고는 어떻게 만드나요?
            </p>
            <ChevronRight src={chevronIconUrl} alt="" rotate={true} />
          </FaqItem>
          <FaqItem>
            <p
              onClick={() =>
                handleFaqClick(
                  ["event", "click"],
                  "https://www.daangn.com/wv/faqs/159"
                )
              }
            >
              지역광고는 비용은 얼마인가요?
            </p>
            <ChevronRight src={chevronIconUrl} alt="" rotate={true} />
          </FaqItem>
          <FaqItem>
            <p
              onClick={() =>
                handleFaqClick(
                  ["event", "click"],
                  "https://www.daangn.com/wv/faqs/156"
                )
              }
            >
              지역광고는 어디에 노출되나요?
            </p>
            <ChevronRight src={chevronIconUrl} alt="" rotate={true} />
          </FaqItem>
        </Item>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingY: rem(80),
  backgroundColor: "$white",

  "@lg": {
    paddingY: rem(160),
  },
});

const Container = styled("div", {
  // display: "flex",
  // flexDirection: "column",
  // alignItems: 'top',
  // justifyContent: "space-between",

  display: "grid",
  gridTemplateRows: "auto auto",
  width: "80%",
  "@lg": {
    gridTemplateRows: "auto",
    gridTemplateColumns: "1fr 2fr",
    width: "80%",
    // flexDirection: "row"
  },

  // display: "grid",
  // columnGap: rem(96),
  // alignContent: "space-between",
  // // border: '1px solid',
  // "@lg" : {
  //   gridTemplateColumns: 'repeat(2, minmax(400px, auto))',
  // },
});
const DocsWrapper = styled("div", {
  marginBottom: rem(40),

  "@lg": {
    marginBottom: rem(32),
  },
});

const DocsLink = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  typography: "$subtitle4",
  fontWeight: "bold",
  marginY: 10,
  p: {
    marginRight: 8,
  },

  "@lg": {
    justifyContent: "left",
  },
});

const LearnMoreTitle = styled("p", {
  typography: "$subtitle1",
  fontWeight: "bold",
  textAlign: "center",

  "@lg": {
    textAlign: "left",
  },
});

const Item = styled("div", {
  marginBottom: rem(78),

  "@lg": {
    marginBottom: 0,
  },

  variants: {
    left: {
      true: {
        display: "flex",
        flexDirection: "column",
        "@lg": {
          paddingRight: rem(40),
          paddingTop: rem(30),
        },
      },
    },
    right: {
      true: {
        flex: 1,
      },
    },
  },
});

const FaqItem = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingY: rem(27),
  borderBottom: "1px solid #EAEBEE",
  p: {
    fontSize: "$body2",
    cursor: "pointer",
  },

  "@lg": {
    justifyContent: "space-between",
    paddingY: rem(32),
    p: {
      fontSize: "$subtitle2",
    },
  },
});

const ChevronRight = styled("img", {
  color: "$gray500",
  width: rem(24),
  height: rem(24),

  variants: {
    rotate: {
      true: {
        transform: "rotate(270deg)",
      },
    },
  },
});
