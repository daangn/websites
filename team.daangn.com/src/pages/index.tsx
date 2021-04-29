import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

import Layout from '~/components/Layout';

type IndexPageProps = PageProps<GatsbyTypes.IndexPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query IndexPage {
    __typename
  }
`;

export default function IndexPage({
  data,
}: IndexPageProps) {
  return (
    <Layout />
  );
}
