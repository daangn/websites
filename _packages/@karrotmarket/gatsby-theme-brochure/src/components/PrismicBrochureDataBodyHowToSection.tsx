import * as React from 'react';
import { graphql } from 'gatsby';

import RootContainer from './prismicBrochureDataBodyHowToSection/RootContainer';

export const fragments = graphql`
  fragment PrismicBrochureDataBodyHowToSection_section on PrismicBrochureDataBodyHowToSection {
    primary {
      section_id

      title {
        html
      }

      theme
    }

    items {
      step_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      step_title
      step_description {
        html
      }
    }
  }
`;

type Props = {
  section: GatsbyTypes.PrismicBrochureDataBodyHowToSection_sectionFragment;
};

export default function PrismicBrochureDataBodyHowToSection({ section }: Props) {
  return (
    <RootContainer id={section.primary.section_id || undefined}>
      TODO: PrismicBrochureDataBodyHowToSection
    </RootContainer>
  );
}
