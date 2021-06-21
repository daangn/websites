import * as React from "react";

import { parseMediaProps } from "../util";
import { MediaTypeMap, styled } from "../gatsby-theme-stitches/stitches.config";

type AlignmentType =
  | `space-${"between" | "around" | "evenly"}`
  | `${"" | "flex-"}${"start" | "end"}`
  | "stretch"
  | "center";
type FlexDirectionType = `${"row" | "column"}${"" | "-reverse"}`;
interface TFlex {
  row?: boolean | MediaTypeMap<boolean>;
  column?: boolean | MediaTypeMap<boolean>;

  flexDirection?: FlexDirectionType | MediaTypeMap<FlexDirectionType>;
  flex?: number | MediaTypeMap<number>;

  jc?: AlignmentType | MediaTypeMap<AlignmentType>;
  ai?: AlignmentType | MediaTypeMap<AlignmentType>;
  justifyContent?: AlignmentType | MediaTypeMap<AlignmentType>;
  alignItems?: AlignmentType | MediaTypeMap<AlignmentType>;

  center?: boolean | MediaTypeMap<boolean>;
  rowCenterX?: boolean | MediaTypeMap<boolean>;
  rowCenterY?: boolean | MediaTypeMap<boolean>;
  colCenterX?: boolean | MediaTypeMap<boolean>;
  colCenterY?: boolean | MediaTypeMap<boolean>;

  p?: string | number | MediaTypeMap<string | number>;
  m?: string | number | MediaTypeMap<string | number>;
}

const SFlex = styled("div", {
  display: "flex",
});

export const Flex: React.FC<TFlex> = (props) => {
  return <SFlex css={parseMediaProps(props)}>{props.children}</SFlex>;
};
