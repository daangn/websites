import * as React from 'react';
import { rem } from 'polished';
import { graphql, useStaticQuery } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';
import SeedIcon from '@karrotmarket/gatsby-theme-seed-design/src/Icon';

const QuestionInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  typography: '$body2',
  fontWeight: 'bold',

  p: { marginLeft: 8 },
  mark: {
    backgroundColor: 'transparent',
    color: vars.$semantic.color.primary,
    display: 'none',
    '@md': {
      display: 'inline',
    },
  },
});

const DisplayAdsGuide = styled('div', {
  display: 'flex',
  whiteSpace: 'nowrap',

  '@md': {
    marginRight: rem(56),
  },

  '& a': {
    color: 'currentColor',
    textDecoration: 'none',
  },
});

const ContactWrapper = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
});

const DisplayContact = styled('div', {
  whiteSpace: 'nowrap',

  '@md': {
    marginRight: rem(36),
  },

  '& a': {
    color: 'currentColor',
    textDecoration: 'none',
  },

  '& a > strong': {
    color: vars.$semantic.color.primary,
    display: 'none',
    '@md': {
      display: 'inline',
    },
  },
});

const CallIcon = styled(SeedIcon, {
  display: 'none !important',
  width: '1.5em',
  height: '1.5em',

  '@md': {
    display: 'inline-flex !important',
  },
});

const Divider = styled('span', {
  borderLeft: `1px solid ${vars.$semantic.color.divider3}`,
  marginLeft: rem(10),
  height: '0.8rem',

  '@md': {
    display: 'none',
  },
});

const GotoDaangnBusinessButton = styled('a', {
  display: 'none',

  '@md': {
    display: 'inline-block',
    backgroundColor: vars.$semantic.color.primary,
    color: vars.$semantic.color.onPrimary,
    padding: rem(8),
    borderRadius: rem(4),
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: rem(14),
    lineHeight: rem(20),
    letterSpacing: rem(-0.2),
    textAlign: 'center',
    textDecoration: 'none',
    marginLeft: rem(8),
  },
});

const Something: React.FC = () => {
  const staticData = useStaticQuery<GatsbyTypes.HeaderExtensionQuery>(
    graphql`
      query HeaderExtension {
        prismicAdsContent {
          data {
            header_guide {
              html
            }
            header_contact {
              html
            }
            business_center_link {
              url
            }
          }
        }
      }
    `,
  );

  const prismicAdsContent = staticData.prismicAdsContent!;

  return (
    <QuestionInfo>
      <DisplayAdsGuide
        dangerouslySetInnerHTML={{
          __html: prismicAdsContent.data.header_guide?.html || '',
        }}
      />
      <Divider />
      <ContactWrapper>
        <CallIcon name="icon_call_fill" />
        <DisplayContact
          dangerouslySetInnerHTML={{
            __html: prismicAdsContent.data.header_contact?.html || '',
          }}
        />
      </ContactWrapper>
      <GotoDaangnBusinessButton
        href={prismicAdsContent.data.business_center_link?.url || '#'}
        target="_blank"
        rel="external noopener"
      >
        광고주 센터
      </GotoDaangnBusinessButton>
    </QuestionInfo>
  );
};

export default Something;
