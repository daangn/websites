import * as React from 'react';
import { graphql, type HeadProps } from 'gatsby';
import { HeadSeo } from 'gatsby-plugin-head-seo/src';

export const fragments = graphql`
  fragment PrismicBrochureHead_brochure on PrismicBrochure {
    data {
      page_title
      page_description
    }
  }
`;

type Props = {
  location: HeadProps['location'];
  brochure: GatsbyTypes.PrismicBrochureHead_brochureData;
};

export default function PrismicBrochureHead({ location, brochure }: Props) {
  return (
    <HeadSeo
      location={location}
      root={false}
      title={brochure.data.page_title}
      description={brochure.data.page_description}
    />
  );
}
