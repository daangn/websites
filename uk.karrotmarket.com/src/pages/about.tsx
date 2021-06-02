import React from "react";

import { rem } from "polished";
import { graphql, PageProps } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { withPreview } from "gatsby-source-prismic";
import { mapAbstractType } from "@cometjs/graphql-utils";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { Html } from "@src/components/Html";
import { Space } from "@src/components/Space";
import SubtitleAndText from "@src/components/about/SubtitleAndText";
import SubtitleAndLinks from "@src/components/about/SubtitleAndLinks";
import SubtitleAndImages from "@src/components/about/SubtitleAndImages";

type AboutPageProps = PageProps<GatsbyTypes.AboutPageQueryQuery>;

export const query = graphql`
    query AboutPageQuery {
        prismicGlobalContents(lang: { eq: "en-gb" }) {
            data {
                about_page_title
                about_page_description
                about_opengraph_image_link

                about_title {
                    html
                }
                about_background_image {
                    url
                }
                body1 {
                    __typename
                    ...SubtitleAndImages_content
                    ...SubtitleAndLinks_content
                    ...SubtitleAndText_content
                }
            }
        }
    }
`;

const BackgroundImage = styled("div", {
    height: "208px",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom 0 right 65%",
    "@md": {
        height: "440px",
        backgroundPosition: "center",
    },
});

const Container = styled("div", {
    height: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    padding: `0 ${rem(24)}`,

    "@md": {
        width: rem(668),
    },
});

const Wrapper = styled("div", {
    h3: {
        fontSize: "$heading4",
        "@md": {
            fontSize: "$heading3",
            lineHeight: "120%",
        },
    },
    h5: {
        fontSize: "$heading5",
        "@md": {
            fontSize: "$heading5",
        },
    },
});

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
    if (!data.prismicGlobalContents?.data?.body1) throw new Error("No data");

    const {
        about_page_title,
        about_page_description,
        about_opengraph_image_link,
        about_background_image,
        about_title,
        body1,
    } = data.prismicGlobalContents?.data;
    return (
        <Wrapper id="about-page">
            <GatsbySeo
                title={about_page_title}
                description={about_page_description}
                openGraph={{
                    images: about_opengraph_image_link
                        ? [
                              {
                                  url: about_opengraph_image_link,
                              },
                          ]
                        : [],
                    title: about_page_title,
                    description: about_page_description,
                }}
            />
            <BackgroundImage css={{ backgroundImage: `url(${about_background_image?.url})` }}></BackgroundImage>
            <Container>
                <Html html={about_title?.html} marginTop={{ "@i": rem(36), "@md": rem(60) }}></Html>
                {body1.map((content: any, i) =>
                    mapAbstractType(content, {
                        PrismicGlobalContentsBody1SubtitleAndText: (content) => <SubtitleAndText key={i} content={content} />,
                        PrismicGlobalContentsBody1SubtitleAndImages: (content) => <SubtitleAndImages key={i} content={content} />,
                        PrismicGlobalContentsBody1SubtitleAndLinks: (content) => <SubtitleAndLinks key={i} content={content} />,
                    })
                )}
            </Container>
            <Space h={100}></Space>
        </Wrapper>
    );
};

export default withPreview(AboutPage);
