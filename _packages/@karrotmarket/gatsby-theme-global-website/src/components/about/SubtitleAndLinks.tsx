import React from "react";
import { rem } from "polished";
import { graphql } from "gatsby";
import { format } from "date-fns";
import { styled } from "../../gatsby-theme-stitches/stitches.config";

import { Grid } from "../Grid";
import { Html } from "../Html";
import { Space } from "../Space";

type SubtitleAndLinksProps = {
  content: GatsbyTypes.SubtitleAndLinks_contentFragment;
};

export const query = graphql`
  fragment SubtitleAndLinks_content on PrismicGlobalContentsDataAboutBodySubtitleAndLinks {
    primary {
      subtitle {
        html
      }
    }
    items {
      text
      link {
        url
      }
      date
    }
  }
`;

const Section = styled("section", {});

const LinkContainer = styled("div", {
  display: "inline",
  color: "$gray600",
  fontFamily: "$default",
});

const Link = styled("a", {
  marginRight: rem(8),
  fontFamily: "$default",
});

const SubtitleAndLinks: React.FC<SubtitleAndLinksProps> = ({ content }) => {
  if (!content.primary || !content.items) throw new Error("No data");

  const { subtitle } = content.primary;

  return (
    <Section>
      <Space h={72}></Space>
      <Html html={subtitle?.html}></Html>
      <Space h={14}></Space>
      <Grid rowGap={{ "@i": 20, "@md": 12 }}>
        {content.items.map((item) => (
          <LinkContainer>
            <Link href={item?.link?.url}>{item?.text}</Link>
            {format(new Date(item?.date as string), "MMM d, y")}
          </LinkContainer>
        ))}
      </Grid>
    </Section>
  );
};

export default SubtitleAndLinks;
