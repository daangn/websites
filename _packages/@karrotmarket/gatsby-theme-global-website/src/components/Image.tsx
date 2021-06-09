import React, { useMemo } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { MediaTypeMap, styled } from "../gatsby-theme-stitches/stitches.config";
import { parseMediaProps } from "../util";

interface TImage {
  image?: any;
  alt?: any;
  width?: string | number | MediaTypeMap<string | number>;
  height?: string | number | MediaTypeMap<string | number>;
}

const SImage = styled(GatsbyImage, {});

const Image: React.FC<TImage> = (props) => {
  const css = useMemo(() => parseMediaProps(props, ["image", "alt"]), [props]);
  return <SImage image={props.image} alt={props.alt} css={css} />;
};

export default Image;
