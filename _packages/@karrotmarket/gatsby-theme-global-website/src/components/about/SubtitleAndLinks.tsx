import * as React from "react";

import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "../../gatsby-theme-stitches/stitches.config";

export const query = graphql`
  fragment SubtitleAndLinks_content on PrismicGlobalContentsDataAboutBodySubtitleAndLinks {
    primary {
      subtitle {
        text
      }
    }
    items {
      text
      link {
        url
      }
      date(formatString: $dateFormat)
    }
  }
`;

type SubtitleAndLinksProps = {
  content: GatsbyTypes.SubtitleAndLinks_contentFragment;
};

const SubtitleAndLinks: React.FC<SubtitleAndLinksProps> = ({ content }) => {
  if (!content.primary || !content.items) throw new Error("No data");

  const { subtitle } = content.primary;

  return (
    <Section>
      <Title>{subtitle.text}</Title>
      <Grid>
        {content.items.map((item) => (
          <LinkContainer>
            <Link href={item?.link?.url}>{item?.text}</Link>
            {item.date}
          </LinkContainer>
        ))}
      </Grid>
    </Section>
  );
};

const Grid = styled("div", {
  display: "grid",

  gridRowGap: rem(20),

  "@md": {
    gridRowGap: rem(12),
  },
});

const Section = styled("section", {});

const Title = styled("h2", {
  fontSize: "$heading5",
  lineHeight: "$heading5",

  marginTop: rem(72),
  marginBottom: rem(14),
});

const LinkContainer = styled("div", {
  display: "inline",
  color: "$gray600",
  fontFamily: "$system",
});

const Link = styled("a", {
  marginRight: rem(8),
  fontFamily: "$system",
});

export default SubtitleAndLinks;
