import React from "react";
import { rem } from "polished";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from "../../gatsby-theme-stitches/stitches.config";

import { Grid } from "../Grid";
import { Html } from "../Html";
import { Space } from "../Space";
import Image from "../Image";

type SubtitleAndImagesProps = {
  content: GatsbyTypes.SubtitleAndImages_contentFragment;
};

export const query = graphql`
  fragment SubtitleAndImages_content on PrismicGlobalContentsDataAboutBodySubtitleAndImages {
    primary {
      subtitle {
        html
      }
    }
    items {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        url
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

const Section = styled("section", {});

const SubtitleAndImages: React.FC<SubtitleAndImagesProps> = ({ content }) => {
  if (!content.primary || !content.items) throw new Error("No data");
  if (!content.items[0]?.image?.localFile) return <></>;

  const { subtitle } = content.primary;

  return (
    <Section>
      <Space h={72}></Space>
      <Html html={subtitle?.html} fontSize={"$heading5"}></Html>
      <Space h={14}></Space>
      <Grid
        gridTemplateColumns={{
          "@i": "repeat(2, 1fr)",
          "@md": "repeat(3, 1fr)",
        }}
        gridTemplateRows={{ "@i": "repeat(3 ,1fr)", "@md": "repeat(2 ,1fr)" }}
        rowGap={{ "@i": 10 }}
      >
        {content.items.map((item) => (
          <Image
            alt={"inverstor" || item?.image?.alt}
            image={item?.image?.localFile?.childImageSharp?.gatsbyImageData}
            width={{
              "@i": item?.image?.thumbnails?.mobile?.dimensions?.width / 3,
              "@md": item?.image?.dimensions?.width / 2,
            }}
          ></Image>
        ))}
      </Grid>
    </Section>
  );
};

export default SubtitleAndImages;
