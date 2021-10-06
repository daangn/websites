import React from "react";

import { styled } from "~/gatsby-theme-stitches/stitches.config";
import { rem } from "polished";

export const DownloadBtnMobile: React.FC = () => {
  return (
    <Wrapper>
      <a
        href="https://daangn.onelink.me/oWdR/4e25da2f?af_dp=karrot%3A%2F%2Fminikarrot%2Frouter%3Fapp%3Dhttps%3A%2F%2Fwebview.prod.kr.karrotmarket.com%2Fkotisaari%26path%3D%2Fadvertisements%3Freferral%3Dshare.product.detail%26navbar%3Dfalse%26scrollable%3Dfalse&af_ios_url=karrot%3A%2F%2Fminikarrot%2Frouter%3Fapp%3Dhttps%3A%2F%2Fwebview.prod.kr.karrotmarket.com%2Fkotisaari%26path%3D%2Fadvertisements%3Freferral%3Dshare.product.detail%26navbar%3Dfalse%26scrollable%3Dfalse&af_android_url=karrot://minikarrot/router?app=https://webview.prod.kr.karrotmarket.com/kotisaari&path=/advertisements?referral=share.product.detail&navbar=false&scrollable=false"
        style={{textDecoration: 'none', color: 'inherit'}}
      >
        <Button>
          당근마켓 앱 다운로드
        </Button>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  position: "fixed",
  zIndex: 10,
  bottom: 0,
  left: 0,
  right: 0,

  "@md": {
    display: "none",
  },
});

const Button = styled("div", {
  display: "flex",

  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginX: rem(16),
  // paddingY: rem(13),
  height: rem(54),
  marginBottom: rem(16),
  borderRadius: 10,
  backgroundColor: "$carrot500",
  color: "$white",
  fontSize: 16,
  fontWeight: "bold",

  "&:hover": {
    backgroundColor: "$carrot600",
  },
});
