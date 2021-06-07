import React from "react";
import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { Html } from "@src/components/Html";
import { Flex } from "@src/components/Flex";
import { Space } from "@src/components/Space";
import Image from "../Image";

type CentreSectionProps = {
    content: GatsbyTypes.CentreSection_contentFragment;
};

export const query = graphql`
    fragment CentreSection_content on PrismicGlobalContentsDataBodyCentreSection {
        primary {
            title {
                html
            }
            text {
                text
                html
            }
            image {
                url
                dimensions {
                    width
                    height
                }
                alt
                thumbnails {
                    mobile {
                        url
                        dimensions {
                            width
                            height
                        }
                    }
                }
            }
        }
    }
`;

const Section = styled("section", {
    width: "100%",
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    padding: `${rem(56)} ${rem(36)}`,
    "@md": {
        flexDirection: "column",
        height: "780px",
        padding: 0,
    },
});

const CentreSection: React.FC<CentreSectionProps> = ({ content }) => {
    if (!content.primary) return <></>;

    const { title, image, text } = content.primary;

    return (
        <Section>
            <Image
                src={image?.url}
                alt={image?.alt}
                width={{ "@i": image?.thumbnails?.mobile?.dimensions?.width, "@md": image?.dimensions?.width }}
                height={{ "@i": image?.thumbnails?.mobile?.dimensions?.height, "@md": image?.dimensions?.height }}
            ></Image>
            <Flex colCenterX>
                <Html html={title?.html} marginBottom={{ "@i": 6, "@md": 14 }}></Html>
                <Html html={text?.html} fontSize={{ "@i": "$body1", "@md": "$subtitle3" }} marginBottom={{ "@i": 16 }}></Html>
                <Space h={12}></Space>
            </Flex>
        </Section>
    );
};

export default CentreSection;
