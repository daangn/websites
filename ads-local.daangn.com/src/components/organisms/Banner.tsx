import * as React from "react";
import { rem, em } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";

import banner_avif from "~/image/img_cover_mobile.avif";
import banner_webp from "~/image/img_cover_mobile.webp";
import banner_pc_avif from "~/image/img_cover_pc.avif";
import banner_pc_webp from "~/image/img_cover_pc.webp";
import advertisementMobileBanner from "~/image/img_cover_mobile.png";
import advertisementPcBanner from "~/image/img_cover_pc.png";
import { DownloadButton } from "~/components/molecules/DownloadButton";

export function Banner() {
  return (
    <Background>
      <picture>
        {/* <source
          media={`(max-width: ${em(768)})`}
          srcSet={banner_avif}
          type="image/avif"
        /> */}
        <source
          media={`(max-width: ${em(768)})`}
          srcSet={banner_webp}
          type="image/webp"
        />
        {/* <source
          media={`(min-width: ${em(768)})`}
          srcSet={banner_pc_avif}
          type="image/avif"
        /> */}
        <source
          media={`(min-width: ${em(768)})`}
          srcSet={banner_pc_webp}
          type="image/webp"
        />
        <ImgPc
          alt="person handling a phone with a karrot advertisement platform on the screen"
          src={advertisementPcBanner}
          srcSet={`${advertisementMobileBanner} 720w,
          ${advertisementPcBanner} 3761w`}
        />
      </picture>
      <Wrapper>
        <Description>
          우리동네 광고 필수품
          <br />
          당근마켓 광고
          <DownloadButtons css={{ marginTop: 35 }}>
            <DownloadButton iconType="google" id="google_top">
              <div>Google Play</div>
            </DownloadButton>
            <DownloadButton iconType="apple" id="apple_top">
              <div>App Store</div>
            </DownloadButton>
          </DownloadButtons>
        </Description>
      </Wrapper>
    </Background>
  );
}

const ImgPc = styled("img", {
  position: "absolute",
  minHeight: rem(600),
  width: "100%",
  height: "100%",
  top: 0,
  right: 0,
  zIndex: -1,
  objectFit: "cover",
  justifyContent: "center",
  transition: "0.2s ease-in-out",
  "@md": {
    height: rem(780),
  },
});

const Background = styled("div", {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  height: rem(600),
  // backgroundImage: `url(${advertisementMobileBanner})`,
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  // transition: "0.2s ease-in-out",
  "@md": {
    height: 780,
    // backgroundImage: `url(${advertisementPcBanner})`,
    // backgroundPosition: "center center",
  },
});

const Wrapper = styled("div", {
  "@md": {
    display: "flex",
    maxWidth: rem(1160),
    paddingTop: rem(182),
    flexDirection: "row",
    flexGrow: 1,
    paddingX: rem(40),
  },

  "@xl": {
    paddingX: 0,
  },
});

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
