import * as React from 'react';
import { graphql } from 'gatsby';
import { mapAbstractType } from '@cometjs/graphql-utils';

import PrismicBrochureDataBodyAppDownloadSection from './PrismicBrochureDataBodyAppDownloadSection';
import PrismicBrochureDataBodyCoverImageSection from './PrismicBrochureDataBodyCoverImageSection';
import PrismicBrochureDataBodyFaqSection from './PrismicBrochureDataBodyFaqSection';
import PrismicBrochureDataBodyBuySellGuideSection from './PrismicBrochureDataBodyBuySellGuideSection';
import PrismicBrochureDataBodyFeatureGridSection from './PrismicBrochureDataBodyFeatureGridSection';
import PrismicBrochureDataBodyHeroTypeBSection from './PrismicBrochureDataBodyHeroTypeBSection';
import PrismicBrochureDataBodyHeroTypeFSection from './PrismicBrochureDataBodyHeroTypeFSection';
import PrismicBrochureDataBodyHowToSection from './PrismicBrochureDataBodyHowToSection';
import PrismicBrochureDataBodyVerticalHighlightSection from './PrismicBrochureDataBodyVerticalHighlightSection';

export const fragment = graphql`
  fragment PrismicBrochureSliceZone_brochure on PrismicBrochure {
    data {
      ...PrismicBrochureDataBodyAppDownloadSection_brochureData
      body {
        __typename
        ...PrismicBrochureDataBodyAppDownloadSection_section
        ...PrismicBrochureDataBodyBuySellGuideSection_section
        ...PrismicBrochureDataBodyCoverImageSection_section
        ...PrismicBrochureDataBodyFaqSection_section
        ...PrismicBrochureDataBodyFeatureGridSection_section
        ...PrismicBrochureDataBodyHeroTypeBSection_section
        ...PrismicBrochureDataBodyHeroTypeFSection_section
        ...PrismicBrochureDataBodyHowToSection_section
        ...PrismicBrochureDataBodyVerticalHighlightSection_section
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
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              key={i}
              brochureData={brochure.data}
              section={section}
            />
          ),
          PrismicBrochureDataBodyBuySellGuideSection: (section) => (
            // rome-ignore lint/suspicious/noArrayIndexKey: intentional
            <PrismicBrochureDataBodyBuySellGuideSection key={i} section={section} />
          ),
          PrismicBrochureDataBodyCoverImageSection: (section) => (
            // rome-ignore lint/suspicious/noArrayIndexKey: intentional
            <PrismicBrochureDataBodyCoverImageSection key={i} section={section} />
          ),
          PrismicBrochureDataBodyFaqSection: (section) => (
            // rome-ignore lint/suspicious/noArrayIndexKey: intentional
            <PrismicBrochureDataBodyFaqSection key={i} section={section} />
          ),
          PrismicBrochureDataBodyFeatureGridSection: (section) => (
            // rome-ignore lint/suspicious/noArrayIndexKey: intentional
            <PrismicBrochureDataBodyFeatureGridSection key={i} section={section} />
          ),
          PrismicBrochureDataBodyHeroTypeBSection: (section) => (
            // rome-ignore lint/suspicious/noArrayIndexKey: intentional
            <PrismicBrochureDataBodyHeroTypeBSection key={i} section={section} />
          ),
          PrismicBrochureDataBodyHeroTypeFSection: (section) => (
            // rome-ignore lint/suspicious/noArrayIndexKey: intentional
            <PrismicBrochureDataBodyHeroTypeFSection key={i} section={section} />
          ),
          PrismicBrochureDataBodyHowToSection: (section) => (
            // rome-ignore lint/suspicious/noArrayIndexKey: intentional
            <PrismicBrochureDataBodyHowToSection key={i} section={section} />
          ),
          PrismicBrochureDataBodyVerticalHighlightSection: (section) => (
            // rome-ignore lint/suspicious/noArrayIndexKey: intentional
            <PrismicBrochureDataBodyVerticalHighlightSection key={i} section={section} />
          ),
          _: null,
        }),
      )}
    </>
  );
}
