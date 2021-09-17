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
  const onClickHandler = (iconType: "google" | "apple") => {
    switch (iconType) {
      case "apple":
        window.open(
          "https://apps.apple.com/kr/app/%EB%8B%B9%EA%B7%BC%EB%A7%88%EC%BC%93-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-1%EB%93%B1-%EB%8F%99%EB%84%A4-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/id1018769995",
          "_blank"
        );
        break;
      case "google":
        window.open(
          "https://play.google.com/store/apps/details?id=com.towneers.www",
          "_blank"
        );
        break;
    }
  };

  return (
    <Button id={iconType} buttonType={buttonType} onClick={() => onClickHandler(iconType)}>
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
  cursor: "pointer",
  "& + &": {
    marginLeft: 10,
  },

  variants: {
    buttonType: {
      carrot: {
        backgroundColor: "$carrot500",
        color: "$white",

        "&:hover": {
          backgroundColor: "$carrot600",
        },
      },
      gray: {
        backgroundColor: "$gray200",
        color: "$gray900",

        "&:hover": {
          backgroundColor: "$gray300",
        },
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
