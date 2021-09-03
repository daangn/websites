import React from "react";

import { rem } from "polished";
import { graphql, PageProps } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { useInView } from "react-intersection-observer";
import { mapAbstractType } from "@cometjs/graphql-utils";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import { styled } from "../gatsby-theme-stitches/config";

import Layout from "../components/Layout";
import AppLink from "../components/AppLink";
import HeroSection from "../components/home/HeroSection";
import MockupSection from "../components/home/MockupSection";
import ReviewSection from "../components/home/ReviewSection";
import CenterSection from "../components/home/CenterSection";
import PopularSection from "../components/home/PopularSection";
import DownloadSection from "../components/home/DownloadSection";
import ParallaxSection from "../components/home/ParallaxSection";
import IllustrationSection from "../components/home/IllustrationSection";

type IndexPageProps = PageProps<GatsbyTypes.IndexPageQueryQuery>;

export const query = graphql`
  query IndexPageQuery($lang: String) {
    prismicSiteNavigation(uid: { eq: "global" }, lang: { eq: $lang }) {
      _previewable
      ...DefaultLayout_data
    }
    prismicGlobalContents(lang: { eq: $lang }) {
      _previewable
      data {
        main_page_title
        main_page_description
        main_opengraph_image {
          localFile {
            childImageSharp {
              fixed(width: 1200, height: 630, toFormat: PNG, quality: 90) {
                src
                width
                height
              }
            }
          }
        }

        ...AppLink_links
        main_body {
          __typename
          ...HeroSection_content
          ...PopularSection_content
          ...ParallaxSection_content
          ...MockupSection_content
          ...ReviewSection_content
          ...CenterSection_content
          ...DownloadSection_content
          ...IllustrationSection_content
        }
      }
    }
    hotArticles: allHotArticle {
      nodes {
        ...PopularSection_articles
      }
    }
  }
`;

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const [ref, inView] = useInView({ threshold: 1, initialInView: true });

  if (!data.prismicGlobalContents?.data?.main_body || !data.hotArticles.nodes)
    return <></>;
  const {
    main_page_title,
    main_page_description,
    main_opengraph_image,
    main_body,
  } = data.prismicGlobalContents?.data;

  const metaImage = main_opengraph_image?.localFile?.childImageSharp?.fixed;

  return (
    <Layout
      id="index-page"
      data={data.prismicSiteNavigation.data}
      transparent={inView}
      placer={false}
    >
      <Placer ref={ref}></Placer>
      <GatsbySeo
        title={main_page_title}
        description={main_page_description}
        openGraph={{
          title: main_page_title,
          description: main_page_description,
          ...(metaImage && {
            images: [
              {
                url: metaImage.src,
                width: metaImage.width,
                height: metaImage.height,
              },
            ],
          }),
        }}
      />
      <Wrapper>
        {main_body.map((content: any, i) =>
          mapAbstractType(content, {
            PrismicGlobalContentsDataMainBodyHeroSection: (content) => (
              <HeroSection
                key={i}
                content={content}
                links={data.prismicGlobalContents?.data}
              />
            ),
            PrismicGlobalContentsDataMainBodyPopularSection: (content) => (
              <PopularSection
                key={i}
                content={content}
                articles={data.hotArticles.nodes}
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
              <DownloadSection
                key={i}
                content={content}
                links={data.prismicGlobalContents?.data}
              />
            ),
            PrismicGlobalContentsDataMainBodyIllustrationSection: (content) => (
              <IllustrationSection key={i} content={content} />
            ),
          })
        )}
        <AppLink
          type="mobile"
          theme="primary"
          links={data.prismicGlobalContents?.data}
        ></AppLink>
      </Wrapper>
      <div style={{ minWidth: rem(1230) }}></div>
    </Layout>
  );
};

const Wrapper = styled("div", {});

const Placer = styled("div", {
  position: "absolute",
  height: 1,
});

export default withPrismicPreview(IndexPage, []);
