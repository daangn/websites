import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';
import { useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';

import ArrowLink from './ArrowLink';
import SeedIcon from './SeedIcon';

export const fragment = graphql`
  fragment PrismicAdsContentDataBodyGuideSection_data on PrismicAdsContentDataBodyGuideSection {
    primary {
      section_id

      section_title {
        text
      }

      video_link {
        url
      }

      faq_1_text faq_1_link {
        url
      }

      faq_2_text
      faq_2_link {
        url
      }

      faq_3_text
      faq_3_link {
        url
      }
    }
  }
`;

type Props = {
  data: GatsbyTypes.PrismicAdsContentDataBodyGuideSection_dataFragment,
};

export default function PrismicAdsContentDataBodyGuideSection({
  data: {
    primary,
  },
}: Props) {
  const parseLink = useLinkParser();

  return (
    <Container
      id={primary.section_id || undefined}
    >
      <ContentWrapper>
        <Title>
          {primary.section_title.text || ''}
        </Title>
        <VideoGuideLink
          link={parseLink(primary.video_link?.url || '#')}
        >
          광고 영상 가이드
        </VideoGuideLink>
      </ContentWrapper>
      <FaqList>
        <FaqItem>
          <FaqLink
            id="FAQ_A"
            href={primary.faq_1_link?.url || '#'}
            target="_blank"
            rel="external noopener"
          >
            <span>
              {primary.faq_1_text || ''}
            </span>
            <SeedIcon
              name="icon_chevron_right_regular"
              size="1em"
            />
          </FaqLink>
        </FaqItem>
        <FaqItem>
          <FaqLink
            id="FAQ_B"
            href={primary.faq_2_link?.url || '#'}
            target="_blank"
            rel="external noopener"
          >
            <span>
              {primary.faq_2_text || ''}
            </span>
            <SeedIcon
              name="icon_chevron_right_regular"
              size="1em"
            />
          </FaqLink>
        </FaqItem>
        <FaqItem>
          <FaqLink
            id="FAQ_C"
            href={primary.faq_3_link?.url || '#'}
            target="_blank"
            rel="external noopener"
          >
            <span>
              {primary.faq_3_text || ''}
            </span>
            <SeedIcon
              name="icon_chevron_right_regular"
              size="1em"
            />
          </FaqLink>
        </FaqItem>
      </FaqList>
      <Helmet>
        <script
          type="application/ld+json"
        >
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntry': [
              (primary.faq_1_text && primary.faq_1_link?.url) && {
                '@type': 'Question',
                'name': primary.faq_1_text,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `<a href="${primary.faq_1_link.url}">가이드 바로가기</a>`,
                },
              },
              (primary.faq_2_text && primary.faq_2_link?.url) && {
                '@type': 'Question',
                'name': primary.faq_2_text,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `<a href="${primary.faq_2_link.url}">가이드 바로가기</a>`,
                },
              },
              (primary.faq_3_text && primary.faq_3_link?.url) && {
                '@type': 'Question',
                'name': primary.faq_2_text,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `<a href="${primary.faq_3_link.url}">가이드 바로가기</a>`,
                },
              },
            ].filter(Boolean),
          })}
        </script>
      </Helmet>
    </Container>
  );
}

const Container = styled('section', {
  contentArea: true,
  paddingY: '10rem',
  display: 'grid',
  gap: rem(60),

  '@md': {
    width: '80%',
    gridTemplateColumns: '1fr 2.5fr',
  },
});

const ContentWrapper = styled('div', {
  display: 'grid',
  gridTemplateRows: 'repeat(2, max-content)',
  gap: '2.5rem',
  justifyContent: 'center',

  '@md': {
    justifyContent: 'start',
    paddingTop: rem(28),
  },
});

const Title = styled('h2', {
  typography: '$subtitle2',
  textAlign: 'center',
  whiteSpace: 'pre-line',

  '@md': {
    typography: '$subtitle1',
    textAlign: 'left',
  },
});

const VideoGuideLink = styled(ArrowLink, {
  fontWeight: 'bold',
  filter: 'brightness(0)',
});

const FaqList = styled('ul', {
  listStyle: 'none',
});

const FaqItem = styled('li', {
  borderBottom: `1px solid ${vars.$semantic.color.divider2}`,
});

const FaqLink = styled('a', {
  typography: '$body2',
  display: 'flex',
  justifyContent: 'space-between',
  color: 'currentColor',
  textDecoration: 'none',
  paddingY: rem(28),

  '@md': {
    typography: '$subtitle3',
  },
});
