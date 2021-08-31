import * as React from "react";

import advertisementPcBanner from "~/image/img_advertisement_pc_banner.png";
import { styled } from "gatsby-theme-stitches/src/stitches.config";
import { BannerTitle } from "~/components/molecules/BannerTitle";
import { DownloadButton } from "~/components/molecules/DownloadButton";

export function Banner() {
  return (
    <Background>
      <BannerTitle />
      <Description>
        동네 이웃들이 모이는
        <br />
        당근마켓에 광고해 보세요
        <DownloadButtons css={{ marginTop: 35 }}>
          <DownloadButton iconType="google">Google Play</DownloadButton>
          <DownloadButton iconType="apple">App Store</DownloadButton>
        </DownloadButtons>
      </Description>
    </Background>
  );
}

const Background = styled("div", {
  position: "relative",
  height: 780,
  backgroundImage: `url(${advertisementPcBanner})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
});

const Description = styled("div", {
  position: "absolute",
  top: 250,
  left: 140,
  typography: "$heading3",
  fontWeight: "bold",
});

const DownloadButtons = styled("div", {
  display: "flex",
});
