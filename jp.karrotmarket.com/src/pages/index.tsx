import * as React from 'react';
import { graphql, type PageProps } from 'gatsby';

import Layout from '@karrotmarket/gatsby-theme-website-global/src/components/Layout';
import BrochureSliceZone from '@karrotmarket/gatsby-theme-brochure/src/components/PrismicBrochureSliceZone';

export const query = graphql`
  query IndexPage($locale: String) {
    prismicSiteNavigation(uid: { eq: "global" }, lang: { eq: $locale }) {
      ...DefaultLayout_data
    }

    prismicBrochure(uid: { eq: "jp-home" }) {
      ...BrochureSliceZone_brochure
    }
  }
`;

export default function IndexPage({ data }: PageProps<GatsbyTypes.IndexPageQuery>) {
  return (
    <Layout data={data.prismicSiteNavigation!.data}>
      <BrochureSliceZone brochure={data.prismicBrochure!} />
    </Layout>
  );
}
