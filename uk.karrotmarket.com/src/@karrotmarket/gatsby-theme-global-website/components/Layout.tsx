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
  placer?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  data,
  transparent,
  placer,
}) => {
  if (!data) return <></>;

  globalStyles();

  return (
    <>
      <Helmet key="helmet">
        <html lang="en" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1"
        />
      </Helmet>
      <Header
        key="header"
        navigationData={data}
        transparent={transparent}
        sns
        placer={placer}
      />
      <main>{children}</main>

      <Footer key="footer" navigationData={data} />
    </>
  );
};

export default Layout;
