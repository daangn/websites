import React from "react";
import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { Html } from "@src/components/Html";
import { Space } from "@src/components/Space";
import AppLink from "@src/components/AppLink";
import Image from "../Image";

type DownloadSectionProps = {
    content: GatsbyTypes.PrismicGlobalContentsBodyDownloadSection;
};

export const query = graphql`
    fragment DownloadSection_content on PrismicGlobalContentsBodyDownloadSection {
        primary {
            title {
                html
            }
            app_logo_image {
                url
                dimensions {
                    width
                    height
                }
            }
        }
    }
`;

const Section = styled("section", {
    height: "410px",
    width: "100%",
    "@md": {
        height: "610px",
    },
});

const Container = styled("div", {
    // width: "$maxContent",
    height: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
});

const DownloadSection: React.FC<DownloadSectionProps> = ({ content }) => {
    if (!content.primary) return <></>;

    const { title, app_logo_image } = content.primary;

    return (
        <Section>
            <Container>
                <Image src={app_logo_image?.url} width={app_logo_image?.dimensions?.width}></Image>
                <Space h={28}></Space>
                <Html html={title?.html} marginBottom={{ "@i": 0, "@md": 42 }}></Html>
                <AppLink theme="light" type="desktop"></AppLink>
                <Space h={24}></Space>
            </Container>
        </Section>
    );
};

export default DownloadSection;
