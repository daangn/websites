import * as React from "react";
import { styled } from "gatsby-theme-stitches/src/stitches.config";
import { ArrowLink } from "~/components/molecules/ArrowLink";
import { rem } from "polished";
import chevronIconUrl from "~/image/chevron.svg";

export const LearnMore = () => {
  const handleClick = (href: string) => {
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
          <DocsLink
            onClick={() =>
              handleClick(
                "https://drive.google.com/file/d/1MvIP-QqJzVdRY7nkKn08wMryet6aMJg9/view"
              )
            }
          >
            <p>지역광고 소개서</p>
            <ArrowLink target="https://drive.google.com/file/d/1MvIP-QqJzVdRY7nkKn08wMryet6aMJg9/view" />
          </DocsLink>
          <DocsLink
            onClick={() => {
              handleClick(
                "https://www.notion.so/daangn/86a4348d469846728378036321255052"
              );
            }}
          >
            <p>지역광고 만들기 가이드</p>
            <ArrowLink
              target="https://www.notion.so/daangn/86a4348d469846728378036321255052"
            />
          </DocsLink>
        </Item>
        <Item right>
          <FaqItem>
            <p
              onClick={() =>
                handleClick(
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
                handleClick(
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
                handleClick(
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
  cursor: "pointer",
  p: {
    marginRight: 8,
    fontSize: rem(16),
    "@md": {
      fontSize: rem(18),
    },
  },
  "&:hover": {
    opacity: "64%",
  },

  "@lg": {
    justifyContent: "left",
  },
});

const LearnMoreTitle = styled("p", {
  typography: "$subtitle2",
  fontWeight: "bold",
  textAlign: "center",

  "@lg": {
    typography: "$subtitle1",
    textAlign: "left",
  },
});

const Item = styled("div", {
  marginBottom: rem(60),

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
  alignItems: "center",
  paddingY: rem(27),
  borderBottom: "1px solid #EAEBEE",
  p: {
    fontSize: "$body2",
    cursor: "pointer",
  },
  "&:hover": {
    opacity: "64%",
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
