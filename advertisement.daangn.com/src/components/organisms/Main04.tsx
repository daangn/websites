import React from "react"
import {styled} from "~/gatsby-theme-stitches/stitches.config";
import {rem} from "polished";
import {StaticImage as Picture} from "gatsby-plugin-image";

export const Main04 = () => {
  return (
  <Section>
    <Container>
      <GridRow>
        <TitleBig>
          이래서 효과가 좋아요
        </TitleBig>
      </GridRow>
      <ImgRow>
        <div>
          <Picture src={"../../image/img_good_01.png"} alt="" width={260} />
          <ImgSubText>
            <p>
              동네를 인증한
            </p>
            <p>
              진짜 이웃만 모였어요
            </p>
          </ImgSubText>
        </div>
        <div>
          <Picture src={"../../image/img_good_02.png"} alt="" width={260} />
          <ImgSubText>
            <p>
              동네 이웃 3명 중 1명이
            </p>
            <p>
              매일 14분씩 사용해요
            </p>
          </ImgSubText>
        </div>
        <div>
          <Picture src={"../../image/img_good_03.png"} alt="" width={260} />
          <ImgSubText>
            <p>
              지역 상권 핵심소비층인
            </p>
            <p>
              20~40대가 가장 많아요
            </p>
          </ImgSubText>
        </div>
      </ImgRow>
    </Container>
  </Section>)
}

const Section = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: "center",
  backgroundColor: "#FBF7F2",
  paddingY: rem(80),
  overflow: "hidden",

  "@md": {
    paddingY: rem(160)
  }

})

const Container = styled("div", {
  display: "grid",
  gridTemplateRows: "repeat(4, auto)",
  justifyItems: "center",

  "@md": {
    width: "60%",
    paddingX: 0,
    gridTemplateRows: "repeat(2, auto)"
  }
})


const GridRow = styled("div",{
  display: 'grid',
  gridTemplateRows: "auto",
  alignItems: 'center',
  justifyItems: 'center',
  marginBottom: rem(12),
  Subtitle: {
    fontSize: "$body2",
    fontWeight: 400
  },

  "@md" : {
    justifyItems: 'start',
    marginBottom: rem(20),
  }
})

const ImgRow = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  "@md": {
    flexDirection: "row",
    justifyContent: "space-around"
  }
})

const TitleBig = styled("p", {
  fontSize: "$subtitle2",
  fontWeight: "bold",

  "@md": {
    fontSize: rem(42),
    lineHeight: rem(52)
  }
})

const ImgSubText = styled("div",{
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  p: {
    fontSize: "$subtitle3",
    lineHeight: rem(31)
  }
})
