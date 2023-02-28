import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

import { ReactComponent as IconDaangnApp } from '~/image/icon_daangn_app.svg';
import DownloadLinkButtonPlayStore from './DownloadLinkButtonPlayStore';
import DownloadLinkButtonAppStore from './DownloadLinkButtonAppStore';

export const fragment = graphql`
  fragment PrismicAdsContentDataBodyDownloadSection_data on PrismicAdsContentDataBodyDownloadSection {
    primary {
      section_id
      section_title {
        text
      }
      section_body {
        html
      }
    }
  }
`;

type Props = {
  data: GatsbyTypes.PrismicAdsContentDataBodyDownloadSection_dataFragment;
};

export default function PrismicAdsContentDataBodyDownloadSection({ data: { primary } }: Props) {
  return (
    <Container id={primary.section_id || undefined}>
      <Content>
        <IconContainer>
          <IconDaangnApp />
        </IconContainer>
        <TextContainer>
          <Title>{primary.section_title?.text || ''}</Title>
          <Body
            dangerouslySetInnerHTML={{
              __html: primary.section_body?.html || '',
            }}
          />
        </TextContainer>
        <ButtonContainer>
          <DownloadLinkButtonPlayStore id="google_bottom" />
          <DownloadLinkButtonAppStore id="apple_bottom" />
        </ButtonContainer>
      </Content>
    </Container>
  );
}

const Container = styled('section', {
  background: vars.$semantic.color.paperBackground,
  paddingY: rem(90),
});

const Content = styled('div', {
  contentArea: true,
  display: 'grid',
  gap: '2.5rem',
  justifyContent: 'center',
  textAlign: 'center',
  wordBreak: 'keep-all',
});

const IconContainer = styled('div', {});

const TextContainer = styled('div', {
  display: 'grid',
  gap: rem(20),
});

const Title = styled('h2', {
  typography: '$subtitle2',

  '@md': {
    typography: '$heading4',
  },
});

const Body = styled('div', {
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
