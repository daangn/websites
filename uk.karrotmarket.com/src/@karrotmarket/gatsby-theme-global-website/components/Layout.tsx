import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet-async";
import Header from "@karrotmarket/gatsby-theme-global-website/src/components/Header";
import Footer from "@karrotmarket/gatsby-theme-global-website/src/components/Footer";
import globalStyles from "@karrotmarket/gatsby-theme-global-website/src/styles/global";

export const query = graphql`
  fragment DefaultLayout_data on PrismicSiteNavigation {
    data {
      ...Header_navigationData
      ...Footer_navigationData
    }
  }
`;

interface LayoutProps {
  data: GatsbyTypes.DefaultLayout_dataFragment;
  id?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  data,
  id,
}) => {
  if (!data) return <></>;

  globalStyles();

  return (
    <>
      <Helmet key="helmet">
        <html lang="en" data-seed="light-only" data-seed-scale-color="light" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1"
        />
        <meta name="color-scheme" content="light dark" />
      </Helmet>
      <Header
        key="header"
        navigationData={data}
        sns
      />
      <main {...(id ? { id } : {})}>{children}</main>

      <Footer key="footer" navigationData={data} />
    </>
  );
};

export default Layout;
