import React from "react";
import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { Grid } from "@src/components/Grid";
import { Html } from "@src/components/Html";
import { Space } from "@src/components/Space";
import Image from "../Image";

type SubtitleAndImagesProps = {
    content: GatsbyTypes.PrismicGlobalContentsBody1SubtitleAndImages;
};

export const query = graphql`
    fragment SubtitleAndImages_content on PrismicGlobalContentsBody1SubtitleAndImages {
        primary {
            subtitle {
                html
            }
        }
        items {
            image {
                url
                dimensions {
                    width
                    height
                }
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

const Section = styled("section", {});

const SubtitleAndImages: React.FC<SubtitleAndImagesProps> = ({ content }) => {
    if (!content.primary || !content.items) throw new Error("No data");

    const { subtitle } = content.primary;

    return (
        <Section>
            <Space h={72}></Space>
            <Html html={subtitle?.html}></Html>
            <Space h={12}></Space>
            <Grid
                gridTemplateColumns={{ "@i": "repeat(2, 1fr)", "@md": "repeat(3, 1fr)" }}
                gridTemplateRows={{ "@i": "repeat(3 ,1fr)", "@md": "repeat(2 ,1fr)" }}
                rowGap={{ "@i": 10 }}
            >
                {content.items.map((item) => (
                    <Image
                        src={item?.image?.url}
                        width={{ "@i": item?.image?.thumbnails?.mobile?.dimensions?.width, "@md": item?.image?.dimensions?.width }}
                    ></Image>
                ))}
            </Grid>
        </Section>
    );
};

export default SubtitleAndImages;
