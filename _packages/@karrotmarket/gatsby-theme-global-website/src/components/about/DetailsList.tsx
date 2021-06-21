import * as React from "react";

import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "../../gatsby-theme-stitches/stitches.config";

type DetailsListProps = {
  content: GatsbyTypes.DetailsList_contentFragment;
};

export const query = graphql`
  fragment DetailsList_content on PrismicGlobalContentsDataAboutBodyDetailsList {
    items {
      label
      text
    }
  }
`;

const DetailsList: React.FC<DetailsListProps> = ({ content }) => {
  if (!content.items) return <></>;

  return (
    <Section>
      <Grid>
        {content.items.map(({ text, label }) => (
          <>
            <Label>{label}</Label>
            <Text>{text}</Text>
          </>
        ))}
      </Grid>
    </Section>
  );
};

const Section = styled("section", {});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "max-content 1fr",
  gridColumnGap: rem(24),
  gridRowGap: rem(2),
  marginTop: rem(28),

  "*": {
    fontSize: "$body1",
    fontFamily: "$system",
  },
});

const Label = styled("div", {
  color: "$gray900",
});
const Text = styled("div", {
  color: "$gray600",
});

export default DetailsList;
