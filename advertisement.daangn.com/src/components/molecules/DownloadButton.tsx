import * as React from "react";
import { styled } from "~/gatsby-theme-stitches/stitches.config";
import { ReactComponent as IconApple } from "~/image/icon_apple.svg";
import { ReactComponent as IconGooglePlay } from "~/image/icon_google_play.svg";

type Props = {
  iconType: "google" | "apple";
  link?: string;
};

export function DownloadButton({
  iconType,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Button>
      {iconType === "google" && <GooglePlay />}
      {iconType === "apple" && <Apple />}
      {children}
    </Button>
  );
}

const Button = styled("div", {
  display: "flex",
  alignItems: "center",
  paddingX: 32,
  paddingY: 12,
  borderRadius: 10,
  backgroundColor: "$carrot500",
  typography: "$body2",
  fontWeight: "bold",
  color: "$white",

  "& + &": {
    marginLeft: 10,
  },
});

const GooglePlay = styled(IconGooglePlay, {
  marginRight: 10,
});

const Apple = styled(IconApple, {
  marginRight: 10,
});
