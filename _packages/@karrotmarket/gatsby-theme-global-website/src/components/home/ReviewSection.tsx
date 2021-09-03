import * as React from "react";

import { rem } from "polished";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { styled } from "../../gatsby-theme-stitches/config";

import { ReactComponent as QuoteIcon } from "../../icons/quote.svg";
import { ReactComponent as LocationIcon } from "../../icons/location_filled.svg";

export const query = graphql`
  fragment ReviewSection_content on PrismicGlobalContentsDataMainBodyReviewSection {
    primary {
      title {
        html
      }
      background_color
    }
    items {
      user_name
      user_region
      content {
        html
      }
      text_highlight_color
    }
  }
`;

type ReviewSectionProps = {
  content: GatsbyTypes.ReviewSection_contentFragment;
};

const ReviewSection: React.FC<ReviewSectionProps> = ({ content }) => {
  if (!content.primary || !content.items) return <></>;
  const { title, image, background_color } = content.primary;

  const bgImage = getImage(
    image?.localFile?.childImageSharp?.gatsbyImageData as any
  );

  return (
    <Section css={{ background: background_color }}>
      <Container>
        <Title dangerouslySetInnerHTML={{ __html: title.html }}></Title>
        <Grid>
          {content.items.map((review, i) => (
            <Review {...(review as any)} key={i}></Review>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

const Grid = styled("div", {
  display: "grid",
  marginTop: rem(28),
  gridColumnGap: rem(0),
  gridRowGap: rem(36),

  gridTemplateColumns: "1fr",
  gridTemplateRows: "repeat(3, max-content)",

  "@md": {
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr",

    marginTop: rem(72),
    gridColumnGap: rem(28),
    gridRowGap: rem(0),
  },
});

const Section = styled("section", {
  width: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  "@md": {
    height: "780px",
  },
});

const Container = styled("div", {
  height: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: `${rem(56)} ${rem(16)}`,
  h5: {
    textAlign: "center",
  },
  "@md": {
    width: "$maxContent",
    padding: rem(0),
  },
});

const Title = styled("div", {
  "*": {
    fontSize: "$heading5",
    lineHeight: "$heading5",
  },
});

interface ReviewProps {
  user_name: string;
  user_region: string;
  content: { html: string };
  text_highlight_color: string;
}

const Review: React.FC<ReviewProps> = ({
  content,
  text_highlight_color,
  user_name,
  user_region,
}) => (
  <ReviewContianer>
    <QuoteIcon />
    <ReviewContent
      dangerouslySetInnerHTML={{ __html: content.html }}
      css={{
        highlightColor: text_highlight_color,
      }}
    ></ReviewContent>
    <ReviewerInfoContainer>
      <ReviewrName>{user_name}</ReviewrName>
      <ReviewerRegionContainer>
        <LocationIcon />
        <ReviewrRegion>{user_region}</ReviewrRegion>
      </ReviewerRegionContainer>
    </ReviewerInfoContainer>
  </ReviewContianer>
);

const ReviewContianer = styled("div", {
  backgroundColor: "white",
  padding: `${rem(52)} ${rem(36)} ${rem(36)} ${rem(36)}`,
  display: "flex",
  flexDirection: "column",
  borderRadius: rem(50),
});

const ReviewContent = styled("div", {
  marginTop: rem(20),
  marginBottom: rem(32),

  "*": {
    fontSize: "$subtitle3",
    lineHeight: "$subtitle3",
  },
});

const ReviewerInfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "flex-end",
});
const ReviewerRegionContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, max-content)",
  gridColumnGap: rem(4),
});

const ReviewrName = styled("div", {
  fontSize: "$body2",
  lineHeight: "$body2",
  marginBottom: rem(6),
});

const ReviewrRegion = styled("div", {
  fontFamily: "$system",
  fontSize: "$caption2",
  lineHeight: "$caption2",
});

export default ReviewSection;
