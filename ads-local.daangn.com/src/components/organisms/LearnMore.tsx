import * as React from "react";
import { styled } from "~/gatsby-theme-stitches/config";
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
            <ArrowLink target="https://drive.google.com/file/d/1RIlN6N0La2LelBK-i_aSioxFjP8bnv0t/view" />
          </DocsLink>
          <DocsLink
            onClick={() => {
              handleClick(
                "https://daangnbiz.oopy.io/86a4348d-4698-4672-8378-036321255052"
              );
            }}
          >
            <p>지역광고 만들기 가이드</p>
            <ArrowLink target="https://daangnbiz.oopy.io/86a4348d-4698-4672-8378-036321255052" />
          </DocsLink>
        </Item>
        <Item right>
          <FaqItem
            onClick={() => handleClick("https://www.daangn.com/wv/faqs/149")}
          >
            <p>지역광고는 어떻게 만드나요?</p>
            <ChevronRight src={chevronIconUrl} alt="댱근마켓 지역광고 가이드" />
          </FaqItem>
          <FaqItem
            onClick={() => handleClick("https://www.daangn.com/wv/faqs/159")}
          >
            <p>지역광고는 비용은 얼마인가요?</p>
            <ChevronRight src={chevronIconUrl} alt="당근마켓 지역광고 가이드" />
          </FaqItem>
          <FaqItem
            onClick={() => handleClick("https://www.daangn.com/wv/faqs/156")}
          >
            <p>지역광고는 어디에 노출되나요?</p>
            <ChevronRight src={chevronIconUrl} alt="당근마켓 지역광고 가이드" />
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
  maxWidth: 1160,
  "@md": {
    gridTemplateRows: "auto",
    gridTemplateColumns: "1fr 2fr",
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

  "@md": {
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

  "@md": {
    justifyContent: "left",
  },
});

const LearnMoreTitle = styled("p", {
  typography: "$subtitle2",
  fontWeight: "bold",
  textAlign: "center",

  "@md": {
    typography: "$subtitle1",
    textAlign: "left",
  },
});

const Item = styled("div", {
  marginBottom: rem(60),

  "@md": {
    marginBottom: 0,
  },

  variants: {
    left: {
      true: {
        display: "flex",
        flexDirection: "column",
        "@md": {
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
  },
  "&:hover": {
    opacity: "64%",
    cursor: "pointer",
  },

  "@md": {
    justifyContent: "space-between",
    paddingY: rem(32),
    p: {
      fontSize: "$subtitle3",
    },
  },
});

const ChevronRight = styled("img", {
  color: "$gray500",
  // width: rem(24),
  // height: rem(24),

  // variants: {
  //   rotate: {
  //     true: {
  //       transform: "rotate(270deg)",
  //     },
  //   },
  // },
});
