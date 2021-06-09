import * as React from "react";
import { MediaTypeMap, styled } from "../gatsby-theme-stitches/stitches.config";

import { parseMediaProps } from "../util";

interface TSpace {
  w?: any | MediaTypeMap<any>;
  h?: any | MediaTypeMap<any>;
  width?: any | MediaTypeMap<any>;
  height?: any | MediaTypeMap<any>;
}

const SSpace = styled("div", {
  display: "flex",
  flexShrink: 0,
});

export const Space: React.FC<TSpace> = (props) => {
  const css = React.useMemo(() => parseMediaProps(props), [props]);
  return <SSpace css={css} />;
};
