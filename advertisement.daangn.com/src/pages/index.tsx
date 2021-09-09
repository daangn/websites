import * as React from "react";
import type { PageProps } from "gatsby";

import { GatsbySeo } from "gatsby-plugin-next-seo";
import { globalStyles } from "~/gatsby-theme-stitches/stitches.config";
import { Banner } from "~/components/organisms/Banner";
import { Main } from "~/components/organisms/Main";
import { PromotionInfoDownload } from "~/components/organisms/PromotionInfoDownload";
import { BannerTitle } from "~/components/molecules/BannerTitle";
import { LearnMore } from "~/components/organisms/LearnMore";
import { Visitors } from "~/components/organisms/Visitors";
import { Download } from "~/components/organisms/Download";
import { Footer } from "~/components/organisms/Footer";
import { graphql, useStaticQuery } from "gatsby";
import { DownloadBtnMobile } from "~/components/organisms/DownloadBtnMobile";

globalStyles();

type IndexPageProps = PageProps;

const IndexPage: React.FC<IndexPageProps> = () => {
  const query = useStaticQuery<GatsbyTypes.IndexPageQueryQuery>(graphql`
    query IndexPageQuery {
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
    }
  `);

  const imgSrc = query.image?.childImageSharp?.fixed;
  const site = query.site?.siteMetadata?.siteUrl;
  const url = site && imgSrc ? site + imgSrc : "";

  return (
    <div>
      <GatsbySeo
        title="당근마켓 지역광고"
        openGraph={{
          title: "당근마켓 지역광고",
          description: "동네 이웃들이 모이는 당근마켓에 광고해 보세요",
          images: [
            {
              url: url,
              width: imgSrc?.width,
              height: imgSrc?.height,
            },
          ],
        }}
      />
      <DownloadBtnMobile />
      <BannerTitle />
      <Banner />
      <Visitors />
      <Main />
      <Download />
      <LearnMore />
      <Footer />
    </div>
  );
};

export default IndexPage;
