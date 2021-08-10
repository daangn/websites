import * as React from "react";

import { rem } from "polished";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { styled } from "../../gatsby-theme-stitches/stitches.config";

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
      <Title>{subtitle.text}</Title>
      <Grid>
        {content.items.map((item) => (
          <Image
            alt={"inverstor" || item?.image?.alt}
            image={item?.image?.localFile?.childImageSharp?.gatsbyImageData}
            css={{
              width: item?.image?.thumbnails?.mobile?.dimensions?.width / 3,
              "@md": {
                width: item?.image?.dimensions?.width / 2,
              },
            }}
          ></Image>
        ))}
      </Grid>
    </Section>
  );
};

const Section = styled("section", {});

const Grid = styled("div", {
  display: "grid",

  gridRowGap: rem(10),
  gridTemplateRows: "repeat(3 ,1fr)",
  gridTemplateColumns: "repeat(2, 1fr)",

  "@md": {
    gridRowGap: rem(0),
    gridTemplateRows: "repeat(2 ,1fr)",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

const Image = styled(GatsbyImage, {});

const Title = styled("h2", {
  fontSize: "$heading5",
  lineHeight: "$heading5",
  marginTop: rem(72),
  marginBottom: rem(14),
});

export default SubtitleAndImages;
