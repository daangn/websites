import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet-async";
import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import _Header from "@karrotmarket/gatsby-theme-global-website/src/components/Header";
import Footer from "@karrotmarket/gatsby-theme-global-website/src/components/Footer";
import globalStyles from "@karrotmarket/gatsby-theme-global-website/src/styles/global";

interface LayoutProps {
  data: GatsbyTypes.DefaultLayout_dataFragment;
  id?: string;
}

export const query = graphql`
  fragment DefaultLayout_data on PrismicSiteNavigation {
    data {
      ...Header_navigationData
      ...Footer_navigationData
    }
  }
`;

const Header = styled(_Header, {
  "@sm": {
    "nav > ul > li:first-child": {
      display: "none",
    },
  },

  "header > div": {
    "@sm": {
      width: "100%",
      // width: rem(540),
      paddingLeft: rem(16),
      paddingRight: rem(16),
    },
    "@md": {
      paddingLeft: rem(0),
      paddingRight: rem(0),
      width: rem(720),
    },
    "@lg": {
      width: rem(960),
    },
    "@xl": {
      width: rem(1150),
    },
  },
});

const Layout: React.FC<LayoutProps> = ({ children, data, id }) => {
  if (!data) return <></>;

  globalStyles();

  return (
    <>
      <Helmet key="helmet">
        <html lang="ja" data-seed="light-only" data-seed-scale-color="light" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1"
        />
        <meta name="color-scheme" content="light dark" />
      </Helmet>
      <GatsbySeo language="ja" />
      <Header key="header" navigationData={data} sns />
      <Main id={id}>{children}</Main>

      <Footer key="footer" navigationData={data} />
    </>
  );
};

const Main = styled("main", {
  paddingBottom: rem(120),
});

export default Layout;
