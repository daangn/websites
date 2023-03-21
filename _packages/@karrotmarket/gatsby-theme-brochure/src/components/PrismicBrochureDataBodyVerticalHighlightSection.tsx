import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import RootContainer from './prismicBrochureDataBodyVerticalHighlightSection/RootContainer';
import Content from './prismicBrochureDataBodyVerticalHighlightSection/Content';
import Body from './prismicBrochureDataBodyVerticalHighlightSection/Body';
import TitleContainer from './prismicBrochureDataBodyVerticalHighlightSection/TitleContainer';
import DescriptionContainer from './prismicBrochureDataBodyVerticalHighlightSection/DescriptionContainer';
import HighlightImage from './prismicBrochureDataBodyVerticalHighlightSection/HighlightImage';

export const fragments = graphql`
  fragment PrismicBrochureDataBodyVerticalHighlightSection_section on PrismicBrochureDataBodyVerticalHighlightSection {
    primary {
      section_id

      title {
        html
      }

      description {
        html
      }

      image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
            )
          }
        }
      }

      reversed
    }
  }
`;

type Props = {
  section: GatsbyTypes.PrismicBrochureDataBodyVerticalHighlightSection_sectionFragment;
};

export default function PrismicBrochureDataBodyVerticalHighlightSection({ section }: Props) {
  const image =
    section.primary.image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(section.primary.image.localFile.childImageSharp.gatsbyImageData);

  return (
    <RootContainer id={section.primary.section_id || ''}>
      <Content reversed={section.primary.reversed}>
        <Body>
          <TitleContainer
            dangerouslySetInnerHTML={{
              __html: section.primary.title?.html || '',
            }}
          />
          <DescriptionContainer
            dangerouslySetInnerHTML={{
              __html: section.primary.description?.html || '',
            }}
          />
        </Body>
        <HighlightImage image={image} alt={section.primary.image?.alt || ''} />
      </Content>
    </RootContainer>
  );
}
