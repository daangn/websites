import * as React from "react";
import { graphql } from "gatsby";

import globalStyles from "../styles/global";

interface LayoutProps {
  data: GatsbyTypes.DefaultLayout_queryFragment;
}
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

const Layout: React.FC<LayoutProps> = ({ children, data }) => {
  globalStyles();

  return <>{children}</>;
};

export default Layout;
