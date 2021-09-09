import React from "react";

import { styled } from "~/gatsby-theme-stitches/stitches.config";
import { rem } from "polished";
import { isAndroid, isIOS } from "react-device-detect";

export const DownloadBtnMobile: React.FC = () => {
  const [y, setY] = React.useState(0);
  const [direction, setDirection] = React.useState<"up" | "down">();

  const handleScroll = React.useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setDirection("up");
      } else if (y < window.scrollY) {
        setDirection("down");
      }
      setY(window.scrollY);
    },
    [y]
  );

  React.useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  const onClickHandler = React.useCallback(() => {
    if (isIOS)
      window.open(
        "https://apps.apple.com/kr/app/%EB%8B%B9%EA%B7%BC%EB%A7%88%EC%BC%93-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-1%EB%93%B1-%EB%8F%99%EB%84%A4-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/id1018769995",
        "_blank"
      );
    else if (isAndroid)
      window.open(
        "https://play.google.com/store/apps/details?id=com.towneers.www",
        "_blank"
      );
    else window.open("https://www.daangn.com/", "_blank"); // userAgent 가 판명되지 않은 기타 경우 당근 홈페이지로 리다이렉트
  }, []);

  return (
    <Wrapper direction={direction}>
      <Button onClick={() => onClickHandler()}>당근마켓 앱 다운로드</Button>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  position: "fixed",
  zIndex: 10,
  bottom: 0,
  left: 0,
  right: 0,
  transition: "0.6s cubic-bezier(0.22, 1, 0.36, 1)",

  variants: {
    direction: {
      up: {
        transform: `translateY(0)`,
      },
      down: {
        transform: `translateY(80px)`,
      },
    },
  },

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
  paddingY: rem(13),
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
