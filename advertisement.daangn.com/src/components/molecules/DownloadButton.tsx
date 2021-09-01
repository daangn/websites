import * as React from "react";
import { styled } from "~/gatsby-theme-stitches/stitches.config";
import { ReactComponent as IconApple } from "~/image/icon_apple.svg";
import { ReactComponent as IconGooglePlay } from "~/image/icon_google_play.svg";

type Props = {
  buttonType?: "carrot" | "gray";
  iconType: "google" | "apple";
  link?: string;
};

export function DownloadButton({
  buttonType = "carrot",
  iconType,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Button buttonType={buttonType}>
      {iconType === "google" && (
        <GooglePlay fill={buttonType === "gray" ? "#212124" : "white"} />
      )}
      {iconType === "apple" && (
        <Apple fill={buttonType === "gray" ? "#212124" : "white"} />
      )}
      {children}
    </Button>
  );
}

const Button = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 180,
  paddingY: 12,
  borderRadius: 10,
  typography: "$body2",
  fontWeight: "bold",

  "& + &": {
    marginLeft: 10,
  },

  variants: {
    buttonType: {
      carrot: {
        backgroundColor: "$carrot500",
        color: "$white",
      },
      gray: {
        backgroundColor: "$gray200",
        color: "$gray900",
      },
    },
  },
});

const GooglePlay = styled(IconGooglePlay, {
  marginRight: 10,
});

const Apple = styled(IconApple, {
  marginRight: 10,
});
