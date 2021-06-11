import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet-async";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import _Header from "@karrotmarket/gatsby-theme-global-website/src/components/Header";
import Footer from "@karrotmarket/gatsby-theme-global-website/src/components/Footer";
import globalStyles from "@karrotmarket/gatsby-theme-global-website/src/styles/global";
import { Space } from "@karrotmarket/gatsby-theme-global-website/src/components/Space";
import { styled } from "@karrotmarket/gatsby-theme-global-website/src/gatsby-theme-stitches/stitches.config";

export const query = graphql`
  fragment DefaultLayout_data on PrismicSiteNavigation {
    data {
      ...Header_navigationData
      ...Footer_navigationData
    }
  }
`;

interface LayoutProps {
  data: GatsbyTypes.DefaultLayout_queryFragment;
  transparent?: boolean;
}

const Header = styled(_Header, {
  "@sm": {
    "nav > ul > li:first-child": {
      display: "none",
    },
  },
});

const Layout: React.FC<LayoutProps> = ({ children, data, transparent }) => {
  if (!data) return <></>;

  globalStyles();

  return (
    <>
      <Helmet key="helmet">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1"
        />
      </Helmet>
      <GatsbySeo language="ja" />
      <Header key="header" navigationData={data} sns />
      <main>
        {children}
        <Space h={120}></Space>
      </main>

      <Footer key="footer" navigationData={data} />
    </>
  );
};

export default Layout;
