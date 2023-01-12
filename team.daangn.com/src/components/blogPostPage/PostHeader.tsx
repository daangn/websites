import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from "@seed-design/design-token";

const PostHeader = ({ title, category, publishDate }) => {
  return (
    <Header>
      <Title>{title}</Title>
      <Wrapper>{category} | {publishDate}</Wrapper>
    </Header>
  );
};

const Header = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: rem(66),
});

const Title = styled("h1", {
  marginBottom: rem(12),
});

const Wrapper = styled("div", {
  display: "flex",
  fontSize: rem(14),
  color: vars.$scale.color.gray600,
});

export default PostHeader;
