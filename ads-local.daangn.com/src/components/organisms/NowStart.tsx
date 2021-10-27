import React from "react";
import { styled } from "~/gatsby-theme-stitches/config";
import { Section } from "~/components/molecules/Section";
import { StaticImage as Picture } from "gatsby-plugin-image";

import { rem } from "polished";

export const NowStart = () => {
  return (
    <Section backgroundColor="$white">
      <Container>
        <GridRow>
          <TitleBig>1분이면 만들 수 있어요</TitleBig>
        </GridRow>
        <ImgRow>
          <ImgContainer>
            <Picture
              src="../../image/img_step_01.png"
              alt="당근마켓 지역광고 STEP1"
              width={240}
              placeholder="none"
            />
            <ImgSubText>
              <StepNumber>01</StepNumber>
              <p>나의 당근 &gt; 지역광고 메뉴에서</p>
            </ImgSubText>
          </ImgContainer>
          <ImgContainer>
            <Picture
              src="../../image/img_step_02.png"
              alt="당근마켓 지역광고 STEP2"
              width={240}
              placeholder="none"
            />
            <ImgSubText>
              <StepNumber>02</StepNumber>
              <p>광고할 계정을 선택하고</p>
            </ImgSubText>
          </ImgContainer>
          <ImgContainer>
            <Picture
              src="../../image/img_step_03.png"
              alt="당근마켓 지역광고 STEP3"
              width={240}
              placeholder="none"
            />
            <ImgSubText>
              <StepNumber>03</StepNumber>
              <p>광고 만들기를 눌러주세요</p>
            </ImgSubText>
          </ImgContainer>
        </ImgRow>
      </Container>
    </Section>
  );
};

const Container = styled("div", {
  display: "grid",

  gridTemplateRows: "repeat(4, auto)",
  justifyItems: "center",

  "@md": {
    paddingX: 0,
    width: "80%",
    maxWidth: rem(1160),
    gridTemplateRows: "repeat(2, auto)",
  },
});

const GridRow = styled("div", {
  display: "grid",
  gridTemplateRows: "auto",
  alignItems: "center",
  justifyItems: "center",
  marginBottom: rem(12),
  Subtitle: {
    fontSize: "$body2",
    fontWeight: 400,
  },

  "@md": {
    justifyItems: "start",
    marginBottom: rem(20),
  },
});

const TitleBig = styled("p", {
  fontSize: "$subtitle2",
  fontWeight: "bold",

  "@md": {
    fontSize: rem(42),
    lineHeight: rem(52),
  },
});

const ImgRow = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  "@md": {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const ImgContainer = styled("div", {
  // style={{margin: ` ${rem(43)} 0`}}
  marginY: rem(43),
});

const ImgSubText = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: rem(30),
  lineHeight: rem(31),
  p: {
    fontSize: "$subtitle3",
  },
});

const StepNumber = styled("p", {
  fontSize: "$subtitle3",
  lineHeight: rem(31),
  fontWeight: "bold",
  color: "$carrot500",
  marginY: rem(4),
});
