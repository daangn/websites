import * as React from "react";

import { rem } from "polished";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { styled } from "../../gatsby-theme-stitches/stitches.config";

import { Grid } from "../Grid";
import { Flex } from "../Flex";
import { Space } from "../Space";
import BackgroundImage from "../BackgroundImage";

import { ReactComponent as LocationIcon } from "../../icons/location_filled.svg";
import { ReactComponent as QuoteIcon } from "../../icons/quote.svg";

export const query = graphql`
  fragment ReviewSection_content on PrismicGlobalContentsDataMainBodyReviewSection {
    primary {
      title {
        html
      }
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
      }
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
  const { title, image } = content.primary;

  const bgImage = getImage(
    image?.localFile?.childImageSharp?.gatsbyImageData as any
  );

  return (
    <Section>
      <BackgroundImage
        image={bgImage}
        objectPosition={{ "@i": "bottom 0px right -70px", "@md": "50% 50%" }}
      ></BackgroundImage>
      <Container>
        <Title dangerouslySetInnerHTML={{ __html: title.html }}></Title>
        <Grid
          marginTop={{ "@i": 28, "@md": 72 }}
          gridTemplateColumns={{ "@i": "1fr", "@md": "repeat(3, 1fr)" }}
          gridTemplateRows={{ "@i": "repeat(3, max-content)", "@md": " 1fr" }}
          columnGap={{ "@i": 0, "@md": 28 }}
          rowGap={{ "@i": 36, "@md": 0 }}
        >
          {content.items.map((review, i) => (
            <Review {...(review as any)} key={i}></Review>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

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

const Title = styled("h2", {
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
    <QuoteIcon></QuoteIcon>
    <Space h={20}></Space>
    <ReviewContent
      dangerouslySetInnerHTML={{ __html: content.html }}
      css={{
        highlightColor: text_highlight_color,
      }}
    ></ReviewContent>
    <Space h={32}></Space>
    <Flex column flex={1} justifyContent="flex-end">
      <ReviewrName>{user_name}</ReviewrName>
      <Space h={6}></Space>
      <Flex row>
        <LocationIcon></LocationIcon>
        <Space w={4}></Space>
        <ReviewrRegion>{user_region}</ReviewrRegion>
      </Flex>
    </Flex>
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
  "*": {
    fontSize: "$subtitle3",
    lineHeight: "$subtitle3",
  },
});
const ReviewrName = styled("div", {
  fontSize: "$body2",
  lineHeight: "$body2",
});
const ReviewrRegion = styled("div", {
  fontFamily: "$system",
  fontSize: "$caption2",
  lineHeight: "$caption2",
});

export default ReviewSection;
