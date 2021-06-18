import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import { styled } from "gatsby-theme-stitches/src/stitches.config";
import { mapLink, useLinkParser } from "../../link";

const FooterEntryItemContainer = styled("li", {
  fontSize: "$caption2",
  fontWeight: 700,
});

const FooterEntryLink = styled(Link, {
  color: "$gray900",
  textDecoration: "none",
  opacity: 1,

  "&:hover": {
    opacity: 0.64,
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

const FooterEntryItem: React.FC<FooterEntryItemProps> = ({ entry }) => {
  const parseLink = useLinkParser();
  const location = useLocation();

  return (
    <FooterEntryItemContainer key={entry.link!.url!}>
      {mapLink(parseLink(entry.link!.url!), {
        Internal: (link) => (
          <FooterEntryLink
            to={link.pathname}
            active={
              link.pathname === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.pathname)
            }
          >
            {entry.display_text}
          </FooterEntryLink>
        ),
        External: (link) => (
          <FooterEntryLink
            as="a"
            target="_blank"
            rel="external noopener"
            href={link.url.href}
          >
            {entry.display_text}
          </FooterEntryLink>
        ),
      })}
    </FooterEntryItemContainer>
  );
};

export default FooterEntryItem;
