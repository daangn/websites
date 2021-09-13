import { FC } from "react";
import { styled } from "gatsby-theme-stitches/src/config";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { rem, em } from "polished";

import { parseTextNewline } from "../util/parse";

interface Props {
  image_data: any;
  title?: string;
  sub_title?: string;
}

const TitleAndIllustration: FC<Props> = ({ image_data, title, sub_title }) => {
  const image = image_data && getImage(image_data);

  if (!image) {
    return null;
  }

  return (
    <Wrapper>
      <TextBox>
        <Title>{parseTextNewline(title)}</Title>
        <SubTitle>{parseTextNewline(sub_title)}</SubTitle>
      </TextBox>
      <Box>
        <GatsbyImage image={image} alt="" />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  padding: `${rem(72)} ${rem(120)}`,
  maxWidth: "1140px",
});

const Box = styled("div", {
  flex: "1 1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const TextBox = styled(Box, {
  flexDirection: "column",
  marginRight: rem(100),
});

const Title = styled("h1", {
  fontSize: rem(36),
  textAlign: "center",
  marginBottom: rem(24),
  whiteSpace: "pre",
});

const SubTitle = styled("h6", {
  fontSize: rem(24),
  textAlign: "center",
  fontWeight: "normal",
});

export default TitleAndIllustration;
