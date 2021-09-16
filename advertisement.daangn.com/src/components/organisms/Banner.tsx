import * as React from "react";

import advertisementMobileBanner from "~/image/img_cover_mobile.png";
import advertisementPcBanner from "~/image/img_cover_pc.png";
import { styled } from "gatsby-theme-stitches/src/stitches.config";
import { DownloadButton } from "~/components/molecules/DownloadButton";
import { rem } from "polished";

export function Banner() {
  return (
    <Background>
      <Wrapper>
        <Description>
          동네 이웃들이 모이는
          <br />
          당근마켓에 광고해 보세요
          <DownloadButtons css={{ marginTop: 35 }}>
            <DownloadButton iconType="google">
              <div>Google Play</div>
            </DownloadButton>
            <DownloadButton iconType="apple">
              <div>App Store</div>
              </DownloadButton>
          </DownloadButtons>
        </Description>
      </Wrapper>
    </Background>
  );
}

const Background = styled("div", {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  height: rem(600),
  backgroundImage: `url(${advertisementMobileBanner})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  transition: "0.2s ease-in-out",
  "@md": {
    height: 780,
    backgroundImage: `url(${advertisementPcBanner})`,
    backgroundPosition: "center center",
  },
});

const Wrapper = styled("div", {
  
  "@md":{

    display: "flex",
    maxWidth: rem(1160),
    paddingTop: rem(182),
    flexDirection: "row",
    flexGrow: 1,
    paddingX: rem(40)
  },

  "@xl": {
    paddingX: 0
  }
})

const Description = styled("div", {
  typography: "$subtitle2",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: rem(100),

  "@md": {
    textAlign: "left",
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
