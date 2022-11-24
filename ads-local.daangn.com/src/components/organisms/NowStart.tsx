import * as React from "react";
import { StaticImage as Picture } from "gatsby-plugin-image";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from '@seed-design/design-token';

import { Section } from "~/components/molecules/Section";

import { rem } from "polished";

export const NowStart = () => {
  return (
    <Section backgroundColor="#F8F9FA">
      <Container>
        <GridRow>
          <TitleBig>누구나 쉽게 광고할 수 있어요</TitleBig>
        </GridRow>
        <ImgRow>
          <ImgContainer>
            <ImgSubText>
              <StepNumber>01</StepNumber>
              <p>비즈프로필을 만들고</p>
            </ImgSubText>
            <Picture
              src="../../image/img_step_01.png"
              alt="당근마켓 광고 STEP1"
              width={240}
              placeholder="none"
            />
          </ImgContainer>
          <ImgContainer>
          <ImgSubText>
              <StepNumber>02</StepNumber>
              <p>가게 정보와 소식을 채워주세요.</p>
            </ImgSubText>
            <Picture
              src="../../image/img_step_02.png"
              alt="당근마켓 광고 STEP2"
              width={240}
              placeholder="none"
            />
          </ImgContainer>
          <ImgContainer>
          <ImgSubText>
              <StepNumber>03</StepNumber>
              <p>광고 만들기를 시작해 보세요.</p>
            </ImgSubText>
            <Picture
              src="../../image/img_step_03.png"
              alt="당근마켓 광고 STEP3"
              width={240}
              placeholder="none"
            />
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
  marginY: rem(43),
  backgroundColor: vars.$semantic.color.paperDefault,
  paddingX: rem(64),
  border: `1px solid rgba(33, 33, 36, 0.07)`,

  "@md": {
    '& + &':{
      marginLeft: rem(37)
    }
  }
  
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
    fontWeight: "bold",
    marginTop: rem(4),
    marginBottom: rem(12)
  },
});

const StepNumber = styled("p", {
  fontSize: "$subtitle3",
  lineHeight: rem(31),
  fontWeight: "bold",
  color: vars.$semantic.color.primary,
  marginY: rem(4),
});
