import * as React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import { vars } from '@seed-design/design-token';

import { styled } from 'gatsby-theme-stitches/src/config';
import { mapLink, useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';

const FooterEntryItemContainer = styled('li', {
  fontSize: '$caption2',
});

const FooterEntryLink = styled(Link, {
  color: vars.$scale.color.gray900,
  textDecoration: 'none',
  opacity: 1,

  '&:hover': {
    opacity: 0.64,
  },

  variants: {
    active: {
      true: {
        color: vars.$scale.color.carrot500,
        '&:hover, &:active, &:focus': {
          color: vars.$scale.color.carrot600,
        },
      },
    },
  },
});

interface FooterEntryItemProps {
  entry: Pick<GatsbyTypes.PrismicSiteNavigationDataFooterEntries, 'text'> & {
    readonly link: GatsbyTypes.Maybe<Pick<GatsbyTypes.PrismicLinkType, 'url'>>;
  };
}

const FooterEntryItem: React.FC<FooterEntryItemProps> = ({ entry }) => {
  const parseLink = useLinkParser();
  const location = useLocation();

  return (
    <FooterEntryItemContainer key={entry.link!.url!}>
      {mapLink(parseLink(entry.link!.url!), {
        Internal: (link) => (
          <FooterEntryLink
            {...(link.pathname === '/' || link.pathname === '/about'
              ? {
                  to: link.pathname,
                  active: link.pathname === location.pathname,
                }
              : {
                  as: 'a',
                  href: link.pathname,
                })}
            dangerouslySetInnerHTML={{
              __html: entry.text?.html || '',
            }}
          />
        ),
        External: (link) => (
          <FooterEntryLink
            as="a"
            target="_blank"
            rel="external noopener"
            href={link.url.href}
            dangerouslySetInnerHTML={{
              __html: entry.text?.html || '',
            }}
          />
        ),
      })}
    </FooterEntryItemContainer>
  );
};

export default FooterEntryItem;
