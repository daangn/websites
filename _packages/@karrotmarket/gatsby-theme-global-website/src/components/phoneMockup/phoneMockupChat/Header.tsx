import { Flex } from "../../Flex";
import { styled } from "../../../gatsby-theme-stitches/stitches.config";
import { em } from "polished";

const UserName = styled("div", {
  color: "$gray900",
  fontSize: em(17),
  marginRight: em(4),
  fontWeight: "bold",
});
const UserTemperature = styled("div", {
  color: "#1561A9",
  border: `${em(2)} solid #1561A9`,
  borderRadius: em(100),
  fontSize: em(11),
  fontWeight: "bold",
  padding: `0 ${em(6)}`,
});
const Info = styled("div", {
  color: "$gray600",
  fontSize: em(12.25),
});

interface HeaderProps {
  name: string;
  temperature: number;
  info: string;
}

const Header: React.FC<HeaderProps> = ({ name, temperature, info }) => (
  <Flex column>
    <Flex rowCenterY>
      <UserName>{name}</UserName>
      <UserTemperature>{temperature}</UserTemperature>
    </Flex>
    <Info>{info}</Info>
  </Flex>
);

export default Header;
