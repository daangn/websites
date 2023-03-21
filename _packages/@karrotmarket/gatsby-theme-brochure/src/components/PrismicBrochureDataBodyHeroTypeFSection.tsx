import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import RootContainer from './prismicBrochureDataBodyHeroTypeFSection/RootContainer';
import Content from './prismicBrochureDataBodyHeroTypeFSection/Content';
import Body from './prismicBrochureDataBodyHeroTypeFSection/Body';
import Extension from './prismicBrochureDataBodyHeroTypeFSection/Extension';
import TitleContainer from './prismicBrochureDataBodyHeroTypeFSection/TitleContainer';
import ComponentImage from './prismicBrochureDataBodyHeroTypeFSection/ComponentImage';

export const fragments = graphql`
  fragment PrismicBrochureDataBodyHeroTypeFSection_section on PrismicBrochureDataBodyHeroTypeFSection {
    primary {
      section_id

      title {
        html
      }

      description {
        html
      }

      direction

      background_color

      component_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              placeholder: NONE
              width: 440
              quality: 100
            )
          }
        }
      }

      extension
    }
  }
`;

type Props = {
  section: GatsbyTypes.PrismicBrochureDataBodyHeroSection_sectionFragment;
};

export default function PrismicBrochureDataBodyHeroTypeFSection({ section }: Props) {
  const componentImage =
    section.primary.component_image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(section.primary.component_image.localFile.childImageSharp.gatsbyImageData);

  return (
    <RootContainer
      id={section.primary.section_id || undefined}
      backgroundColor={section.primary.background_color}
    >
      <Content>
        <Body>
          <TitleContainer
            dangerouslySetInnerHTML={{
              __html: section.primary.title?.html || '',
            }}
          />
          <Extension id={section.primary.extension} />
        </Body>
        <ComponentImage image={componentImage} alt={section.primary.component_image?.alt || ''} />
      </Content>
    </RootContainer>
  );
}
