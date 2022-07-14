import "@seed-design/stylesheet/global.css";

import * as React from "react";
import type { PageProps } from "gatsby";
import { Helmet } from "react-helmet-async";
import {rem} from 'polished';
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { mapAbstractTypeWithDefault } from "@cometjs/graphql-utils";
import Header from "@karrotmarket/gatsby-theme-website/src/components/Header";
import Footer from "@karrotmarket/gatsby-theme-website/src/components/Footer";
import { globalStyles, styled } from "~/gatsby-theme-stitches/config";
import { Banner } from "~/components/organisms/Banner";
import { Main } from "~/components/organisms/Main";
import { LearnMore } from "~/components/organisms/LearnMore";
import { Visitors } from "~/components/organisms/Visitors";
import { Download } from "~/components/organisms/Download";
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

    prismicSiteNavigation(
      uid: { eq: "ads-local.daangn.com" }
    ) {
      data {
        ...Header_navigationData
        ...Footer_navigationData
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

  if (!data.prismicSiteNavigation) {
    throw new Error("No navigation data injected");
  }

  const imgSrc = data.image?.childImageSharp?.fixed;
  const site = data.site?.siteMetadata?.siteUrl;
  const url = site && imgSrc ? site + imgSrc.src : "";

  return (
    <IndexDiv>
      <Helmet>
        <html lang="en" data-seed="light-only" data-seed-scale-color="light" />
        <meta name="color-scheme" content="light dark" />
      </Helmet>
      <GatsbySeo
        title="당근마켓 광고"
        openGraph={{
          title: "당근마켓 광고",
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
            name: "thumbnail",
            content: url,
          },
        ]}
      />
      <DownloadBtnMobile />
      <Header
        navigationData={data.prismicSiteNavigation.data}
        isStatic
      />
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
      <Footer navigationData={data.prismicSiteNavigation.data} />
      <Disclaimer>
        <DisclaimerContent>
          <p>
            당근마켓은 광고 관련 교육 및 안내에 있어서 어떤 협력사(대행사, 교육기관 등)와도 공식 파트너십을 맺고 있지 않습니다.<br />
            이에 관해 문의가 있으시면 당근마켓 광고주센터 <a href="mailto:contact@daangn.com">contact@daangn.com</a>로 문의해주시기 바랍니다.
          </p>
        </DisclaimerContent>
      </Disclaimer>
      {showModal && (
        <AdblockModal color="$carrot500" setShowModal={setShowModal} />
      )}
    </IndexDiv>
  );
};

const Disclaimer = styled('div',{
  display: 'flex',
  
  justifyContent: 'center',
  height: rem(190),
})

const DisclaimerContent = styled('div',{  
  boxSizing: 'border-box',
  borderTop: `1px solid #DCDEE3`,
  paddingTop: rem(24),
  paddingX: rem(24),
  margin: `0 auto`,
  maxWidth: `var(--sizes-maxContent)`,
  width: '100%',
  p : {
    fontSize: rem(12),
    lineHeight: rem(18),
    color: '$gray600'
  },
  a: {
    textDecoration: 'underline',
    color: '$gray900'
  }
  
})

const IndexDiv = styled("div", {
  "@md": {
    minWidth: 1160,
  },
  "@xl": {
    minWidth: "auto",
  },
});

export default IndexPage;
