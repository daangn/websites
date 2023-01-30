import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from "@seed-design/design-token";

const Tag = ({ children }) => {
  return (
    <Container>{children}</Container>
  );
};

const Container = styled("div", {
  width: "fit-content",
  padding: `${rem(6)} ${rem(12)}`,
  marginLeft: rem(8),
  border: "none",
  borderRadius: rem(40),
  backgroundColor: vars.$scale.color.gray50,
  fontSize: "$body2",
});

export default Tag;
