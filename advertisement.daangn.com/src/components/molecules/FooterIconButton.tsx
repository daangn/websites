import React from "react";
import { styled } from "~/gatsby-theme-stitches/stitches.config";
import { ReactComponent as IconYoutube } from "~/image/logo_youtube.svg";
import { ReactComponent as IconBlog } from "~/image/logo_blog.svg";
import { gtag as GA } from "~/components/molecules/gtag";

type FooterIconButtonProps = {
  target: string;
  link: string;
};

export const FooterIconButton = ({
  target,
  link,
}: React.PropsWithChildren<FooterIconButtonProps>) => {
  const onClickHandler = (target: string) => {
    window.open(target, "_blank");
    GA("event", "click");
  };

  return (
    <Button onClick={() => onClickHandler(link)}>
      {target === "youtube" && <IconYoutube />}
      {target === "blog" && <IconBlog />}
    </Button>
  );
};

const Button = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  typography: "$body2",
  fontWeight: "bold",
  cursor: "pointer",
});
