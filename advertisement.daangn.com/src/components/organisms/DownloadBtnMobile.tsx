import React from "react";
import fbTrack from "~/components/molecules/fbTrack";

import { styled } from "~/gatsby-theme-stitches/stitches.config";
import { rem } from "polished";

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
    window.open("https://display-ads-web.onelink.me/E4bl/590e9ee1", "_blank")
    fbTrack("trackCustom", "Download_mobile")
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
