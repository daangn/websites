import * as React from "react";
import { MediaTypeMap, styled } from "../gatsby-theme-stitches/stitches.config";

import { parseMediaProps } from "../util";

interface TGrid {
  gridTemplateColumns?: string | MediaTypeMap<string>;
  gridTemplateRows?: string | MediaTypeMap<string>;
  columnGap?: string | number | MediaTypeMap<string | number>;
  rowGap?: string | number | MediaTypeMap<string | number>;
  marginTop?: string | number | MediaTypeMap<string | number>;
  marginBottom?: string | number | MediaTypeMap<string | number>;
  width?: string | number | MediaTypeMap<string | number>;
  height?: string | number | MediaTypeMap<string | number>;
  padding?: string | number | MediaTypeMap<string | number>;
}

const SGrid = styled("div", {
  display: "grid",
  boxSizing: "border-box",
});

export const Grid: React.FC<TGrid> = (props) => {
  return <SGrid css={parseMediaProps(props)}>{props.children}</SGrid>;
};
