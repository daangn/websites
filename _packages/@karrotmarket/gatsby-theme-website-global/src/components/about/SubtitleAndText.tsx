import * as React from "react";

import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/config";

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
      <Title>{subtitle.text}</Title>
      <Text dangerouslySetInnerHTML={{ __html: text.html }}></Text>
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

  marginTop: rem(72),
  marginBottom: rem(14),
});

const Text = styled("div", {
  "*": {
    fontFamily: "$system",

    fontSize: "$body1",
    lineHeight: "$body1",
  },
});

export default SubtitleAndText;
