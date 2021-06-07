import * as React from 'react';
import { rem } from 'polished';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { useLinkParser, mapLink } from '../link';

import SocialServiceProfile from './footer/SocialServiceProfile';

type FooterProps = {
  className?: string,
  navigationData: GatsbyTypes.Footer_navigationDataFragment,
};

export const query = graphql`
  fragment Footer_navigationData on PrismicSiteNavigationDataType {
    copyright {
      html
    }
    address
    footer_entries {
      display_text
      link {
        url
      }
    }
    sns_profiles {
      ...SocialServiceProfile_profile
    }
  }
`;

const Container = styled('footer', {
  display: 'grid',
  paddingTop: rem(32),
  paddingBottom: rem(96),
  borderTop: '1px solid $gray400',

  '@sm': {
    paddingTop: rem(70),
  },
});

const ContentWrapper = styled('div', {
  contentArea: true,
  width: '100%',
  display: 'grid',
  gap: rem(42),

  '@sm': {
    gap: rem(36),
  },
});

const TopContent = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  '@sm': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '$maxContent',
    marginX: 'auto',
  },

  '> * + *': {
    marginTop: rem(28),

    '@sm': {
      marginTop: 0,
    },
  },
});

const InfoWrapper = styled('section', {
  display: 'flex',
  gap: rem(16),
  flexDirection: 'column',
  color: '$gray600',
  fontSize: '$caption1',

  '@sm': {
    flexDirection: 'row',
  },
});

const Info = styled('p', {
});

const Copyright = styled('div', {
  fontSize: '$caption2',
});

const FooterEntryList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  listStyle: 'none',

  '& > * + *': {
    marginTop: rem(28),
    '@sm': {
      marginTop: 0,
      marginLeft: rem(48),
    },
  },

  '@sm': {
    flexDirection: 'row',
  },
});

const FooterEntryItem = styled('li', {
  fontSize: '$caption2',
  fontWeight: 700,
});

const FooterEntryLink = styled(Link, {
  color: '$gray900',
});

const SocialServiceProfileList = styled('ul', {
  display: 'flex',
  padding: 0,
  listStyle: 'none',
  '> * + *': {
    marginLeft: rem(24),
  },
});

const SocialServiceProfileItem = styled('li', {
  display: 'inline-flex',
  width: rem(32),
  height: rem(32),
  alignItems: 'center',
  justifyContent: 'center',
});

const Footer: React.FC<FooterProps> = ({
  className,
  navigationData,
}) => {
  const parseLink = useLinkParser();
  console.log(navigationData);

  return (
    <Container role="contentinfo" className={className}>
      <ContentWrapper>
      <TopContent>
        <FooterEntryList>
          {navigationData.footer_entries
          .filter(entry => entry.link)
          .map(entry => (
            <FooterEntryItem key={entry.link!.url}>
              {mapLink(parseLink(entry.link!.url), {
                Internal: link => (
                  <FooterEntryLink to={link.pathname}>
                    {entry.display_text}
                  </FooterEntryLink>
                ),
                External: link => (
                  <FooterEntryLink
                    as="a"
                    target="_blank"
                    rel="external noopener"
                    href={link.url.href}
                  >
                    {entry.display_text}
                  </FooterEntryLink>
                ),
              })}
            </FooterEntryItem>
          ))}
        </FooterEntryList>
        <SocialServiceProfileList>
          {navigationData.sns_profiles
          .filter(profile => profile.link)
          .map(profile => (
            <SocialServiceProfileItem key={profile.link!.url}>
              <SocialServiceProfile profile={profile} />
            </SocialServiceProfileItem>
          ))}
        </SocialServiceProfileList>
      </TopContent>
      <InfoWrapper>
        {navigationData.copyright?.html && (
          <Copyright
            dangerouslySetInnerHTML={{ __html: navigationData.copyright.html }}
          />
        )}
        {navigationData.address && (
          <Info>{navigationData.address}</Info>
        )}
      </InfoWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Footer;
