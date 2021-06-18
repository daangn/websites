import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import { styled } from "gatsby-theme-stitches/src/stitches.config";
import {
  mapLink,
  useLinkParser,
} from "@karrotmarket/gatsby-theme-website/src/link";

const NavigationListItemContainer = styled("li", {
  fontSize: "$subtitle2",
  fontWeight: "bold",

  opacity: 0.5,
  transform: "translateY(50%)",
  transition: ["opacity .3s", "transform .3s"].join(","),

  ":checked ~ ul > &": {
    opacity: 1,
    transform: "none",
  },

  "@sm": {
    fontSize: "$body2",
    opacity: 1,
    transform: "none",
  },
});

const NavigationLink = styled(Link, {
  textDecoration: "none",
  color: "$gray900",
  "&:hover, &:active, &:focus": {
    color: "$gray600",
  },

  variants: {
    active: {
      true: {
        color: "$carrot500",
        "&:hover, &:active, &:focus": {
          color: "$carrot600",
        },
      },
    },
  },
});

interface FooterEntryItemProps {
  entry: Pick<
    GatsbyTypes.PrismicSiteNavigationDataFooterEntries,
    "display_text"
  > & {
    readonly link: GatsbyTypes.Maybe<Pick<GatsbyTypes.PrismicLinkType, "url">>;
  };
}

const NavigationListItem: React.FC<FooterEntryItemProps> = ({ entry }) => {
  const parseLink = useLinkParser();
  const location = useLocation();

  return (
    <NavigationListItemContainer key={entry.link!.url}>
      {mapLink(parseLink(entry.link!.url), {
        Internal: (link) => {
          console.log(
            link,
            link.pathname === "/" || link.pathname === "/about"
          );
          return (
            <NavigationLink
              {...(link.pathname === "/" || link.pathname === "/about"
                ? {
                    to: link.pathname,
                    active: link.pathname === location.pathname,
                  }
                : {
                    as: "a",
                    href: link.pathname,
                  })}
            >
              {entry.display_text}
            </NavigationLink>
          );
        },
        External: (link) => (
          <NavigationLink
            as="a"
            target="_blank"
            rel="external noopener"
            href={link.url.href}
          >
            {entry.display_text}
          </NavigationLink>
        ),
      })}
    </NavigationListItemContainer>
  );
};

export default NavigationListItem;
