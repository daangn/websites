import "@seed-design/stylesheet/global.css";

import { globalCss } from "gatsby-theme-stitches/src/config";
import { rem } from "polished";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "Gilroy",
    lineHeight: "140%",
  },
  body: {
    backgroundColor: "$white",
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
  "#about-page": {
    "@md": {
      minWidth: rem(788),
    },
  },
});

export default globalStyles;
