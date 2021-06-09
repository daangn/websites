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

interface THtml {
  html?: string;
  highlightColor?: string | MediaTypeMap<string>;
  fontSize?: FontSize | MediaTypeMap<FontSize>;
  fontFamily?: FontFamily | MediaTypeMap<FontFamily>;
  fontWeight?: FontWeight | MediaTypeMap<FontWeight>;
  marginTop?: string | number | MediaTypeMap<string | number>;
  marginBottom?: string | number | MediaTypeMap<string | number>;
}

const SHtml = styled("div", {});

export const Html: React.FC<THtml> = (props) => {
  const css = React.useMemo(() => parseMediaProps(props, ["html"], "*"), [props]);
  return (
    <SHtml dangerouslySetInnerHTML={{ __html: props.html || "" }} css={css} />
  );
};
