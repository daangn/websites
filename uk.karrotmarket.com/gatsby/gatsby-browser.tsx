import "./src/styles/global.css";
import * as React from "react";
import { PreviewStoreProvider } from "gatsby-source-prismic";

export const wrapRootElement = ({ element }) => <PreviewStoreProvider>{element}</PreviewStoreProvider>;
