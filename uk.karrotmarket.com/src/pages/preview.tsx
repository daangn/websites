import React from "react";
import type { PageProps } from "gatsby";
import { linkResolver } from "@src/linkResolver";
import { withPreviewResolver } from "gatsby-source-prismic";
import { styled } from "@src/gatsby-theme-stitches/stitches.config";

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

export default withPreviewResolver(PreviewPage, {
    repositoryName: "karrot",
    linkResolver,
});
