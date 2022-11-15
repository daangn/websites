import * as React from "react";
import { em } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";

import { Flex } from "../../Flex";
import { Space } from "../../Space";

interface ItemProps {
  image: string;
  name: string;
  price: string;
}

const Item: React.FC<ItemProps> = ({ image, name, price }) => (
  <Wrapper>
    <Image src={image} />
    <Container>
      <Name>{name}</Name>
      <Price>{price}</Price>
    </Container>
  </Wrapper>
);

const Wrapper = styled("div", {
  width: "100%",
  boxSizing: "border-box",
  padding: em(16),
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid $gray200",
  zIndex: 1,
  background: "white",
});

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const Image = styled("img", {
  width: em(50),
  height: em(50),
  borderRadius: em(4),
  marginRight: em(20),
});
const Name = styled("div", {
  fontSize: em(14),
  marginBottom: em(4),
});
const Price = styled("div", {
  fontSize: em(14),
  fontWeight: "bold",
});

export default Item;
