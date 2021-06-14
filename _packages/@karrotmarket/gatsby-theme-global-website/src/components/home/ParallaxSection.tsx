import * as React from "react";

import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import { styled } from "../../gatsby-theme-stitches/stitches.config";

import { Flex } from "../Flex";
import { Space } from "../Space";
import BackgroundImage from "../BackgroundImage";

import { ReactComponent as KarrotIcon } from "../../icons/karrot.svg";

type ParallaxIconType = "Karrot";
const ParallaxIcon: { [key in ParallaxIconType]: React.FC } = {
  Karrot: KarrotIcon,
};

export const query = graphql`
  fragment ParallaxSection_content on PrismicGlobalContentsDataMainBodyParallaxSection {
    primary {
      title {
        html
      }
      top_icon
      top_text {
        text
      }
      background_image {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
      }
    }
  }
`;

type ParallaxSectionProps = {
  content: GatsbyTypes.ParallaxSection_contentFragment;
};

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ content }) => {
  if (!content.primary) return <></>;

  const { title, top_icon, top_text, background_image } = content.primary;
  const TopIcon = ParallaxIcon[top_icon as ParallaxIconType];

  const bgImage = getImage(
    background_image?.localFile?.childImageSharp?.gatsbyImageData as any
  );

  return (
    <ParallaxProvider>
      <Section>
        <Parallax
          y={[-25, 25]}
          styleInner={{ height: "100%" }}
          styleOuter={{ width: "100%" }}
        >
          <Background>
            <BackgroundImage
              image={bgImage}
              objectPosition={{
                "@i": "bottom 50% left 45%",
                "@sm": "bottom 30% left 50%",
                "@md": "bottom 20% left 50%",
              }}
            ></BackgroundImage>
          </Background>
        </Parallax>
        <Container>
          <Flex rowCenterY>
            <TopIcon></TopIcon>
            <Space w={4}></Space>
            <TopText>{top_text?.text}</TopText>
          </Flex>
          <Space h={12}></Space>
          <Title dangerouslySetInnerHTML={{ __html: title.html }}></Title>
        </Container>
      </Section>
    </ParallaxProvider>
  );
};

const Section = styled("section", {
  overflow: "hidden",
  height: "400px",
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@md": {
    height: "600px",
  },
});

const Container = styled("div", {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: 0,
  width: "$maxContent",
  margin: "0 auto",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const Title = styled("h2", {
  "*": {
    fontSize: "$heading5",
    lineHeight: "$heading5",

    "@md": {
      fontSize: "$heading2",
      lineHeight: "$heading2",
    },
  },
});

const TopText = styled("div", {
  fontSize: "$body1",
  lineHeight: "$body1",
  "@md": {
    fontSize: "$subtitle3",
    lineHeight: "$subtitle3",
  },
});

const Background = styled("div", {
  height: "600px",
  width: "100%",
  position: "relative",

  "@md": {
    height: "800px",
  },
});

export default ParallaxSection;
