import * as React from "react";
import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/config";

import SocialServiceProfile from "./footer/SocialServiceProfile";
import FooterEntryItem from "./footer/FooterEntryItem";

type FooterProps = {
  className?: string;
  navigationData: GatsbyTypes.Footer_navigationDataFragment;
};

export const query = graphql`
  fragment Footer_navigationData on PrismicSiteNavigationDataType {
    copyright {
      html
    }
    contact_group {
      contact_info {
        html
      }
    }
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

const Container = styled("footer", {
  display: "grid",
  paddingTop: rem(32),
  paddingBottom: rem(96),
  borderTop: "1px solid $gray400",

  "@sm": {
    paddingTop: rem(70),
  },
});

const ContentWrapper = styled("div", {
  contentArea: true,
  width: "100%",
  display: "grid",
  gap: rem(42),

  "@sm": {
    gap: rem(36),
  },
});

const TopContent = styled("nav", {
  width: "100%",
  display: "flex",
  flexDirection: "column",

  "@sm": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "$maxContent",
    marginX: "auto",
  },

  "> * + *": {
    marginTop: rem(28),

    "@sm": {
      marginTop: 0,
    },
  },
});

const InfoWrapper = styled("div", {
  display: "flex",
  gap: rem(16),
  flexDirection: "column",
  color: "$gray600",
  fontSize: "$caption1",
});

const Contact = styled("section", {
  display: "flex",
  maxWidth: rem(600),
  flexWrap: "wrap",
  gap: `${rem(4)} ${rem(8)}`,

  '& a': {
    color: '$gray600',
  },
});

const Copyright = styled("div", {
  fontSize: "$caption2",
});

const FooterEntryList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  padding: 0,
  listStyle: "none",

  "& > * + *": {
    marginTop: rem(28),
    "@sm": {
      marginTop: 0,
      marginLeft: rem(48),
    },
  },

  "@sm": {
    flexDirection: "row",
  },
});

const SocialServiceProfileList = styled("ul", {
  display: "flex",
  flexWrap: "wrap",
  gap: rem(24),
  padding: 0,
  listStyle: "none",
});

const SocialServiceProfileItem = styled("li", {
  display: "inline-flex",
  width: rem(32),
  height: rem(32),
  alignItems: "center",
  justifyContent: "center",
});

const Footer: React.FC<FooterProps> = ({ className, navigationData }) => {
  return (
    <Container role="contentinfo" className={className}>
      <ContentWrapper>
        <TopContent>
          <FooterEntryList>
            {navigationData.footer_entries
              .filter((entry) => entry.link?.url)
              .map((entry, i) => (
                <FooterEntryItem
                  key={i}
                  entry={entry}
                />
              ))}
          </FooterEntryList>
          <SocialServiceProfileList>
            {navigationData.sns_profiles
              .filter((profile) => profile.link)
              .map((profile, i) => (
                <SocialServiceProfileItem key={i}>
                  <SocialServiceProfile profile={profile} />
                </SocialServiceProfileItem>
              ))}
          </SocialServiceProfileList>
        </TopContent>
        <InfoWrapper>
          <Contact>
            {navigationData.contact_group.map((contact, i) => (
              <div
                key={i}
                dangerouslySetInnerHTML={{
                  __html: contact.contact_info.html,
                }}
              />
            ))}
          </Contact>
          {navigationData.copyright?.html && (
            <Copyright
              dangerouslySetInnerHTML={{
                __html: navigationData.copyright.html,
              }}
            />
          )}
        </InfoWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Footer;
