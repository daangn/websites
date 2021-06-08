import React from "react";
import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { Grid } from "@src/components/Grid";
import { Html } from "@src/components/Html";
import { Flex } from "@src/components/Flex";
import { Space } from "@src/components/Space";

// @ts-ignore
import { ReactComponent as LocationIcon } from "@src/icons/location_filled.svg";
// @ts-ignore
import { ReactComponent as QuoteIcon } from "@src/icons/quote.svg";

interface ReviewProps {
    user_name: string;
    user_region: string;
    content: { html: string };
    text_highlight_color: string;
}

const ReviewContianer = styled("div", {
    backgroundColor: "white",
    padding: `${rem(52)} ${rem(36)} ${rem(36)} ${rem(36)}`,
    display: "flex",
    flexDirection: "column",
    borderRadius: rem(10),
});
const ReviewContent = styled(Html, {});
const ReviewrName = styled("div", {
    fontSize: "$body2",
});
const ReviewrRegion = styled("div", {
    fontFamily: "$default",
    fontSize: "$caption2",
});

const Review: React.FC<ReviewProps> = ({ content, text_highlight_color, user_name, user_region }) => (
    <ReviewContianer>
        <QuoteIcon></QuoteIcon>
        <Space h={20}></Space>
        <ReviewContent html={content.html} highlightColor={text_highlight_color} fontSize="$subtitle3"></ReviewContent>
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

type ReviewSectionProps = {
    content: GatsbyTypes.ReviewSection_contentFragment;
};

export const query = graphql`
    fragment ReviewSection_content on PrismicGlobalContentsDataBodyReviewSection {
        primary {
            title {
                html
            }
            image {
                url
                localFile {
                    publicURL
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

const Section = styled("section", {
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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

const ReviewSection: React.FC<ReviewSectionProps> = ({ content }) => {
    if (!content.primary || !content.items) return <></>;
    const { title, image } = content.primary;
    return (
        <Section css={{ backgroundImage: `url(${image?.localFile?.publicURL})` }}>
            <Container>
                <Html html={title?.html} fontSize="$heading5"></Html>
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

export default ReviewSection;
