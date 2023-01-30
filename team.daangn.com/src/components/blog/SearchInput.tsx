import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from '@seed-design/design-token';

import { ReactComponent as Icon } from "../../assets/icon_search.svg";

const SearchInput = () => {
  return (
    <Container>
      <SearchIcon />
      <Input type="text" placeholder="검색어 입력" />
    </Container>
  );
};

const Container = styled("div", {
  display: "none",
  alignItems: "center",
  padding: `${rem(8)} ${rem(18)}`,
  border: "none",
  borderRadius: rem(40),
  backgroundColor: vars.$scale.color.gray100,
  fontSize: rem(14),
  color: vars.$scale.color.gray700,

  "@media (min-width: 880px)" : {
    display: "flex",
  }
});

const SearchIcon = styled(Icon, {
  width: rem(18),
  height: rem(18),
});

const Input = styled("input", {
  width: rem(120),
  marginLeft: rem(4),
  border: "none",
  backgroundColor: vars.$scale.color.gray100,
  fontSize: "$body2",
  color: vars.$scale.color.gray700,
  outline: "none",
});

export default SearchInput;
