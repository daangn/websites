import * as React from "react";
import type { PageProps } from "gatsby";
import {
  styled,
  globalStyles,
} from "gatsby-theme-stitches/src/stitches.config";
import { graphql } from "gatsby";

import JsonLd from "../components/JsonLd";
import HeroSection from "../components/HeroSection";
import TitleAndIllustration from "../components/TitleAndIllustration";
import WideBanner from "../components/WideBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";

type IndexPageProps = PageProps<{
  prismicPayContentsBodyHero: GatsbyTypes.PrismicPayContentsBodyHero;
  prismicPayContentsBodyTitleAndIllustration: GatsbyTypes.PrismicPayContentsBodyTitleAndIllustration;
  prismicPayContentsBodyTitleAndDescription: GatsbyTypes.PrismicPayContentsBodyTitleAndDescription;
  prismicPayContentsBodyWideBanner: GatsbyTypes.PrismicPayContentsBodyWideBanner;
  prismicPayContents: GatsbyTypes.PrismicPayContents;
}>;

export const query = graphql`
  {
    prismicPayContentsBodyHero {
      primary {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920)
            }
          }
        }
      }
    }
    prismicPayContentsBodyTitleAndIllustration {
      primary {
        sub_title {
          text
        }
        title {
          text
        }
        illustration {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 700)
            }
          }
        }
      }
    }
    prismicPayContentsBodyTitleAndDescription {
      primary {
        title {
          text
        }
        key_text
      }
    }
    prismicPayContentsBodyWideBanner {
      primary {
        title {
          text
        }
        thumbnail {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920)
            }
          }
        }
      }
    }
    prismicPayContents {
      data {
        logo_icon {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 24)
            }
          }
        }
      }
    }
  }
`;

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  globalStyles();

  return (
    <>
      <JsonLd />
      <Section>
        <Header
          image_data={
            data.prismicPayContents.data?.logo_icon?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
          alt={data.prismicPayContents.data?.logo_icon?.alt}
        />
        <HeroSection
          image_data={
            data.prismicPayContentsBodyHero.primary?.image?.localFile
              ?.childImageSharp?.gatsbyImageData
          }
          alt={data.prismicPayContentsBodyHero.primary?.image?.alt}
          title_key_text={
            data.prismicPayContentsBodyTitleAndDescription.primary?.key_text
          }
          title={
            data.prismicPayContentsBodyTitleAndDescription.primary?.title?.text
          }
        />
        <TitleAndIllustration
          image_data={
            data.prismicPayContentsBodyTitleAndIllustration.primary
              ?.illustration?.localFile?.childImageSharp?.gatsbyImageData
          }
          title={
            data.prismicPayContentsBodyTitleAndIllustration.primary?.title?.text
          }
          sub_title={
            data.prismicPayContentsBodyTitleAndIllustration.primary?.sub_title
              ?.text
          }
        />
        <WideBanner
          image_data={
            data.prismicPayContentsBodyWideBanner.primary?.thumbnail?.localFile
              ?.childImageSharp?.gatsbyImageData
          }
          title={data.prismicPayContentsBodyWideBanner.primary?.title?.text}
        />
        <Footer />
      </Section>
    </>
  );
};

const Section = styled("section", {
  height: "582px",
  width: "100%",
  backgroundPosition: "bottom 0px right -70px;",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export default IndexPage;
