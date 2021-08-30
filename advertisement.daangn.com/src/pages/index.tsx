import * as React from "react";
import type { PageProps } from "gatsby";

import { globalStyles } from "~/gatsby-theme-stitches/stitches.config";
import { Banner } from "~/components/organisms/Banner";

globalStyles();

type IndexPageProps = PageProps;

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default IndexPage;
