import * as React from 'react';
import { graphql } from 'gatsby';
import { mapAbstractType } from '@cometjs/graphql-utils';

import PrismicBrochureDataBodyAppDownloadSection from './PrismicBrochureDataBodyAppDownloadSection';
import PrismicBrochureDataBodyBuySellGuideSection from './PrismicBrochureDataBodyBuySellGuideSection';
import PrismicBrochureDataBodyFeatureGridSection from './PrismicBrochureDataBodyFeatureGridSection';
import PrismicBrochureDataBodyHeroSection from './PrismicBrochureDataBodyHeroSection';
import PrismicBrochureDataBodyVerticalHighlightSection from './PrismicBrochureDataBodyVerticalHighlightSection';

export const fragment = graphql`
  fragment BrochureSliceZone_brochure on PrismicBrochure {
    data {
      ...PrismicBrochureDataBodyAppDownloadSection_brochureData
      body {
        __typename
        ...PrismicBrochureDataBodyAppDownloadSection_section
      }
    }
  }
`;

export type Props = {
  brochure: GatsbyTypes.BrochureSliceZone_brochureFragment;
};

export default function BrochureSliceZone({ brochure }: Props) {
  return (
    <>
      {brochure.data.body.map((slice, i) =>
        mapAbstractType(slice, {
          PrismicBrochureDataBodyAppDownloadSection: (section) => (
            <PrismicBrochureDataBodyAppDownloadSection
              key={i}
              brochureData={brochure.data}
              section={section}
            />
          ),
          PrismicBrochureDataBodyBuySellGuideSection: (section) => (
            <PrismicBrochureDataBodyBuySellGuideSection key={i} section={section} />
          ),
          PrismicBrochureDataBodyFeatureGridSection: (section) => (
            <PrismicBrochureDataBodyFeatureGridSection key={i} section={section} />
          ),
          PrismicBrochureDataBodyHeroSection: (section) => (
            <PrismicBrochureDataBodyHeroSection key={i} section={section} />
          ),
          PrismicBrochureDataBodyVerticalHighlightSection: (section) => (
            <PrismicBrochureDataBodyVerticalHighlightSection key={i} section={section} />
          ),
          _: null,
        }),
      )}
    </>
  );
}
