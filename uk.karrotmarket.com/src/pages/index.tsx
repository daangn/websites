import React from "react";

import { graphql, PageProps } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { withPreview } from "gatsby-source-prismic";
import { createStore, StoreProvider } from "easy-peasy";
import { mapAbstractType } from "@cometjs/graphql-utils";
import { styled } from "@src/gatsby-theme-stitches/stitches.config";

import { Space } from "@src/components/Space";
import AppLink from "@src/components/AppLink";
import HeroSection from "@src/components/home/HeroSection";
import MockupSection from "@src/components/home/MockupSection";
import ReviewSection from "@src/components/home/ReviewSection";
import CentreSection from "@src/components/home/CentreSection";
import PopularSection from "@src/components/home/PopularSection";
import DownloadSection from "@src/components/home/DownloadSection";
import ParallaxSection from "@src/components/home/ParallaxSection";

type IndexPageProps = PageProps<GatsbyTypes.IndexPageQueryQuery>;

export const query = graphql`
    query IndexPageQuery {
        prismicGlobalContents(lang: { eq: "en-gb" }) {
            data {
                main_page_title
                main_page_description
                main_opengraph_image_link

                popular_items_api
                app_store_link
                google_play_link
                body {
                    __typename
                    ...HeroSection_content
                    ...PopularSection_content
                    ...ParallaxSection_content
                    ...MockupSection_content
                    ...ReviewSection_content
                    ...CentreSection_content
                    ...DownloadSection_content
                }
            }
        }
    }
`;

const Wrapper = styled("div", {});

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
    if (!data.prismicGlobalContents?.data?.body) throw new Error("No data");
    const {
        main_page_title,
        main_page_description,
        main_opengraph_image_link,
        body,
        google_play_link,
        app_store_link,
        popular_items_api,
    } = data.prismicGlobalContents?.data;
    return (
        <StoreProvider store={createStore({ google_play_link, app_store_link, popular_items_api })}>
            <GatsbySeo
                title={main_page_title}
                description={main_page_description}
                openGraph={{
                    images: main_opengraph_image_link
                        ? [
                              {
                                  url: main_opengraph_image_link,
                              },
                          ]
                        : [],
                    title: main_page_title,
                    description: main_page_description,
                }}
            />
            <Wrapper id="index-page">
                {body.map((content: any, i) =>
                    mapAbstractType(content, {
                        PrismicGlobalContentsBodyHeroSection: (content) => <HeroSection key={i} content={content} />,
                        PrismicGlobalContentsBodyPopularSection: (content) => <PopularSection key={i} content={content} />,
                        PrismicGlobalContentsBodyParallaxSection: (content) => <ParallaxSection key={i} content={content} />,
                        PrismicGlobalContentsBodyMockupSection: (content) => <MockupSection key={i} content={content} />,
                        PrismicGlobalContentsBodyCentreSection: (content) => <CentreSection key={i} content={content} />,
                        PrismicGlobalContentsBodyReviewSection: (content) => <ReviewSection key={i} content={content} />,
                        PrismicGlobalContentsBodyDownloadSection: (content) => <DownloadSection key={i} content={content} />,
                    })
                )}
                <AppLink type="mobile" theme="primary"></AppLink>
                <Space h={86}></Space>
            </Wrapper>
        </StoreProvider>
    );
};

export default withPreview(IndexPage);
