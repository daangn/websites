import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from '@seed-design/design-token';

const FeaturedPost = ({ data }) => {
  return (
    <Container>
      {data.thumbnailImage.publicURL && (
        <FeaturedImage src={data.thumbnailImage.publicURL} />
      )}
      <FeaturedDescription>
          <FeaturedTitle>큰 장바구니가 도착했어요!</FeaturedTitle>
          <FeaturedSummary>당근마켓의 큰 장바구니를 소개해요</FeaturedSummary>
      </FeaturedDescription>
    </Container>
  );
};

const Container = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  blogContentArea: true,
  marginBottom: rem(66),
});

const FeaturedImage = styled("img", {
  width: 1054,
  height: 634,
});

const FeaturedDescription = styled("div", {
  position: "absolute",
  top: "80%",
  left: "10%",
  display: "flex",
  flexDirection: "column",
});

const FeaturedTitle = styled("h1", {
  marginBottom: rem(8),
});

const FeaturedSummary = styled("p", {
  color: vars.$scale.color.gray600,
});

export default FeaturedPost;
