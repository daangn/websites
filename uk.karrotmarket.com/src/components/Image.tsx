import React, { useMemo } from "react";
import { MediaTypeMap, styled } from "gatsby-theme-stitches/src/stitches.config";
import { parseMediaProps } from "@src/util";

interface TImage {
    src?: string;
    alt?: string;
    width?: string | number | MediaTypeMap<string | number>;
    height?: string | number | MediaTypeMap<string | number>;
}

const SImage = styled("img", {});

const Image: React.FC<TImage> = (props) => {
    const css = useMemo(() => parseMediaProps(props, ["src", "alt"]), [props]);
    return <SImage src={props.src} alt={props.alt} css={css} />;
};

export default Image;
