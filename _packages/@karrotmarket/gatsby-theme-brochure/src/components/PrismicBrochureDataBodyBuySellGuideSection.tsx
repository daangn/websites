import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import RootContainer from './prismicBrochureDataBodyBuySellGuideSection/RootContainer';
import Content from './prismicBrochureDataBodyBuySellGuideSection/Content';
import Header from './prismicBrochureDataBodyBuySellGuideSection/Header';
import TitleContainer from './prismicBrochureDataBodyBuySellGuideSection/TitleContainer';
import Guide from './prismicBrochureDataBodyBuySellGuideSection/Guide';
import Body from './prismicBrochureDataBodyBuySellGuideSection/Body';
import GuideBody from './prismicBrochureDataBodyBuySellGuideSection/GuideBody';
import GuideImage from './prismicBrochureDataBodyBuySellGuideSection/GuideImage';
import GuideTitle from './prismicBrochureDataBodyBuySellGuideSection/GuideTitle';
import GuideDescription from './prismicBrochureDataBodyBuySellGuideSection/GuideDescription';
import GuideLabel from './prismicBrochureDataBodyBuySellGuideSection/GuideLabel';

export const fragments = graphql`
  fragment PrismicBrochureDataBodyBuySellGuideSection_section on PrismicBrochureDataBodyBuySellGuideSection {
    primary {
      section_id

      title {
        html
      }

      learn_more_label
      learn_more_link {
        url
      }

      sell_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
            )
          }
        }
      }
      sell_label
      sell_title {
        text
      }
      sell_description {
        text
      }

      buy_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
            )
          }
        }
      }
      buy_label
      buy_title {
        text
      }
      buy_description {
        text
      }
    }
  }
`;

type Props = {
  section: GatsbyTypes.PrismicBrochureDataBodyBuySellGuideSection_sectionFragment;
};

export default function PrismicBrochureDataBodyBuySellGuideSection({ section }: Props) {
  const sellImage =
    section.primary.sell_image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(section.primary.sell_image.localFile.childImageSharp.gatsbyImageData);
  const buyImage =
    section.primary.buy_image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(section.primary.buy_image.localFile.childImageSharp.gatsbyImageData);

  return (
    <RootContainer id={section.primary.section_id || ''}>
      <Content>
        <Header>
          <TitleContainer
            dangerouslySetInnerHTML={{
              __html: section.primary.title?.html || '',
            }}
          />
          {section.primary.learn_more_link?.url && <>Test</>}
        </Header>
        <Body>
          <Guide guideFor="sell">
            <GuideImage image={sellImage} alt={section.primary.sell_image?.alt || ''} />
            <GuideBody guideFor="sell">
              <GuideLabel>{section.primary.sell_label || ''}</GuideLabel>
              <GuideTitle>{section.primary.sell_title?.text || ''}</GuideTitle>
              <GuideDescription>{section.primary.sell_description?.text || ''}</GuideDescription>
            </GuideBody>
          </Guide>
          <Guide guideFor="buy">
            <GuideImage image={buyImage} alt={section.primary.buy_image?.alt || ''} />
            <GuideBody guideFor="buy">
              <GuideLabel>{section.primary.buy_label || ''}</GuideLabel>
              <GuideTitle>{section.primary.buy_title?.text || ''}</GuideTitle>
              <GuideDescription>{section.primary.buy_description?.text || ''}</GuideDescription>
            </GuideBody>
          </Guide>
        </Body>
      </Content>
    </RootContainer>
  );
}
