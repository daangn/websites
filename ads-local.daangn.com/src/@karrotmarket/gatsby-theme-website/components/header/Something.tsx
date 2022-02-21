import * as React from "react";
import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { ReactComponent as IconCall } from "~/image/icon_call.svg";

const QuestionInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  typography: "$body2",
  fontWeight: "bold",

  p: { marginLeft: 8 },
  mark: {
    backgroundColor: "transparent",
    color: "$carrot500",
    display: "none",
    "@md": {
      display: "inline",
    },
  },
});

const Logo = styled("img", {
  width: rem(145),
  height: rem(25),
  "@md": {
    width: "auto",
    height: "auto",
  },
});

const TelLink = styled("a", {
  color: "$black",
  textDecoration: "none",
});

const Something: React.FC = () => {
  return (
    <QuestionInfo>
      <IconCall />
      <TelLink href="tel://1644-9736">
        <p>
          광고문의 <mark>1644-9736</mark>
        </p>
      </TelLink>
    </QuestionInfo>
  )
};

export default Something;
