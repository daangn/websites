import * as React from "react";
import { rem } from "polished";
import { graphql, PageProps } from "gatsby";
// import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet-async";
import { global, styled } from "gatsby-theme-stitches/src/stitches.config";

import _Header from "@karrotmarket/gatsby-theme-website/src/components/Header";
import _Footer from "@karrotmarket/gatsby-theme-website/src/components/Footer";
import { useLocation } from "@reach/router";

const globalStyles = global({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "Gilroy",
    lineHeight: "140%",
  },
  body: {
    color: "$gray900",
    fontFamily: "Gilroy",
    textRendering: "optimizeLegibility",
    wordBreak: "break-word",
    WebkitFontSmoothing: "antialiased",
    margin: 0,
  },
  a: {
    color: "$gray900",
  },
  h1: {
    fontSize: rem(32),
    lineHeight: "120%",
    "@md": {
      fontSize: "$heading1",
      lineHeight: "115%",
    },
  },
  h2: {
    fontSize: "$heading5",
    "@md": {
      fontSize: "$heading2",
      lineHeight: "115%",
    },
  },
  h3: {
    fontSize: "$subtitle2",
    "@md": {
      fontSize: "$heading3",
      lineHeight: "120%",
    },
  },
  h4: {
    fontSize: "$heading4",
    lineHeight: "120%",
  },
  h5: {
    fontSize: "$subtitle3",
    "@md": {
      fontSize: "$heading5",
      lineHeight: "120%",
    },
  },
  "#index-page": {
    "@md": {
      minWidth: rem(1230),
    },
  },
  "#about-page": {
    "@md": {
      minWidth: rem(748),
    },
  },
});

export const query = graphql`
  fragment DefaultLayout_query on Query {
    prismicSiteNavigation(uid: { eq: "global" }, lang: { eq: "en-gb" }) {
      _previewable
      data {
        ...Header_navigationData
        ...Footer_navigationData
      }
    }
  }
`;

const Header = styled(_Header, {
  "header > div": { paddingX: rem(16) },
  "nav > ul": {
    paddingX: rem(24),
    paddingBottom: rem(40),
  },
  "li > a": {
    fontSize: "$subtitle1",
  },
  "ul > ul > li > a": {
    fontSize: rem(22),
  },
  "@md": {
    fontSize: "initial",
    "nav > ul": {
      padding: 0,
      gap: rem(28),
      a: {
        fontSize: "$body1",
      },
      "ul li a": {
        fontSize: rem(18),
      },
    },
  },
});

const Footer = styled(_Footer, {
  "*": {
    fontFamily: "$default",
  },
  borderTop: "1px solid $gray300",
  paddingBottom: rem(86),
  paddingTop: rem(32),

  "ul:first-child a": {
    textDecoration: "none",
    fontWeight: 400,
    fontSize: rem(13),
  },

  "section ul:nth-child(2) a": {
    fontSize: rem(22),
  },
  "@md": {
    paddingBottom: rem(156),
    paddingTop: rem(72),
    "section ul:nth-child(2) a": {
      fontSize: rem(18),
    },
  },
});

interface LayoutProps {
  data: GatsbyTypes.DefaultLayout_queryFragment;
}

const Layout: React.FC<LayoutProps> = ({ children, data }) => {
  const location = useLocation();
  const [transparent, setTransparent] = React.useState(location.pathname === "/");
  const isTransparent = React.useRef(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY <= 2 && isTransparent.current === false) {
        isTransparent.current = true;
        setTransparent(true);
      } else if (window.scrollY > 2 && isTransparent.current === true) {
        isTransparent.current = false;
        setTransparent(false);
      }
    };

    if (location.pathname === "/") {
      if (window.scrollY <= 2) {
        isTransparent.current = true;
        setTransparent(true);
      } else if (window.scrollY > 2) {
        isTransparent.current = false;
        setTransparent(false);
      }

      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      setTransparent(false);
      window.removeEventListener("scroll", onScroll);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  if (!data?.prismicSiteNavigation) return <></>;

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
        navigationData={data.prismicSiteNavigation.data}
        transparent={transparent}
        placer={location.pathname !== "/"}
        sns
      />
      <main>{children}</main>
      <Footer key="footer" navigationData={data.prismicSiteNavigation.data} />
    </>
  );
};

export default Layout;
//
