import React from "react";

import { rem } from "polished";
import {
  graphql,
  type PageProps,
  type HeadProps,
} from "gatsby";
import {
  HeadSeo,
  OpenGraph,
  TwitterCard,
} from 'gatsby-plugin-head-seo/src';
import { required } from '@cometjs/core';
import { mapAbstractType } from "@cometjs/graphql-utils";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import { styled } from "gatsby-theme-stitches/src/config";

import Layout from "../components/Layout";
import DetailsList from "../components/about/DetailsList";
import SubtitleAndText from "../components/about/SubtitleAndText";
import SubtitleAndLinks from "../components/about/SubtitleAndLinks";
import SubtitleAndImages from "../components/about/SubtitleAndImages";

export const query = graphql`
  query AboutPageQuery($locale: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    prismicSiteNavigation(uid: { eq: "global" }, lang: { eq: $locale }) {
      _previewable
      ...DefaultLayout_data
    }
    prismicGlobalContents(lang: { eq: $locale }) {
      _previewable
      data {
        about_page_title
        about_page_description
        about_opengraph_image {
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

        about_title {
          html
        }
        about_background_image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                layout: FULL_WIDTH
                backgroundColor: "white"
              )
            }
          }
        }
        about_body {
          __typename
          ...SubtitleAndImages_content
          ...SubtitleAndLinks_content
          ...SubtitleAndText_content
          ...DetailsList_content
        }
      }
    }
  }
`;

const ImageContianer = styled("div", {
  height: "208px",
  width: "100%",
  overflow: "hidden",
  "@md": {
    height: "440px",
  },
});

const Image = styled(GatsbyImage, {
  height: "115%",
  width: "100%",
  "@md": {
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    objectPosition: "bottom 0% left 50%",
    transform: "translateY(-20%)",
    "@md": {
      objectPosition: "center",

      height: "100%",
    },
  },
});

const Container = styled("div", {
  height: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  padding: `0 ${rem(24)}`,
  marginBottom: rem(100),

  "@md": {
    width: rem(668),
  },
});

const Title = styled("div", {
  "*": {
    fontWeight: "bold",
    fontSize: "$heading4",
    lineHeight: "$heading4",
    marginTop: rem(36),
    "@md": {
      fontSize: "$heading3",
      lineHeight: "$heading3",
      marginTop: rem(60),
    },
  },
});

type AboutPageProps = PageProps<GatsbyTypes.AboutPageQueryQuery>;
const AboutPage: React.FC<AboutPageProps> = ({
  data,
}) => {
  if (!data.prismicGlobalContents?.data?.about_body) throw new Error("No data");

  const {
    about_background_image,
    about_title,
    about_body,
  } = data.prismicGlobalContents?.data;

  const backgroundImage = getImage(
    about_background_image?.localFile?.childImageSharp?.gatsbyImageData as any
  );

  return (
    <Layout data={data.prismicSiteNavigation.data}>
      <ImageContianer>
        <Image image={backgroundImage} />
      </ImageContianer>

      <Container>
        <Title dangerouslySetInnerHTML={{ __html: about_title.html }} />

        {about_body.map((content: any, i) =>
          mapAbstractType(content, {
            PrismicGlobalContentsDataAboutBodySubtitleAndText: (content) => (
              <SubtitleAndText key={i} content={content} />
            ),
            PrismicGlobalContentsDataAboutBodySubtitleAndImages: (content) => (
              <SubtitleAndImages key={i} content={content} />
            ),
            PrismicGlobalContentsDataAboutBodySubtitleAndLinks: (content) => (
              <SubtitleAndLinks key={i} content={content} />
            ),
            PrismicGlobalContentsDataAboutBodyDetailsList: (content) => (
              <DetailsList key={i} content={content} />
            ),
          })
        )}
      </Container>
    </Layout>
  );
};
export default withPrismicPreview(AboutPage, []);

type AboutPageHeadProps = HeadProps<GatsbyTypes.AboutPageQueryQuery>;
export const Head: React.FC<AboutPageHeadProps> = ({
  data,
  location,
}) => {
  required(data.prismicGlobalContents?.data);

  const {
    about_page_title,
    about_page_description,
    about_opengraph_image,
  } = data.prismicGlobalContents?.data;

  const metaImage = about_opengraph_image?.localFile?.childImageSharp?.fixed;

  return (
    <HeadSeo
      location={location}
      title={about_page_title}
      description={about_page_description}
    >
      {props => [
        <OpenGraph
          og={{
            ...props,
            type: 'website',
            ...metaImage && {
              images: [{
                url: new URL(
                  metaImage.src,
                  metaImage.src.startsWith('http')
                    ? metaImage.src
                    : props.url,
                ),
                width: metaImage.width,
                height: metaImage.height,
              }],
            },
          }}
        />,
        <TwitterCard
          card={{
            ...props,
            type: 'summary',
          }}
        />,
      ]}
    </HeadSeo>
  );
}
