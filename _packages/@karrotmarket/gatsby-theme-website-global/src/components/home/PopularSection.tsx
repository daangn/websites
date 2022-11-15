import * as React from "react";

import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/config";

export const query = graphql`
  fragment PopularSection_content on PrismicGlobalContentsDataMainBodyPopularSection {
    primary {
      title {
        text
      }
      more_button
    }
  }
  fragment PopularSection_articles on HotArticle {
    price
    region
    image
    articleId
  }
`;

type ParallaxSectionProps = {
  content: GatsbyTypes.PopularSection_contentFragment;
  articles: GatsbyTypes.PopularSection_articlesFragment;
};

const PopularSection: React.FC<ParallaxSectionProps> = (props) => {
  const { content, articles } = props;

  if (!content.primary || !articles || articles?.length === 0)
    return <React.Fragment></React.Fragment>;

  const { more_button, title } = content.primary;

  return (
    <Section>
      <Container>
        <Title>{title.text}</Title>
        <ItemList>
          {articles.slice(0, 6).map(({ articleId, price, region, image }) => (
            <Item
              key={articleId}
              id={articleId}
              image={image}
              price={price}
              region={region}
            ></Item>
          ))}
        </ItemList>
        <MoreButton href="/hot_articles">{more_button}</MoreButton>
      </Container>
    </Section>
  );
};

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

const ItemList = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "1fr",
  marginTop: rem(28),
  columnGap: rem(16),
  rowGap: rem(32),
  padding: rem(16),
  width: "100%",
  boxSizing: "border-box",

  "@md": {
    display: "flex",
    flexDirection: "row",
    marginTop: rem(56),
    columnGap: rem(26),
    rowGap: 0,
    padding: 0,
    width: "initial",
  },
});

const Title = styled("h2", {
  fontSize: "$subtitle3",
  lineHeight: "$subtitle3",

  "@md": {
    fontSize: "$heading5",
    lineHeight: "$heading5",
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

interface ItemProps {
  id: number;
  price: string;
  region: string;
  image: string;
}

const Item: React.FC<ItemProps> = ({ image, price, region, id }) => (
  <ItemContainer href={`/articles/${id}`}>
    <ItemImage
      src={image}
      width="100%"
      height="100%"
      alt="hot-article"
    ></ItemImage>
    <ItemPrice>{price}</ItemPrice>
    <ItemRegion>{region}</ItemRegion>
  </ItemContainer>
);

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
  fontFamily: "$system",
});

export default PopularSection;
