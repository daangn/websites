import * as React from "react";
import type { PageProps } from "gatsby";
import {
  styled,
  globalCss,
} from "@karrotmarket/gatsby-theme-global-website/src/gatsby-theme-stitches/config";
import { graphql } from "gatsby";

import JsonLd from "../components/JsonLd";
import HeroSection from "../components/HeroSection";
import TitleAndIllustration from "../components/TitleAndIllustration";
import WideBanner from "../components/WideBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";

type IndexPageProps = PageProps<{
  prismicPayContents: GatsbyTypes.PrismicPayContents;
}>;

export const query = graphql`
  {
    prismicPayContents {
      data {
        body {
          ... on PrismicPayContentsDataBodyWideBanner {
            primary {
              title {
                text
              }
              thumbnail {
                gatsbyImageData(width: 1920)
              }
            }
          }
          ... on PrismicPayContentsDataBodyTitleAndIllustration {
            primary {
              sub_title {
                text
              }
              title {
                text
              }
              illustration {
                gatsbyImageData(width: 700)
              }
            }
          }
          ... on PrismicPayContentsDataBodyTitleAndDescription {
            primary {
              key_text
              title {
                text
              }
            }
          }
          ... on PrismicPayContentsDataBodyHero {
            primary {
              image {
                gatsbyImageData
              }
            }
          }
        }
        logo_icon {
          gatsbyImageData(width: 24)
          alt
        }
      }
    }
  }
`;

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  console.log("data", data);
  globalStyles();

  const bodyTitleAndDescriptionData = data.prismicPayContents.data.body[0]
    .primary as GatsbyTypes.PrismicPayContentsDataBodyTitleAndDescriptionPrimary;
  const heroData = data.prismicPayContents.data.body[1]
    .primary as GatsbyTypes.PrismicPayContentsDataBodyHeroPrimary;
  const bodyTitleAndIllustrationData = data.prismicPayContents.data.body[2]
    .primary as GatsbyTypes.PrismicPayContentsDataBodyTitleAndIllustrationPrimary;
  const bodyWideBannerData = data.prismicPayContents.data.body[3]
    .primary as GatsbyTypes.PrismicPayContentsDataBodyWideBannerPrimary;

  console.log(heroData);
  return (
    <>
      <JsonLd />
      <Section>
        <Header
          image_data={data.prismicPayContents.data?.logo_icon?.gatsbyImageData}
          alt={data.prismicPayContents.data?.logo_icon?.alt}
        />
        <HeroSection
          image_data={heroData.image?.gatsbyImageData}
          alt={heroData.image?.alt}
          title_key_text={bodyTitleAndDescriptionData.key_text}
          title={bodyTitleAndDescriptionData.title?.text}
        />
        <TitleAndIllustration
          image_data={
            bodyTitleAndIllustrationData.illustration?.gatsbyImageData
          }
          title={bodyTitleAndIllustrationData.title?.text}
          sub_title={bodyTitleAndIllustrationData.sub_title?.text}
        />
        <WideBanner
          image_data={bodyWideBannerData.thumbnail?.gatsbyImageData}
          title={bodyWideBannerData.title?.text}
        />
        <Footer />
      </Section>
    </>
  );
};

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  body: { fontFamily: "$system" },
});

const Section = styled("section", {
  height: "582px",
  width: "100%",
  backgroundPosition: "bottom 0px right -70px;",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export default IndexPage;
