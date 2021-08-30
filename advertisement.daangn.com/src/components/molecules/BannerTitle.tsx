import React from "react";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import daangnAdLogo from "~/image/img_daangn_ad_logo.png";
import { ReactComponent as IconCall } from "~/image/icon_call.svg";

export function BannerTitle() {
  return (
    <Wrapper>
      {!!daangnAdLogo && <img src={daangnAdLogo} alt="Banner" />}
      <QuestionInfo>
        <IconCall />
        <p>
          광고문의 <mark>1644-9736</mark>
        </p>
      </QuestionInfo>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 68,
  paddingX: 140,
});

const QuestionInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  typography: "$body2",
  fontWeight: "bold",

  p: { marginX: 8 },
  mark: {
    backgroundColor: "transparent",
    color: "$carrot500",
  },
});
