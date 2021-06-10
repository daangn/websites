import React from "react";
import { styled } from "gatsby-theme-stitches/src/stitches.config";
import { useInView } from "react-intersection-observer";
import { graphql } from "gatsby";

import { Flex } from "../Flex";
import { Space } from "../Space";
import Image from "../Image";
import { getImage } from "gatsby-plugin-image";
import { rem } from "polished";
import { motion } from "framer-motion";

type IllustrationSectionProps = {
  content: GatsbyTypes.IllustrationSection_contentFragment;
};

export const query = graphql`
  fragment IllustrationSection_content on PrismicGlobalContentsDataMainBodyIllustrationSection {
    primary {
      title {
        html
      }
      text {
        html
      }
      inverted
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: NONE)
          }
        }
      }
    }
  }
`;

const Section = styled("section", {
  "*": {
    fontFamily: "$noto",
  },
  height: "auto",
  width: "100%",
  position: "relative",
  marginTop: rem(120),

  "@md": {
    marginTop: rem(160),
    height: "500px",
  },
});

const Container = styled(motion.div, {
  height: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  textAlign: "left",
  paddingLeft: rem(24),
  paddingRight: rem(24),
  "@md": {
    padding: 0,
    width: "$maxContent",
    flexDirection: "row",
    textAlign: "left",
    justifyContent: "initial",
    alignItems: "initial",
  },
  variants: {
    inverted: {
      false: {
        flexDirection: "column",
        "@md": {
          flexDirection: "row-reverse",
        },
      },
    },
  },
});

const Title = styled("h2", {
  "*": {
    marginBottom: rem(24),
    fontSize: "$heading3",
    "@md": {
      fontSize: "$heading2",
      lineHeight: "115%",
    },
  },
});

const Text = styled("div", {
  "*": {
    marginBottom: rem(64),
    fontSize: "$subtitle2",
    "@md": {
      marginBottom: rem(0),
      fontSize: "$subtitle1",
      marginRight: rem(40),
    },
  },
});

const IllustrationSection: React.FC<IllustrationSectionProps> = ({
  content,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  if (!content.primary) return <></>;
  const { title, text, image, inverted } = content.primary;

  const sideImage = getImage(
    image?.localFile?.childImageSharp?.gatsbyImageData as any
  );

  return (
    <Section ref={ref}>
      <Container
        inverted={inverted}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 130,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <Flex colCenterY flex={1}>
          <Title dangerouslySetInnerHTML={{ __html: title.html }}></Title>
          <Text dangerouslySetInnerHTML={{ __html: text.html }}></Text>
        </Flex>

        <Flex ai="flex-end" flex={1}>
          <Image image={sideImage}></Image>
        </Flex>
      </Container>
    </Section>
  );
};

export default IllustrationSection;
