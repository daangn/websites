import * as React from "react";

import advertisementMobileBanner from "~/image/img_m_cover.png";
import advertisementPcBanner from "~/image/img_cover.png";
import { styled } from "gatsby-theme-stitches/src/stitches.config";
import { DownloadButton } from "~/components/molecules/DownloadButton";
import { rem } from "polished";

export function Banner() {
  return (
    <Background>
      <Description>
        동네 이웃들이 모이는
        <br />
        당근마켓에 광고해 보세요
        <DownloadButtons css={{ marginTop: 35 }}>
          <DownloadButton iconType="google">
            <div style={{marginTop: rem(4)}}>Google Play</div>
          </DownloadButton>
          <DownloadButton iconType="apple">
            <div style={{marginTop: rem(4)}}>App Store</div>
            </DownloadButton>
        </DownloadButtons>
      </Description>
    </Background>
  );
}

const Background = styled("div", {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  height: 780,
  backgroundImage: `url(${advertisementMobileBanner})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  transition: "0.2s ease-in-out",
  "@md": {
    backgroundImage: `url(${advertisementPcBanner})`,
    backgroundPosition: "center center",
  },
});

const Description = styled("div", {
  typography: "$subtitle2",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: rem(100),

  "@md": {
    textAlign: "left",
    position: "absolute",
    top: 250,
    left: 140,
    typography: "$heading3",
  },
});

const DownloadButtons = styled("div", {
  display: "flex",
  visibility: "hidden",

  "@md": {
    visibility: "visible",
  },
});
