import * as React from "react";

import { rem } from "polished";
import { graphql } from "gatsby";

import { styled } from "../../gatsby-theme-stitches/stitches.config";

import { Flex } from "../Flex";
import { Space } from "../Space";
import Image from "../Image";

export const query = graphql`
  fragment CenterSection_content on PrismicGlobalContentsDataMainBodyCentreSection {
    primary {
      title {
        text
      }
      text {
        html
      }
      image {
        url
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

type CentereSectionProps = {
  content: GatsbyTypes.CenterSection_contentFragment;
};

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
        <Title>{title.text}</Title>
        <Text dangerouslySetInnerHTML={{ __html: text.html }} />
        <Space h={12}></Space>
      </Flex>
    </Section>
  );
};

const Title = styled("h2", {
  fontSize: "$heading4",
  lineHeight: "$heading4",
  marginBottom: rem(6),

  "@md": {
    fontSize: "$heading2",
    lineHeight: "$heading2",
    marginBottom: rem(14),
  },
});

const Text = styled("div", {
  "*": {
    fontSize: "$body1",
    lineHeight: "$body1",
    marginBottom: rem(16),

    "@md": {
      textAlign: "center",
      fontSize: "$subtitle3",
      lineHeight: "$subtitle3",
      marginBottom: 0,
    },
  },
});

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

export default CenterSection;
