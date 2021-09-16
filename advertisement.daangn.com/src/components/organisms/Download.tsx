import React from "react";

import {styled} from "~/gatsby-theme-stitches/stitches.config";
import { ReactComponent as IconDaangnApp } from "~/image/icon_daangn_app.svg";

import {Section} from "~/components/molecules/Section";
import {rem} from "polished";
import {DownloadButton} from "~/components/molecules/DownloadButton";

export const Download = () => {
  return (
    <Section backgroundColor="#F8F9FA">
      <Container>
        <IconDaangnApp />
        <TitleBig>
          지금 시작해 보세요
        </TitleBig>
        <ImgSubTextMobile>
          <p>
            당근마켓 지역광고가 처음이라면
          </p>
          <p>
            광고캐시 5,000원을 드려요.
          </p>
        </ImgSubTextMobile>
        <ImgSubTextPC>
          <p>
            당근마켓 지역광고가 처음이라면 광고캐시 5,000원을 드려요.
          </p>
        </ImgSubTextPC>
        <BtnRow>
          <DownloadButton iconType="google" buttonType="gray">
            <div>Google Play</div>
          </DownloadButton>
          <DownloadButton iconType="apple" buttonType="gray">
            <div>App Store</div>
          </DownloadButton>
        </BtnRow>
      </Container>
    </Section>
  )
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"

})

const TitleBig = styled("p", {
  marginTop: rem(32),
  fontSize: "$subtitle2",
  fontWeight: 700,

  "@md": {
    fontSize: rem(42),
    lineHeight: rem(52)
  }
})

const ImgSubTextMobile = styled("div",{
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: rem(12),
  p: {
    fontSize: "$body2",
    lineHeight: rem(24),
  },
  "@md": {
    display: "none"
  }


})

const ImgSubTextPC = styled("div",{
  display: "none",
  "@md": {
    display: 'block'
  },
  marginTop: rem(20),
  p: {
    fontSize: "$subtitle3",
    lineHeight: rem(31)
  }
})

const BtnRow = styled("div", {
  display: "none",

  "@md":{
    display: "grid",
    marginTop: rem(40),
    gap: rem(10),
    gridTemplateColumns : "auto auto",
  }


})

