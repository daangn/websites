import * as React from "react";
import { graphql } from "gatsby";
import Header from "@karrotmarket/gatsby-theme-global-website/src/components/Header";
import Footer from "@karrotmarket/gatsby-theme-global-website/src/components/Footer";
import globalStyles from "@karrotmarket/gatsby-theme-global-website/src/styles/global";

type LayoutProps = {
  data: GatsbyTypes.DefaultLayout_dataFragment,
  transparent?: boolean,
  placer?: boolean,
  children: React.ReactNode,
  id?: string,
}

export const query = graphql`
  fragment DefaultLayout_data on PrismicSiteNavigation {
    data {
      ...Header_navigationData
      ...Footer_navigationData
    }
  }
`;

const Layout: React.FC<LayoutProps> = ({
  children,
  data,
  id,
}) => {
  if (!data) return <></>;

  globalStyles();

  return (
    <>
      <Header
        key="header"
        navigationData={data}
        sns
      />
      <main id={id}>{children}</main>

      <Footer key="footer" navigationData={data} />
    </>
  );
};

export default Layout;
