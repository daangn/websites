import React from "react";
import { styled } from "~/gatsby-theme-stitches/stitches.config";
import { ReactComponent as IconDaangnApp } from "~/image/icon_daangn_app.svg";
import { DownloadButton } from "~/components/molecules/DownloadButton";

export function PromotionInfoDownload() {
  return (
    <Wrapper>
      <IconDaangnApp />
      <Title>지금 시작해 보세요</Title>
      <Description>
        당근마켓 지역광고가 처음이라면 광고캐시 5,000원을 드려요.
      </Description>
      <DownloadButtons css={{ marginTop: 40 }}>
        <DownloadButton buttonType="gray" iconType="google">
          Google Play
        </DownloadButton>
        <DownloadButton buttonType="gray" iconType="apple">
          App Store
        </DownloadButton>
      </DownloadButtons>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  paddingY: 160,
  backgroundColor: "#F8F9FA",
});

const Title = styled("p", {
  marginTop: 32,
  marginBottom: 20,
  typography: "$heading4",
  fontWeight: "bold",
});

const Description = styled("p", {
  typography: "$subtitle3",
});

const DownloadButtons = styled("div", {
  display: "flex",
});
