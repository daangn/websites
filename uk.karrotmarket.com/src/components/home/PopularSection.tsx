import React from "react";
import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { MOCK_ARTICLES } from "@src/const";
import { Grid } from "@src/components/Grid";
import { Html } from "@src/components/Html";

const ItemContainer = styled("a", {
  display: "flex",
  position: "relative",
  flexDirection: "column",
  color: "$gray900",
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
  },
});
const ItemImage = styled("img", {
  width: "100%",
  height: "auto",
  minWidth: rem(100),
  minHeight: rem(100),

  objectFit: "cover",
  borderRadius: rem(6),
  marginBottom: rem(8),

  "@md": {
    marginBottom: rem(12),
    width: rem(170),
    height: rem(170),
  },
});
const ItemPrice = styled("div", {
  fontSize: "$subtitle3",
  "@md": {
    marginBottom: rem(4),
  },
});
const ItemRegion = styled("div", {
  fontSize: "$caption2",
  fontFamily: "$default",
});

interface ItemProps {
  id: number;
  price: string;
  region: string;
  image: string;
}

const Item: React.FC<ItemProps> = ({ image, price, region, id }) => (
  <ItemContainer href={`https://uk.karrotmarket.com/articles/${id}`}>
    <ItemImage src={image}></ItemImage>
    <ItemPrice>{price}</ItemPrice>
    <ItemRegion>{region}</ItemRegion>
  </ItemContainer>
);

type ParallaxSectionProps = {
  content: GatsbyTypes.PopularSection_contentFragment;
  items: GatsbyTypes.PopularSection_itemsFragment;
};

export const query = graphql`
  fragment PopularSection_content on PrismicGlobalContentsDataMainBodyPopularSection {
    primary {
      title {
        html
      }
      more_button
    }
  }
  fragment PopularSection_items on PopularItem {
    price
    region
    image
    id
  }
`;

const Section = styled("section", {
  "@md": {
    height: "600px",
  },
});

const Container = styled("div", {
  height: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: `${rem(56)} 0`,
  "@md": {
    width: "$maxContent",
    padding: 0,
  },
});

const MoreButton = styled("a", {
  fontSize: `$body1`,
  color: `$carrot500`,
  marginTop: rem(36),
  transition: "color 0.3s",
  textDecoration: "underline",
  "&:hover": {
    cursor: "pointer",
    color: "$carrot600",
  },
  "@md": {
    marginTop: rem(72),
  },
});

const PopularSection: React.FC<ParallaxSectionProps> = (props) => {
  const { content, items } = props;
  console.log(props);
  if (!content.primary || !items) return <></>;
  const { more_button, title } = content.primary;

  return (
    <Section>
      <Container>
        <Html html={title?.html}></Html>
        <Grid
          gridTemplateColumns={{
            "@i": "repeat(2, 1fr)",
            "@md": "repeat(6, 1fr)",
          }}
          gridTemplateRows={{ "@i": "repeat(3, 1fr)", "@md": "1fr" }}
          rowGap={{ "@i": 16, "@md": 0 }}
          columnGap={{ "@i": 16, "@md": 26 }}
          marginTop={{ "@i": 28, "@md": 56 }}
          width={{ "@i": "100%", "@md": "auto" }}
          padding={{ "@i": 16, "@md": 0 }}
        >
          {items.map(({ id, price, region, image }) => (
            <Item
              key={id}
              id={id}
              image={image}
              price={price}
              region={region}
            ></Item>
          ))}
        </Grid>
        <MoreButton href="https://uk.karrotmarket.com/hot_articles">
          {more_button}
        </MoreButton>
      </Container>
    </Section>
  );
};

export default PopularSection;
