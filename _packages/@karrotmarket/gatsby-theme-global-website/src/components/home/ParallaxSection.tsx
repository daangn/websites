import * as React from "react";

import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from "react-scroll-parallax";

import { styled } from "../../gatsby-theme-stitches/stitches.config";

import { Flex } from "../Flex";
import { Space } from "../Space";
import BackgroundImage from "../BackgroundImage";
import Image from "../Image";

import { ReactComponent as KarrotIcon } from "../../icons/karrot.svg";
import { rem } from "polished";

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
        <ParallaxBanner
          style={{ height: "100%" }}
          layers={[
            {
              children: (
                <Background>
                  <BackgroundImage
                    image={bgImage}
                    objectPosition={{
                      "@i": "bottom 50% left 50%",
                      "@sm": "bottom 50% left 50%",
                      "@md": "bottom 50% left 50%",
                    }}
                    height={{
                      "@i": "70%!important",
                      "@sm": "100%!important",
                      "@md": "100%!important",
                    }}
                  ></BackgroundImage>
                </Background>
              ),
              amount: 0.2,
              expanded: true,
            },
          ]}
        >
          <Container>
            <Flex rowCenterY>
              <TopIcon></TopIcon>
              <Space w={4}></Space>
              <TopText>{top_text?.text}</TopText>
            </Flex>
            <Space h={12}></Space>
            <Title dangerouslySetInnerHTML={{ __html: title.html }}></Title>
          </Container>
        </ParallaxBanner>
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
  height: "100%",
});

const Title = styled("div", {
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
  transform: "translateY(12%)",
  height: "600px",
  width: "100%",
  position: "relative",

  "@sm": {
    transform: "translateY(0%)",
  },
  "@md": {
    height: "800px",
    transform: "translateY(5%)",
  },
});

export default ParallaxSection;
