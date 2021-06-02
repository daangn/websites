import React from "react";
import { rem } from "polished";
import { PageProps } from "gatsby";
// import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet-async";
import { global } from "@src/gatsby-theme-stitches/stitches.config";

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
    },
    h5: {
        fontSize: "$subtitle3",
        "@md": {
            fontSize: "$heading5",
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

const Layout: React.FC<PageProps> = ({ children }) => {
    globalStyles();

    // const { pathname: path } = useLocation();

    return (
        <>
            <Helmet key="helmet">
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1" />
            </Helmet>
            {/* <Header transparent={path !== ""}></Header> */}
            <main>{children}</main>
            {/* <Footer></Footer> */}
        </>
    );
};

export default Layout;
