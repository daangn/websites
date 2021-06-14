import * as React from "react";

import { graphql } from "gatsby";
import { styled } from "../../gatsby-theme-stitches/stitches.config";

import { Grid } from "../Grid";
import { Space } from "../Space";
import Image from "../Image";

export const query = graphql`
  fragment SubtitleAndImages_content on PrismicGlobalContentsDataAboutBodySubtitleAndImages {
    primary {
      subtitle {
        text
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

type SubtitleAndImagesProps = {
  content: GatsbyTypes.SubtitleAndImages_contentFragment;
};

const SubtitleAndImages: React.FC<SubtitleAndImagesProps> = ({ content }) => {
  if (!content.primary || !content.items) throw new Error("No data");
  if (!content.items[0]?.image?.localFile) return <></>;

  const { subtitle } = content.primary;

  return (
    <Section>
      <Space h={72}></Space>
      <Title>{subtitle.text}</Title>
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

const Section = styled("section", {});

const Title = styled("h2", {
  fontSize: "$heading5",
  lineHeight: "$heading5",
});

export default SubtitleAndImages;
