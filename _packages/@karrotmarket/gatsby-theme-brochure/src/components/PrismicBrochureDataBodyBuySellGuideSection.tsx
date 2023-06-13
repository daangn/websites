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
import LearnMoreButton from './prismicBrochureDataBodyBuySellGuideSection/LearnMoreButton';
import LearnMoreButtonContainer from './prismicBrochureDataBodyBuySellGuideSection/LearnMoreButtonContainer';

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
          {section.primary.learn_more_link?.url && (
            <LearnMoreButtonContainer>
              <LearnMoreButton href={section.primary.learn_more_link?.url}>
                {section.primary.learn_more_label}
                <ForwardIcon />
              </LearnMoreButton>
            </LearnMoreButtonContainer>
          )}
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

const ForwardIcon = () => (
  <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14.5" r="13.4" stroke="#212124" strokeWidth="1.2"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M13.4697 21.0303C13.1768 20.7374 13.1768 20.2626 13.4697 19.9697L18.1893 15.25L8 15.25C7.58579 15.25 7.25 14.9142 7.25 14.5C7.25 14.0858 7.58579 13.75 8 13.75L18.1893 13.75L13.4697 9.03033C13.1768 8.73744 13.1768 8.26256 13.4697 7.96967C13.7626 7.67678 14.2374 7.67678 14.5303 7.96967L20.5303 13.9697C20.8232 14.2626 20.8232 14.7374 20.5303 15.0303L14.5303 21.0303C14.2374 21.3232 13.7626 21.3232 13.4697 21.0303Z" fill="currentColor"/>
  </svg>
);
