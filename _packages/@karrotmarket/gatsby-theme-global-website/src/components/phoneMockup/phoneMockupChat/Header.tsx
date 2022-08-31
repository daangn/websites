import * as React from "react";
import { em } from "polished";

import { Flex } from "../../Flex";
import { styled } from "../../../gatsby-theme-stitches/config";

interface HeaderProps {
  name: string;
  temperature: number;
  info: string;
}

const Header: React.FC<HeaderProps> = ({ name, temperature, info }) => (
  <Wrapper>
    <Container>
      <UserName>{name}</UserName>
      <UserTemperature>{temperature}</UserTemperature>
    </Container>
    <Info>{info}</Info>
  </Wrapper>
);

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
});
const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
const UserName = styled("div", {
  color: "$gray900",
  fontSize: em(16),
  marginRight: em(5),
  fontWeight: "bold",
});
const UserTemperature = styled("div", {
  color: "$carrot500",
  background: "rgba(255, 114, 54, 0.12)",
  padding: `${em(4)} ${em(10)}`,
  borderRadius: em(100),
  fontSize: em(10),
  fontWeight: "bold",
  letterSpacing: em(-0.1),
});
const Info = styled("div", {
  color: "$gray600",
  fontSize: em(11),
  textAlign: "center",
});

export default Header;
