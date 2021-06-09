import { FC } from 'react';
import { styled } from "gatsby-theme-stitches/src/stitches.config";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { rem, em } from "polished";

import { parseTextNewline } from "../util/parse";

interface Props {
  image_data: any;
  title?: string;
}

const WideBanner: FC<Props> = ({ image_data, title }) => {
  const image = image_data && getImage(image_data);

  return (
    <ImageContainer
      css={{
        "@md": {
          paddingX: 0,
        },
      }}
    >
      <GatsbyImage image={image} alt="banner" />
      <Layer>
        <PageTitle>
          {/* {title} */}
          {parseTextNewline('We allows you to conveniently interaction\\nwith your neighbours in a safe environment.')}
        </PageTitle>
      </Layer>
    </ImageContainer>
  );
};

const ImageContainer = styled("figure", {
  position: "relative",
  display: 'flex',
  justifyContent: 'center',
  variants: {
    expanded: {
      true: {
        paddingX: 0,
      },
      false: {
        paddingX: rem(24),
      },
    },
  },
});

const Layer = styled("div", {
  position: "absolute",
  top: "0",
  left: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "#050f1b7a",
});

const PageTitle = styled("h1", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: em(20),
  fontSize: rem(48),
  color: "white",
  textAlign: "center",
  lineHeight: rem(72),
});

export default WideBanner;
