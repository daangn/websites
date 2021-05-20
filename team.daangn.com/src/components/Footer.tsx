import * as React from 'react';
import { rem } from 'polished';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { useLinkParser, mapLink } from '~/link';

import SocialServiceProfile from './footer/SocialServiceProfile';

type FooterProps = {
  className?: string,
  navigationData: GatsbyTypes.Footer_navigationDataFragment,
};

export const query = graphql`
  fragment Footer_navigationData on PrismicSiteNavigationDataType {
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
  borderTop: '1px solid $gray400',
});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: rem(32),
  paddingBottom: rem(80),
  paddingX: rem(24),
  '> * + *': {
    marginTop: rem(28),
  },
  variants: {
    wide: {
      true: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '$maxContent',
        marginX: 'auto',
        '> * + *': {
          marginTop: 0,
        },
      },
    },
  },
});

const Copyright = styled('p', {
  fontSize: '$caption2',
});

const FooterEntryList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  listStyle: 'none',
  '> * + *': {
    marginTop: rem(28),
  },
  variants: {
    wide: {
      true: {
        flexDirection: 'row',
        '> * + *': {
          marginTop: 0,
          marginLeft: rem(48),
        },
      },
    },
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

  return (
    <Container role="contentinfo" className={className}>
      <Content wide={{ '@sm': true }}>
        <FooterEntryList wide={{ '@sm': true }}>
          <Copyright>© 당근마켓</Copyright>
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
      </Content>
    </Container>
  );
};

export default Footer;
