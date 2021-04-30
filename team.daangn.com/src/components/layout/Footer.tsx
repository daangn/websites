import { mapAbstractType } from '@cometjs/graphql-utils';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';

import SocialServiceProfile from './footer/SocialServiceProfile';

type FooterProps = {
  className?: string,
  navigation: GatsbyTypes.Footer_navigationFragment,
};

export const query = graphql`
  fragment Footer_navigation on SiteNavigation {
    footerEntries {
      __typename
      href
      displayName
      ...on SiteNavigationEntryInternal {
        pathname
      }
      ...on SiteNavigationEntryExternal {
        url
      }
    }
    socialProfiles {
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

export default function Footer({
  className,
  navigation,
}: FooterProps) {
  return (
    <Container role="contentinfo" className={className}>
      <Content wide={{ '@sm': true }}>
        <FooterEntryList wide={{ '@sm': true }}>
          <Copyright>© 당근마켓</Copyright>
          {navigation.footerEntries.map((entry, i) => (
            <FooterEntryItem key={`${entry.href}#${i}`}>
              {mapAbstractType(entry, {
                SiteNavigationEntryInternal: entry => (
                  <FooterEntryLink to={entry.pathname}>
                    {entry.displayName}
                  </FooterEntryLink>
                ),
                SiteNavigationEntryExternal: entry => (
                  <FooterEntryLink
                    as="a"
                    target="_blank"
                    rel="external noopener"
                    href={entry.url}
                  >
                    {entry.displayName}
                  </FooterEntryLink>
                ),
              })}
            </FooterEntryItem>
          ))}
        </FooterEntryList>
        <SocialServiceProfileList>
          {navigation.socialProfiles.map(profile => (
            <SocialServiceProfileItem key={profile.url}>
              <SocialServiceProfile profile={profile} />
            </SocialServiceProfileItem>
          ))}
        </SocialServiceProfileList>
      </Content>
    </Container>
  );
}
