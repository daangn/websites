import React from "react";

import { rem } from "polished";
import { graphql, PageProps } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { mapAbstractType } from "@cometjs/graphql-utils";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { Html } from "../Html";
import { Space } from "../Space";
import SubtitleAndText from "../about/SubtitleAndText";
import SubtitleAndLinks from "../about/SubtitleAndLinks";
import SubtitleAndImages from "../about/SubtitleAndImages";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

type AboutPageProps = PageProps<GatsbyTypes.AboutPageQueryQuery>;

export const query = graphql`
  query AboutPageQuery($lang: String) {
    ...DefaultLayout_query
    prismicGlobalContents(lang: { eq: $lang }) {
      _previewable
      data {
        about_page_title
        about_page_description
        about_opengraph_image_link

        about_title {
          html
        }
        about_background_image {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
        about_body {
          __typename
          ...SubtitleAndImages_content
          ...SubtitleAndLinks_content
          ...SubtitleAndText_content
        }
      }
    }
  }
`;

const BackgroundImage = styled(GatsbyImage, {
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
  if (!data.prismicGlobalContents?.data?.about_body) throw new Error("No data");

  const {
    about_page_title,
    about_page_description,
    about_opengraph_image_link,
    about_background_image,
    about_title,
    about_body,
  } = data.prismicGlobalContents?.data;

  const backgroundImage = getImage(
    about_background_image?.localFile?.childImageSharp?.gatsbyImageData as any
  );

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
        language="en"
      />
      <BackgroundImage image={backgroundImage}></BackgroundImage>
      <Container>
        <Html
          html={about_title?.html}
          marginTop={{ "@i": rem(36), "@md": rem(60) }}
        ></Html>
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
          })
        )}
      </Container>
      <Space h={100}></Space>
    </Wrapper>
  );
};

export default withPrismicPreview(AboutPage, []);
