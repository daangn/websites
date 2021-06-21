import * as React from "react";

import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "../../gatsby-theme-stitches/stitches.config";

import { Space } from "../Space";

export const query = graphql`
  fragment SubtitleAndText_content on PrismicGlobalContentsDataAboutBodySubtitleAndText {
    primary {
      subtitle {
        text
      }
      text {
        html
      }
    }
  }
`;

const SubtitleAndText: React.FC<SubtitleAndTextProps> = ({ content }) => {
  if (!content.primary) throw new Error("No data");

  const { subtitle, text } = content.primary;

  return (
    <Section>
      <Space h={72}></Space>
      <Title>{subtitle.text}</Title>
      <Space h={14}></Space>
      <Text dangerouslySetInnerHTML={{ __html: text.html }}></Text>
      {/* <Html html={text?.html} fontFamily="$system"></Html> */}
    </Section>
  );
};

type SubtitleAndTextProps = {
  content: GatsbyTypes.SubtitleAndText_contentFragment;
};

const Section = styled("section", {
  "p:not(:last-child)": {
    marginBottom: rem(20),
    "@md": {
      marginBottom: rem(8),
    },
  },
});

const Title = styled("h2", {
  fontSize: "$heading5",
  lineHeight: "$heading5",
});

const Text = styled("div", {
  "*": {
    fontFamily: "$system",

    fontSize: "$body1",
    lineHeight: "$body1",
  },
});

export default SubtitleAndText;
