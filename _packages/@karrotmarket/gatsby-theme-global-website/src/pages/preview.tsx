import * as React from "react";
import type { PageProps } from "gatsby";

import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews";
import { defaultRepositoryConfig } from "@karrotmarket/gatsby-theme-prismic/src/defaultRepositoryConfig";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

const Wrapper = styled("div", {
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
});

const PreviewPage: React.FC<PageProps> = ({}) => {
  return <Wrapper>preview loading</Wrapper>;
};

export default withPrismicPreviewResolver(PreviewPage, [
  defaultRepositoryConfig,
]);
