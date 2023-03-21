import * as React from 'react';
import { graphql } from 'gatsby';

import { ReactComponent as AppLogo } from '../assets/app-logo.svg';
import RootContainer from './prismicBrochureDataBodyAppDownloadSection/RootContainer';
import Content from './prismicBrochureDataBodyAppDownloadSection/Content';
import LogoContainer from './prismicBrochureDataBodyAppDownloadSection/LogoContainer';
import Body from './prismicBrochureDataBodyAppDownloadSection/Body';
import TitleContainer from './prismicBrochureDataBodyAppDownloadSection/TitleContainer';
import DescriptionContainer from './prismicBrochureDataBodyAppDownloadSection/DescriptionContainer';
import ButtonContainer from './prismicBrochureDataBodyAppDownloadSection/ButtonContainer';
import DownloadLinkButtonPlayStore from './DownloadLinkButtonPlayStore';
import DownloadLinkButtonAppStore from './DownloadLinkButtonAppStore';

export const fragments = graphql`
  fragment PrismicBrochureDataBodyAppDownloadSection_brochureData on PrismicBrochureDataType {
    ...DownloadLinkButtonAppStore_brochureData
    ...DownloadLinkButtonPlayStore_brochureData
  }

  fragment PrismicBrochureDataBodyAppDownloadSection_section on PrismicBrochureDataBodyAppDownloadSection {
    primary {
      section_id

      title {
        html
      }

      description {
        html
      }

      background_color
    }
  }
`;

type Props = {
  brochureData: GatsbyTypes.PrismicBrochureDataBodyAppDownloadSection_brochureDataFragment;
  section: GatsbyTypes.PrismicBrochureDataBodyAppDownloadSection_sectionFragment;
};

export default function PrismicBrochureDataBodyAppDownloadSection({
  brochureData,
  section,
}: Props) {
  return (
    <RootContainer
      id={section.primary.section_id || undefined}
      backgroundColor={section.primary.background_color || 'paper_default'}
    >
      <Content>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <Body>
          <TitleContainer
            dangerouslySetInnerHTML={{
              __html: section.primary.title.html || '',
            }}
          />
          <DescriptionContainer
            dangerouslySetInnerHTML={{
              __html: section.primary.description?.html || '',
            }}
          />
        </Body>
        <ButtonContainer>
          <DownloadLinkButtonPlayStore id="google_bottom" brochureData={brochureData} />
          <DownloadLinkButtonAppStore id="apple_bottom" brochureData={brochureData} />
        </ButtonContainer>
      </Content>
    </RootContainer>
  );
}
