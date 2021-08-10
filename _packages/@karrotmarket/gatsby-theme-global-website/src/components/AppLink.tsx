import * as React from "react";
import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "../gatsby-theme-stitches/stitches.config";

import { Flex } from "./Flex";
import { Space } from "./Space";

import { ReactComponent as AppStoreIcon } from "../icons/app_store.svg";
import { ReactComponent as GooglePlayIcon } from "../icons/google_play.svg";

interface TLinkButton {
  theme: "dark" | "light" | "primary" | "white";
  width: "full" | "fit";

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
        "& path": {
          fill: "white",
        },
        "&:hover": {
          background: "$carrot600",
        },
      },
      white: {
        color: "$gray900",
        background: "white",
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
  href,
  children,
  theme,
  width,
}) => {
  return (
    <SLinkButton theme={theme} width={width} href={href}>
      {children}
    </SLinkButton>
  );
};

export const query = graphql`
  fragment AppLink_links on PrismicGlobalContentsDataType {
    app_store_link
    google_play_link
    one_link
    one_link_button_text
  }
`;

interface TAppLink {
  links: GatsbyTypes.AppLink_linkFragment;
  type: "mobile" | "desktop";
  theme: "dark" | "light" | "primary" | "white";
  inverted?: boolean;
}

const AppLink: React.FC<TAppLink> = ({ type, theme, links, inverted }) => {
  const { google_play_link, app_store_link, one_link, one_link_button_text } =
    links;

  return (
    <>
      <Wrapper type={type} inverted={inverted}>
        {type === "desktop" ? (
          <Container>
            <LinkButton href={app_store_link} theme={theme} width="fit">
              <AppStoreIcon />
              <Text>App Store</Text>
            </LinkButton>
            <LinkButton href={google_play_link} theme={theme} width="fit">
              <GooglePlayIcon />
              <Text>Google Play</Text>
            </LinkButton>
          </Container>
        ) : (
          <LinkButton href={one_link} theme="primary" width="full">
            {one_link_button_text || "App download"}
          </LinkButton>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled("div", {
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
    inverted: {
      true: {
        div: {
          flexDirection: "row-reverse",
        },
      },
    },
  },
});

const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, max-content)",
  gridColumnGap: rem(12),
});

const Text = styled("div", {
  marginLeft: rem(12),
});

export default AppLink;
