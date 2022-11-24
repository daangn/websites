import * as React from "react";
import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";

type SectionProps = {
  backgroundColor: string,
  children: React.ReactNode,
};

export const Section: React.FC<SectionProps> = ({
  backgroundColor,
  children,
}) => {
  return (
    <Base css={{ backgroundColor: `${backgroundColor}` }}>
      {children}
    </Base>
  );
};

const Base = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingY: rem(80),
  overflow: "hidden",

  "@md": {
    paddingY: rem(160),
  },
});
