import * as React from "react";
import {
  styled,
  theme,
  MediaTypeMap,
} from "../gatsby-theme-stitches/stitches.config";

import { parseMediaProps } from "../util";

type FontSize = `$${keyof typeof theme.fontSizes}`;
type FontFamily = `$${keyof typeof theme.fonts}`;
type FontWeight = "bold" | "normal";
type TextAlign = "center" | "left" | "right";

interface THtml {
  html?: string;
  highlightColor?: string | MediaTypeMap<string>;
  fontSize?: FontSize | MediaTypeMap<FontSize>;
  fontFamily?: FontFamily | MediaTypeMap<FontFamily>;
  fontWeight?: FontWeight | MediaTypeMap<FontWeight>;
  marginTop?: string | number | MediaTypeMap<string | number>;
  marginBottom?: string | number | MediaTypeMap<string | number>;
  textAlign: TextAlign | MediaTypeMap<TextAlign>;
}

const SHtml = styled("div", {});

export const Html: React.FC<THtml> = (props) => {
  return (
    <SHtml
      dangerouslySetInnerHTML={{ __html: props.html || "" }}
      css={parseMediaProps(props, ["html"], "*")}
    />
  );
};
