import * as React from "react";

import { rem } from "polished";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { styled } from "../../gatsby-theme-stitches/stitches.config";

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
        css={{
          width: image?.thumbnails?.mobile?.dimensions?.width / 2,
          height: image?.thumbnails?.mobile?.dimensions?.height / 2,
          "@md": {
            width: image?.dimensions?.width / 2,
            height: image?.dimensions?.height / 2,
          },
        }}
      />
      <BottomContainer>
        <Title>{title.text}</Title>
        <Text dangerouslySetInnerHTML={{ __html: text.html }} />
      </BottomContainer>
    </Section>
  );
};

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
    marginBottom: rem(28),

    "@md": {
      textAlign: "center",
      fontSize: "$subtitle3",
      lineHeight: "$subtitle3",
      marginBottom: rem(12),
    },
  },
});

const Image = styled(GatsbyImage, {});

const BottomContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

export default CenterSection;
