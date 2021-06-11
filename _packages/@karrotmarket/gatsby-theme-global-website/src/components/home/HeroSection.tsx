import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { Html } from "../Html";
import { Flex } from "../Flex";
import { Space } from "../Space";
import AppLink from "../AppLink";
import Image from "../Image";
import BackgroundImage from "../BackgroundImage";

type HeroSectionProps = {
  content: GatsbyTypes.HeroSection_contentFragment;
  links: GatsbyTypes.DownloadSection_linksFragment;
};

export const query = graphql`
  fragment HeroSection_content on PrismicGlobalContentsDataMainBodyHeroSection {
    primary {
      title {
        html
        text
      }
      text {
        html
        text
      }
      background_color
      background_image {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
      }
      side_image {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: NONE)
          }
        }
        dimensions {
          width
          height
        }
        alt
        thumbnails {
          mobile {
            dimensions {
              width
              height
            }
          }
        }
      }
    }
  }
  fragment HeroSection_links on PrismicGlobalContentsDataType {
    ...AppLink_links
  }
`;

const Section = styled("section", {
  height: "582px",
  width: "100%",
  position: "relative",
  "@md": {
    height: "780px",
  },
});

const Container = styled("div", {
  height: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  textAlign: "center",
  "@md": {
    width: "$maxContent",
    flexDirection: "row",
    textAlign: "left",
    justifyContent: "initial",
    alignItems: "initial",
  },
});

const HeroSection: React.FC<HeroSectionProps> = ({ content, links }) => {
  if (!content.primary || !links) return <></>;
  const { title, background_image, side_image } = content.primary;

  const bgImage = getImage(
    background_image?.localFile?.childImageSharp?.gatsbyImageData as any
  );

  const sideImage = getImage(
    side_image?.localFile?.childImageSharp?.gatsbyImageData as any
  );

  return (
    <Section>
      <BackgroundImage
        image={bgImage}
        objectPosition={{ "@i": "bottom 0px right -70px", "@md": "50% 50%" }}
      ></BackgroundImage>
      <Container>
        <Flex colCenterY>
          <Html html={title?.html} />
          <Space h={{ "@i": 0, "@md": 36 }}></Space>
          <AppLink theme="dark" type="desktop" links={links}></AppLink>
        </Flex>

        <Flex ai="flex-end">
          <Image
            alt="side-image"
            image={sideImage}
            width={{
              "@i": side_image?.thumbnails?.mobile?.dimensions?.width / 2,
              "@md": side_image?.dimensions?.width / 2,
            }}
            height={{
              "@i": side_image?.thumbnails?.mobile?.dimensions?.height / 2,
              "@md": side_image?.dimensions?.height / 2,
            }}
          ></Image>
        </Flex>
      </Container>
    </Section>
  );
};

export default HeroSection;
