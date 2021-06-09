import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { MediaTypeMap, styled } from "../gatsby-theme-stitches/stitches.config";
import { parseMediaProps } from "../util";

interface TBackgroundImage {
  image?: any;
  alt?: any;
  width?: string | number | MediaTypeMap<string | number>;
  height?: string | number | MediaTypeMap<string | number>;
  objectPosition?: string | MediaTypeMap<string>;
}

const Wrapper = styled("div", {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  zIndex: -1,
});

const SBackgroundImage = styled(GatsbyImage, {
  width: "100%",
  height: "100%",
});

const BackgroundImage: React.FC<TBackgroundImage> = (props) => {
  const css = React.useMemo(() => parseMediaProps(props, ["image", "alt"]), [props]);
  return (
    <Wrapper>
      <SBackgroundImage
        image={props.image}
        alt={props.alt}
        css={{ img: css }}
      />
    </Wrapper>
  );
};

export default BackgroundImage;
