import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from '@seed-design/design-token';
import _Footer from "@karrotmarket/gatsby-theme-website/src/components/Footer";

const Footer = styled(_Footer, {
  "*": {
    fontFamily: "$system",
  },

  borderTop: `1px solid ${vars.$scale.color.gray300}`,
  paddingBottom: rem(86),
  paddingTop: rem(32),

  "ul:first-child a": {
    textDecoration: "none",
    fontWeight: 400,
    fontSize: rem(13),
  },

  "section ul:nth-child(2) a": {
    fontSize: rem(22),
  },

  "@md": {
    paddingBottom: rem(156),
    paddingTop: rem(72),
    "section ul:nth-child(2) a": {
      fontSize: rem(18),
    },
    minWidth: rem(1230),
  },
});

export default Footer;
