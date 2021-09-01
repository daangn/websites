import * as React from "react";
import type { PageProps } from "gatsby";

import { globalStyles } from "~/gatsby-theme-stitches/stitches.config";
import { Banner } from "~/components/organisms/Banner";
import { Main } from "~/components/organisms/Main";
import { PromotionInfoDownload } from "~/components/organisms/PromotionInfoDownload";
import {BannerTitle} from "~/components/molecules/BannerTitle";
import {LearnMore} from "~/components/organisms/LearnMore";

globalStyles();

type IndexPageProps = PageProps;

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <div>
      <BannerTitle />
      <Banner />
      <Main />
      <PromotionInfoDownload />
      <LearnMore />
    </div>
  );
};

export default IndexPage;
