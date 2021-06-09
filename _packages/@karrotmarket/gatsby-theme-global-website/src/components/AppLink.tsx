import React from "react";
import { rem } from "polished";
import { styled } from "../gatsby-theme-stitches/stitches.config";

import { Flex } from "./Flex";
import { Space } from "./Space";

// @ts-ignore
import { ReactComponent as AppStoreIcon } from "../icons/app_store.svg";
// @ts-ignore
import { ReactComponent as GooglePlayIcon } from "../icons/google_play.svg";
import { graphql } from "gatsby";

interface TLinkButton {
  theme: "dark" | "light" | "primary";
  width: "full" | "fit";

  icon?: any;
  href?: string;
}

const SLinkButton = styled("a", {
  height: rem(54),
  borderRadius: rem(10),
  fontSize: "$body1",
  display: "flex",
  alignItems: "center",
  transition: "background 0.3s",
  textDecoration: "none",

  "&:hover": {
    cursor: "pointer",
  },

  variants: {
    theme: {
      dark: {
        color: "white",
        background: "$gray900",
        "& path": {
          fill: "white",
        },
        "&:hover": {
          background: "black",
        },
      },
      light: {
        color: "$gray900",
        background: "$gray100",
        "& path": {
          fill: "$gray900",
        },
        "&:hover": {
          background: "$gray200",
        },
      },
      primary: {
        color: "white",
        background: "$carrot500",
      },
    },
    width: {
      full: {
        width: "100%",
        justifyContent: "center",
      },
      fit: {
        padding: `0 ${rem(28)}`,
        boxSizing: "border-box",
      },
    },
  },
});

const LinkButton: React.FC<TLinkButton> = ({
  icon,
  href,
  children,
  theme,
  width,
}) => {
  return (
    <SLinkButton theme={theme} width={width} href={href}>
      {icon && (
        <>
          {icon}
          <Space w={12}></Space>
        </>
      )}
      {children}
    </SLinkButton>
  );
};

const SAppLink = styled("div", {
  variants: {
    type: {
      desktop: {
        display: "none",
        "@md": {
          display: "flex",
        },
      },
      mobile: {
        display: "flex",
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: rem(16),
        boxSizing: "border-box",
        zIndex: 1,
        "@md": {
          display: "none",
        },
      },
    },
  },
});

export const query = graphql`
  fragment AppLink_links on PrismicGlobalContentsDataType {
    app_store_link
    google_play_link
    one_link
  }
`;

interface TAppLink {
  type: "mobile" | "desktop";
  theme: "dark" | "light" | "primary";
  links: GatsbyTypes.AppLink_linkFragment;
}

const AppLink: React.FC<TAppLink> = ({ type, theme, links }) => {
  const { google_play_link, app_store_link, one_link } = links;

  return (
    <>
      <SAppLink type={type}>
        {type === "desktop" ? (
          <Flex row>
            <LinkButton href={app_store_link} theme={theme} width="fit">
              <AppStoreIcon />
              <Space w={12}></Space>
              App Store
            </LinkButton>
            <Space w={12}></Space>
            <LinkButton href={google_play_link} theme={theme} width="fit">
              <GooglePlayIcon />
              <Space w={12}></Space>
              Google Play
            </LinkButton>
          </Flex>
        ) : (
          <LinkButton href={one_link} theme="primary" width="full">
            App download
          </LinkButton>
        )}
      </SAppLink>
      {/* {type === "mobile" && <Space h={{ "@i": 86, "@md": 0 }}></Space>} */}
    </>
  );
};

export default AppLink;
