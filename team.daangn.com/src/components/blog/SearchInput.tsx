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
  display: "flex",
  alignItems: "center",
  padding: `${rem(8)} ${rem(18)}`,
  border: `1px solid ${vars.$scale.color.gray600}`,
  borderRadius: rem(40),
  backgroundColor: vars.$scale.color.gray00,
  fontSize: rem(14),
  color: vars.$scale.color.gray600,
});

const SearchIcon = styled(Icon, {
  width: rem(16),
  height: rem(16),
});

const Input = styled("input", {
  width: rem(120),
  border: "none",
  outline: "none",
  marginLeft: rem(4),
});

export default SearchInput;
