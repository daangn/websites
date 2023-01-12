import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";

const Author = ({ data }) => {
  return (
    <Container>
      {data.image.publicURL && <AuthorImage src={data.image.publicURL} />}
      <AuthorInfo>
        <AuthorName>{data.nickname}</AuthorName>
        <p>{data.role}</p>
      </AuthorInfo>
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  margin: `${rem(56)} 0`,
});

const AuthorImage = styled("img", {
  width: rem(44),
  height: rem(44),
  borderRadius: "50%",
});

const AuthorInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: rem(12),
  fontSize: rem(13),
});

const AuthorName = styled("h3", {
  fontSize: rem(16),
  fontWeight: 600,
  marginBottom: rem(4),
});

export default Author;
