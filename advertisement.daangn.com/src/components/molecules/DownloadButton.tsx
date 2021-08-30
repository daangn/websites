import * as React from "react";
import { styled } from "~/gatsby-theme-stitches/stitches.config";

type Props = {
  link?: string;
};

export function DownloadButton({ children }: React.PropsWithChildren<Props>) {
  return <Button>{children}</Button>;
}

const Button = styled("div", {
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
