import * as React from "react";
import type { PageProps } from "gatsby";

import { styled } from "gatsby-theme-stitches/src/config";

const NotFoundPage: React.FC<PageProps> = ({}) => {
  return <Wrapper>not found</Wrapper>;
};

const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default NotFoundPage;
