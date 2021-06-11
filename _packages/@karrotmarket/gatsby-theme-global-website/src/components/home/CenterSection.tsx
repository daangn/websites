import React from "react";
import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { Html } from "../Html";
import { Flex } from "../Flex";
import { Space } from "../Space";
import Image from "../Image";

type CentereSectionProps = {
  content: GatsbyTypes.CenterSection_contentFragment;
};

export const query = graphql`
  fragment CenterSection_content on PrismicGlobalContentsDataMainBodyCentreSection {
    primary {
      title {
        html
      }
      text {
        text
        html
      }
      image {
        url
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        dimensions {
          width
          height
        }
        alt
        thumbnails {
          mobile {
            url
            dimensions {
              width
              height
            }
          }
        }
      }
    }
  }
`;

const Section = styled("section", {
  width: "100%",
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  padding: `${rem(56)} ${rem(36)}`,
  "@md": {
    flexDirection: "column",
    height: "700px",
    padding: 0,
  },
});

const CenterSection: React.FC<CentereSectionProps> = ({ content }) => {
  if (!content.primary) return <></>;

  const { title, image, text } = content.primary;

  return (
    <Section>
      <Image
        alt={"center-image" || image?.alt}
        image={image?.localFile?.childImageSharp?.gatsbyImageData}
        width={{
          "@i": image?.thumbnails?.mobile?.dimensions?.width / 2,
          "@md": image?.dimensions?.width / 2,
        }}
        height={{
          "@i": image?.thumbnails?.mobile?.dimensions?.height / 2,
          "@md": image?.dimensions?.height / 2,
        }}
      ></Image>
      <Flex colCenterX>
        <Html html={title?.html} marginBottom={{ "@i": 6, "@md": 14 }}></Html>
        <Html
          html={text?.html}
          fontSize={{ "@i": "$body1", "@md": "$subtitle3" }}
          marginBottom={{ "@i": 16 }}
          textAlign="center"
        ></Html>
        <Space h={12}></Space>
      </Flex>
    </Section>
  );
};

export default CenterSection;
