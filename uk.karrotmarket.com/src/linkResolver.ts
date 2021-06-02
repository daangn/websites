import type { PluginLinkResolver } from "gatsby-source-prismic/src/types";

export const linkResolver: PluginLinkResolver = ({ node }) => (_document) => {
    return "/";
};
