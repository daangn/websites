import * as React from "react";
import { graphql } from "gatsby";
import Header from "@karrotmarket/gatsby-theme-website-global/src/components/Header";
import Footer from "@karrotmarket/gatsby-theme-website-global/src/components/Footer";
import globalStyles from "@karrotmarket/gatsby-theme-website-global/src/styles/global";

type LayoutProps = {
  data: GatsbyTypes.DefaultLayout_dataFragment,
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
  globalStyles();

  if (!data) return <>{children}</>;

  return (
    <>
      <Header
        key="header"
        navigationData={data}
        sns
      />

      <main {...(id ? { id } : {})}>
        {children}
      </main>

      <Footer
        key="footer"
        navigationData={data}
      />
    </>
  );
};

export default Layout;
