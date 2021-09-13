import * as React from "react";
import { em } from "polished";

import { Flex } from "../../Flex";
import { styled } from "../../../gatsby-theme-stitches/config";

import { ReactComponent as SearchIcon } from "../../../icons/search.svg";
import { ReactComponent as FilterIcon } from "../../../icons/filter.svg";
import { ReactComponent as BellIcon } from "../../../icons/bell.svg";
import { ReactComponent as ChevronDownIcon } from "../../../icons/chevron-down.svg";

interface HeaderProps {
  region: string;
}

const Header: React.FC<HeaderProps> = ({ region }) => (
  <Wrapper>
    <RegionContainer>
      <RegionName>{region}</RegionName>
      <ChevronDownIcon></ChevronDownIcon>
    </RegionContainer>
    <IconContainer>
      <SearchIcon width={em(20)} height={em(20)}></SearchIcon>
      <FilterIcon width={em(20)} height={em(20)}></FilterIcon>
      <BellIcon width={em(20)} height={em(20)}></BellIcon>
    </IconContainer>
  </Wrapper>
);

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: `${em(12)} ${em(16)}`,
  marginTop: em(16),
});
const RegionContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, max-content)",
  gridColumnGap: em(4),

  "& > *": {
    alignSelf: "center",
  },
});
const RegionName = styled("div", {
  fontSize: em(18),
  fontWeight: "bold",
});
const IconContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, max-content)",
  gridColumnGap: em(14),

  "& > *": {
    alignSelf: "center",
  },
});

export default Header;
