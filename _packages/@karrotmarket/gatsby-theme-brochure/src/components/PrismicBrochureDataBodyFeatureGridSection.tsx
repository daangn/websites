import * as React from 'react';
import { graphql } from 'gatsby';

export const fragments = graphql`
  fragment PrismicBrochureDataBodyFeatureGridSection_section on PrismicBrochureDataBodyFeatureGridSection {
    primary {
      section_id
    }
  }
`;

export default function PrismicBrochureDataBodyFeatureGridSection({ section }) {
  return <div>PrismicBrochureDataBodyFeatureGridSection</div>;
}
