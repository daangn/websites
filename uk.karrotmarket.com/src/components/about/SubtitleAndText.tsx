import React from "react";
import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { Html } from "@src/components/Html";
import { Space } from "@src/components/Space";

type SubtitleAndTextProps = {
  content: GatsbyTypes.SubtitleAndText_contentFragment;
};

export const query = graphql`
  fragment SubtitleAndText_content on PrismicGlobalContentsDataAboutBodySubtitleAndText {
    primary {
      subtitle {
        html
      }
      text {
        html
      }
    }
  }
`;

const Section = styled("section", {
  "p:not(:last-child)": {
    marginBottom: rem(20),
    "@md": {
      marginBottom: rem(8),
    },
  },
});

const SubtitleAndText: React.FC<SubtitleAndTextProps> = ({ content }) => {
  if (!content.primary) throw new Error("No data");

  const { subtitle, text } = content.primary;

  return (
    <Section>
      <Space h={72}></Space>
      <Html html={subtitle?.html}></Html>
      <Space h={12}></Space>
      <Html html={text?.html} fontFamily="$default"></Html>
    </Section>
  );
};

export default SubtitleAndText;
