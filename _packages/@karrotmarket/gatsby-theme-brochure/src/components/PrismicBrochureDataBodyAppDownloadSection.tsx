import * as React from 'react';
import { graphql } from 'gatsby';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

import { ReactComponent as AppLogo } from '../assets/app-logo.svg';
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
    <Container
      id={section.primary.section_id || undefined}
      backgroundColor={section.primary.background_color || 'paper_default'}
    >
      <Content>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <TextContainer>
          <TitleContainer
            dangerouslySetInnerHTML={{
              __html: section.primary.title.html || '',
            }}
          />
          <BodyContainer
            dangerouslySetInnerHTML={{
              __html: section.primary.description?.html || '',
            }}
          />
        </TextContainer>
        <ButtonContainer>
          <DownloadLinkButtonPlayStore id="google_bottom" brochureData={brochureData} />
          <DownloadLinkButtonAppStore id="apple_bottom" brochureData={brochureData} />
        </ButtonContainer>
      </Content>
    </Container>
  );
}

const Container = styled('section', {
  paddingY: rem(90),
  variants: {
    backgroundColor: {
      paper_default: {
        background: vars.$semantic.color.paperBackground,
      },
      paper_accent: {
        background: vars.$semantic.color.paperAccent,
      },
    },
  },
});

const Content = styled('div', {
  contentArea: true,
  display: 'grid',
  gap: '2.5rem',
  justifyContent: 'center',
  textAlign: 'center',
  wordBreak: 'keep-all',
});

const LogoContainer = styled('div', {});

const TextContainer = styled('div', {
  display: 'grid',
  gap: rem(20),
});

const TitleContainer = styled('div', {
  '& h2': {
    typography: '$subtitle2',

    '@md': {
      typography: '$heading4',
    },
  },
});

const BodyContainer = styled('div', {
  typography: '$body2',

  '@md': {
    typography: '$subtitle3',
  },
});

const ButtonContainer = styled('div', {
  display: 'none',

  '@md': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, max-content)',
    gap: '1rem',
    justifyContent: 'center',
  },
});
