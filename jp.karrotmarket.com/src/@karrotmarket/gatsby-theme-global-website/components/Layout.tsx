import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet-async";
import Header from "@karrotmarket/gatsby-theme-global-website/src/components/Header";
import Footer from "@karrotmarket/gatsby-theme-global-website/src/components/Footer";
import globalStyles from "@karrotmarket/gatsby-theme-global-website/src/styles/global";
import { Space } from "@karrotmarket/gatsby-theme-global-website/src/components/Space";

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

const Layout: React.FC<LayoutProps> = ({ children, data, transparent }) => {
  if (!data) return <></>;

  globalStyles();

  return (
    <>
      <Helmet key="helmet">
        <html lang="ja" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1"
        />
      </Helmet>
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
