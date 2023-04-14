import * as React from 'react';
import { graphql, type PageProps, type HeadProps } from 'gatsby';
import { HeadSeo } from 'gatsby-plugin-head-seo/src';

import Layout from '@karrotmarket/gatsby-theme-website-global/src/components/Layout';
import PrismicBrochureHead from '@karrotmarket/gatsby-theme-brochure/src/components/PrismicBrochureHead';
import PrismicBrochureSliceZone from '@karrotmarket/gatsby-theme-brochure/src/components/PrismicBrochureSliceZone';

export const query = graphql`
  query IndexPage($locale: String) {
    prismicSiteNavigation(uid: { eq: "global" }, lang: { eq: $locale }) {
      ...DefaultLayout_data
    }

    prismicBrochure(uid: { eq: "jp-home" }) {
      ...PrismicBrochureHead_brochure
      ...PrismicBrochureSliceZone_brochure
    }
  }
`;

export default function IndexPage({ data }: PageProps<GatsbyTypes.IndexPageQuery>) {
  return (
    // rome-ignore lint/style/noNonNullAssertion: intentional
    <Layout data={data.prismicSiteNavigation!.data}>
      {/* rome-ignore lint/style/noNonNullAssertion: intentional */}
      <PrismicBrochureSliceZone brochure={data.prismicBrochure!} />
    </Layout>
  );
}

export function Head({ location, data }: HeadProps<GatsbyTypes.IndexPageQuery>) {
  return (
    <HeadSeo location={location}>
      <PrismicBrochureHead location={location} brochure={data.prismicBrochure} />
    </HeadSeo>
  );
}
