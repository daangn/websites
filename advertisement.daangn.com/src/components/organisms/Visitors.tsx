import React, { ChangeEvent } from "react";
import { styled } from "gatsby-theme-stitches/src/stitches.config";
import { rem } from "polished";
import TextLoop from "react-text-loop";

export const Visitors = () => {
  return (
    <Wrapper>
      <Container>
        <TextContainer>
          <span>
            <TextLoop interval={3000}>
              <Region>서울 강남구 역삼동</Region>
              <Region>제주도 노형동</Region>
              <Region>천안시 불당동</Region>
              <Region>고양시 일산서구 대화동</Region>
              <Region>부산시 해운대구 좌동</Region>
            </TextLoop>
            <p>&nbsp;근처&nbsp;</p>
          </span>
          <span>
            <TextLoop interval={3000}>
              <ColoredText>38,358명</ColoredText>
              <ColoredText>20,717명</ColoredText>
              <ColoredText>26,949명</ColoredText>
              <ColoredText>17,019명</ColoredText>
              <ColoredText>13,427명</ColoredText>
            </TextLoop>
            <p>이 매주&nbsp;</p>
          </span>
          <p>당근마켓을 방문하고 있어요.</p>
        </TextContainer>
        <TextContainer end>
          <Caption>2021.07 기준</Caption>
        </TextContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: rem(200),
  backgroundColor: "$white",
});

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const TextContainer = styled("div", {
  display: "grid",
  gridTemplateRows: "repeat(4, auto)",
  justifyItems: "center",
  alignItems: "center",
  variants: {
    end: {
      true: {
        alignSelf: "center",
        "@md": {
          alignSelf: "flex-end",
        },
      },
    },
  },
  "@md": {
    gridTemplateColumns: "repeat(4, auto)",
    gridTemplateRows: "auto auto",
  },
  p: {
    display: "inline",
    fontWeight: "bold",
    fontSize: "$subtitle3",
    "@md": {
      fontSize: "$subtitle2",
    },
    paddingBottom: rem(8),
  },
  span: {
    paddingBottom: rem(8),
  },
});

const Region = styled("p", {
  fontSize: "$subtitle3",
  fontWeight: "bold",
});

const ColoredText = styled("p", {
  fontSize: "$subtitle2",
  paddingTop: rem(5),
  paddingBottom: rem(5),
  color: "$carrot500",
  fontWeight: "bold",
});

const Caption = styled("div", {
  fontSize: "$caption3",

  "@md": {
    fontSize: "$caption2",
  },
  color: "#ADB1BA",
});
