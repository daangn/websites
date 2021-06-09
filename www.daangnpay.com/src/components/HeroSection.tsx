import { FC } from "react";
import { styled, keyframes } from "gatsby-theme-stitches/src/stitches.config";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { rem, em } from "polished";

interface Props {
  image_data: any;
  alt?: string;
  title_key_text?: string;
  title?: string;
}

const HeroSection: FC<Props> = ({ image_data, alt, title_key_text, title }) => {
  const image = image_data && getImage(image_data);

  if (!image) {
    return null;
  }

  return (
    <ImageContainer
      css={{
        "@md": {
          paddingX: 0,
        },
      }}
    >
      <GatsbyImage image={image} alt={alt || ""} />
      <Layer>
        <PageTitle>
          <KeyText>{title_key_text}</KeyText>
          {title}
        </PageTitle>
      </Layer>
    </ImageContainer>
  );
};

const ImageContainer = styled("figure", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
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

const textSparkle = keyframes({
  "0%": {
    color: "$carrot50",
  },
  "20%": {
    color: "$carrot100",
  },
  "40%": {
    color: "$carrot200",
  },
  "60%": {
    color: "$carrot300",
  },
  "80%": {
    color: "$carrot200",
  },
  "100%": {
    color: "$carrot100",
  },
});

const KeyText = styled("span", {
  animation: `${textSparkle} 2.5s infinite`,
});

const PageTitle = styled("h1", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: rem(72),
  color: "white",
  textAlign: "center",
  lineHeight: rem(90),
});

export default HeroSection;
