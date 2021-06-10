import { global } from "../gatsby-theme-stitches/stitches.config";
import { rem } from "polished";

const globalStyles = global({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "Gilroy",
    lineHeight: "140%",
  },
  body: {
    color: "$gray900",
    fontFamily: "Gilroy",
    textRendering: "optimizeLegibility",
    wordBreak: "break-word",
    WebkitFontSmoothing: "antialiased",
    margin: 0,
  },

  a: {
    color: "$gray900",
  },
  h1: {
    fontSize: rem(32),
    lineHeight: "120%",
    "@md": {
      fontSize: "$heading1",
      lineHeight: "115%",
    },
  },
  h2: {
    fontSize: "$heading5",
    "@md": {
      fontSize: "$heading2",
      lineHeight: "115%",
    },
  },
  h3: {
    fontSize: "$subtitle2",
    "@md": {
      fontSize: "$heading3",
      lineHeight: "120%",
    },
  },
  h4: {
    fontSize: "$heading4",
    lineHeight: "120%",
  },
  h5: {
    fontSize: "$subtitle3",
    "@md": {
      fontSize: "$heading5",
      lineHeight: "120%",
    },
  },
  "#about-page": {
    "@md": {
      minWidth: rem(748),
    },
  },
});

export default globalStyles;
