import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import RootContainer from './prismicBrochureDataBodyFeatureGridSection/RootContainer';
import Content from './prismicBrochureDataBodyFeatureGridSection/Content';
import Header from './prismicBrochureDataBodyBuySellGuideSection/Header';
import TitleContainer from './prismicBrochureDataBodyFeatureGridSection/TitleContainer';
import DescriptionContainer from './prismicBrochureDataBodyFeatureGridSection/DescriptionContainer';
import FeatureGrid from './prismicBrochureDataBodyFeatureGridSection/FeatureGrid';
import Feature from './prismicBrochureDataBodyFeatureGridSection/Feature';
import FeatureImage from './prismicBrochureDataBodyFeatureGridSection/FeatureImage';
import FeatureTitle from './prismicBrochureDataBodyFeatureGridSection/FeatureTitle';
import FeatureDescription from './prismicBrochureDataBodyFeatureGridSection/FeatureDescription';
import FeatureBody from './prismicBrochureDataBodyFeatureGridSection/FeatureBody';

export const fragments = graphql`
  fragment PrismicBrochureDataBodyFeatureGridSection_section on PrismicBrochureDataBodyFeatureGridSection {
    primary {
      section_id

      background_color

      max_column

      title {
        html
      }

      description {
        html
      }
    }

    items {
      item_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: NONE
              layout: FIXED
              quality: 100
            )
          }
        }
      }
      item_title {
        html
      }
      item_description {
        html
      }
    }
  }
`;

type Props = {
  section: GatsbyTypes.PrismicBrochureDataBodyFeatureGridSection_sectionFragment;
};

export default function PrismicBrochureDataBodyFeatureGridSection({ section }: Props) {
  return (
    <RootContainer
      id={section.primary.section_id || undefined}
      backgroundColor={section.primary.background_color}
    >
      <Content>
        <Header>
          <TitleContainer
            dangerouslySetInnerHTML={{
              __html: section.primary.title?.html || '',
            }}
          />
          {section.primary.description?.html && (
            <DescriptionContainer
              dangerouslySetInnerHTML={{
                __html: section.primary.description?.html || '',
              }}
            />
          )}
        </Header>
        <FeatureGrid
          css={{
            $$maxCols: section.primary.max_column || 2,
            $$maxColsPower: Math.pow(2, section.primary.max_column || 2),
          }}
        >
          {section.items.map((item, i) => {
            const itemImage =
              item.item_image?.localFile?.childImageSharp?.gatsbyImageData &&
              getImage(item.item_image.localFile.childImageSharp.gatsbyImageData);

            return (
              // rome-ignore lint/suspicious/noArrayIndexKey: intentional
              <Feature key={i}>
                <FeatureImage image={itemImage} alt={item.item_image?.alt || ''} />
                <FeatureBody>
                  <FeatureTitle
                    dangerouslySetInnerHTML={{
                      __html: item.item_title?.html || '',
                    }}
                  />
                  <FeatureDescription
                    dangerouslySetInnerHTML={{
                      __html: item.item_description?.html || '',
                    }}
                  />
                </FeatureBody>
              </Feature>
            );
          })}
        </FeatureGrid>
      </Content>
    </RootContainer>
  );
}
