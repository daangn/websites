import * as React from 'react';
import { graphql } from 'gatsby';

import RootContainer from './prismicBrochureDataBodyFaqSection/RootContainer';

export const fragments = graphql`
  fragment PrismicBrochureDataBodyFaqSection_section on PrismicBrochureDataBodyFaqSection {
    primary {
      section_id

      title {
        html
      }

      learn_more_link {
        url
      }
      learn_more_label

      direction
    }

    items {
      question

      answer_text {
        html
      }

      answer_link {
        url
      }
    }
  }
`;

type Props = {
  section: GatsbyTypes.PrismicBrochureDataBodyFaqSection_sectionFragment;
};

export default function PrismicBrochureDataBodyFaqSection({ section }: Props) {
  return (
    <RootContainer id={section.primary.section_id || undefined}>
      TODO: PrismicBrochureDataBodyFaqSection
    </RootContainer>
  );
}
