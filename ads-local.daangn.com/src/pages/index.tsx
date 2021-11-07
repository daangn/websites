import * as React from "react";
import type { PageProps } from "gatsby";

import { GatsbySeo } from "gatsby-plugin-next-seo";
import { mapAbstractTypeWithDefault } from "@cometjs/graphql-utils";
import { globalStyles, styled } from "~/gatsby-theme-stitches/config";
import { Banner } from "~/components/organisms/Banner";
import { Main } from "~/components/organisms/Main";
import { BannerTitle } from "~/components/molecules/BannerTitle";
import { LearnMore } from "~/components/organisms/LearnMore";
import { Visitors } from "~/components/organisms/Visitors";
import { Download } from "~/components/organisms/Download";
import { Footer } from "~/components/organisms/Footer";
import { graphql } from "gatsby";
import { DownloadBtnMobile } from "~/components/organisms/DownloadBtnMobile";

import { useDetectAdBlock } from "adblock-detect-react";
import { AdblockModal } from "~/components/organisms/AdblockModal";

type IndexPageProps = PageProps<GatsbyTypes.IndexPageQuery>;

export const query = graphql`
  query IndexPage {
    image: file(relativePath: { eq: "img_og.png" }) {
      childImageSharp {
        fixed(width: 800, height: 400, toFormat: PNG, quality: 90) {
          src
          width
          height
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    prismicAdvertisementContents {
      data {
        body {
          __typename
          ...PrismicAdvertisementContentsDataBodyVisitorCountSlide_data
        }
      }
    }
  }
`;

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  globalStyles();

  const [showModal, setShowModal] = React.useState(false);

  const adBlockDetected = useDetectAdBlock();

  React.useEffect(() => {
    if (adBlockDetected) {
      setShowModal(true);
    }
  }, [adBlockDetected]);

  const imgSrc = data.image?.childImageSharp?.fixed;
  const site = data.site?.siteMetadata?.siteUrl;
  const url = site && imgSrc ? site + imgSrc.src : "";

  return (
    <IndexDiv>
      <GatsbySeo
        title="당근마켓 지역광고"
        openGraph={{
          title: "당근마켓 지역광고",
          description: "동네 이웃들이 모이는 당근마켓에 광고해 보세요",
          site_name: "당근마켓",
          images: [
            {
              url: url,
              width: imgSrc?.width,
              height: imgSrc?.height,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        metaTags={[
          {
            property: "thumbnail",
            content: url,
          },
        ]}
      />
      <DownloadBtnMobile />
      <BannerTitle />
      <Banner />
      {data.prismicAdvertisementContents?.data?.body &&
        data.prismicAdvertisementContents.data.body
          .filter(Boolean)
          .map((data, idx) =>
            mapAbstractTypeWithDefault(data!, {
              PrismicAdvertisementContentsDataBodyVisitorCountSlide: (data) => (
                <Visitors data={data} key={idx} />
              ),
              _: null,
            })
          )}
      <Main />
      <Download />
      <LearnMore />
      <Footer />
      {showModal && (
        <AdblockModal color="$carrot500" setShowModal={setShowModal} />
      )}
    </IndexDiv>
  );
};

const IndexDiv = styled("div", {
  "@md": {
    minWidth: 1160,
  },
  "@xl": {
    minWidth: "auto",
  },
});

export default IndexPage;
