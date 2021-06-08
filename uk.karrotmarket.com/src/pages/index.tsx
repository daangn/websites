import React from "react";

import { graphql, PageProps } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { createStore, StoreProvider } from "easy-peasy";
import { defaultRepositoryConfig } from "@karrotmarket/gatsby-theme-prismic/src/defaultRepositoryConfig";
import { mapAbstractType } from "@cometjs/graphql-utils";
import { styled } from "@src/gatsby-theme-stitches/stitches.config";

import { Space } from "@src/components/Space";
import AppLink from "@src/components/AppLink";
import HeroSection from "@src/components/home/HeroSection";
import MockupSection from "@src/components/home/MockupSection";
import ReviewSection from "@src/components/home/ReviewSection";
import CenterSection from "@src/components/home/CenterSection";
import PopularSection from "@src/components/home/PopularSection";
import DownloadSection from "@src/components/home/DownloadSection";
import ParallaxSection from "@src/components/home/ParallaxSection";

type IndexPageProps = PageProps<GatsbyTypes.IndexPageQueryQuery>;

export const query = graphql`
  query IndexPageQuery {
    prismicGlobalContents(lang: { eq: "en-gb" }) {
      _previewable
      data {
        main_page_title
        main_page_description
        main_opengraph_image_link

        popular_items_api
        app_store_link
        google_play_link
        main_body {
          __typename
          ...HeroSection_content
          ...PopularSection_content
          ...ParallaxSection_content
          ...MockupSection_content
          ...ReviewSection_content
          ...CenterSection_content
          ...DownloadSection_content
        }
      }
    }
    popularItems: allPopularItem {
      nodes {
        ...PopularSection_items
      }
    }
  }
`;

const Wrapper = styled("div", {});

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  if (!data.prismicGlobalContents?.data?.main_body || !data.popularItems.nodes)
    return <></>;
  const {
    main_page_title,
    main_page_description,
    main_opengraph_image_link,
    main_body,
    google_play_link,
    app_store_link,
  } = data.prismicGlobalContents?.data;

  return (
    // <StoreProvider
    //   store={createStore({
    //     google_play_link,
    //     app_store_link,
    //     popular_items_api,
    //   })}
    // >
    <>
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
        language="en"
      />
      <Wrapper id="index-page">
        {main_body.map((content: any, i) =>
          mapAbstractType(content, {
            PrismicGlobalContentsDataMainBodyHeroSection: (content) => (
              <HeroSection key={i} content={content} />
            ),
            PrismicGlobalContentsDataMainBodyPopularSection: (content) => (
              <PopularSection
                key={i}
                content={content}
                items={data.popularItems.nodes}
              />
            ),
            PrismicGlobalContentsDataMainBodyParallaxSection: (content) => (
              <ParallaxSection key={i} content={content} />
            ),
            PrismicGlobalContentsDataMainBodyMockupSection: (content) => (
              <MockupSection key={i} content={content} />
            ),
            PrismicGlobalContentsDataMainBodyCentreSection: (content) => (
              <CenterSection key={i} content={content} />
            ),
            PrismicGlobalContentsDataMainBodyReviewSection: (content) => (
              <ReviewSection key={i} content={content} />
            ),
            PrismicGlobalContentsDataMainBodyDownloadSection: (content) => (
              <DownloadSection key={i} content={content} />
            ),
          })
        )}
        <AppLink type="mobile" theme="primary"></AppLink>
        <Space h={{ "@i": 86, "@md": 0 }}></Space>
      </Wrapper>
      {/* </StoreProvider> */}
    </>
  );
};

export default IndexPage;

// export default withPrismicPreview(IndexPage, [defaultRepositoryConfig]);
