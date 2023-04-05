import * as React from 'react';
import { Link } from 'gatsby';
import { rem } from 'polished';
import { useLocation } from '@reach/router';
import { vars } from '@seed-design/design-token';

import { styled } from 'gatsby-theme-stitches/src/config';
import { mapLink, useLinkParser } from '../../link';

import externalSvgUrl from '!!file-loader!./footerEntryItem/external.svg';

const FooterEntryItemContainer = styled('li', {
  fontSize: '$caption2',
});

const FooterEntryLink = styled(Link, {
  display: 'inline-flex',
  alignItems: 'center',

  color: vars.$scale.color.gray900,
  textDecoration: 'none',
  opacity: 1,

  '&:hover, &:focus': {
    opacity: 0.64,
  },

  variants: {
    active: {
      true: {
        color: vars.$scale.color.carrot500,
        '&:hover, &:focus': {
          color: vars.$scale.color.carrot600,
        },
      },
    },
  },
});

const ExternalLink = styled(FooterEntryLink, {
  '&::after': {
    content: '',
    display: 'inline-block',
    width: rem(16),
    height: rem(16),
    backgroundColor: 'currentColor',
    maskImage: `url(${externalSvgUrl})`,
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
    // rome-ignore lint/style/noNonNullAssertion: intentional
    <FooterEntryItemContainer key={entry.link!.url!}>
      {/* rome-ignore lint/style/noNonNullAssertion: intentional */}
      {mapLink(parseLink(entry.link!.url!), {
        Internal: (link) => (
          <FooterEntryLink
            to={link.pathname}
            active={
              link.pathname === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.pathname)
            }
            dangerouslySetInnerHTML={{
              __html: entry.text?.html || '',
            }}
          />
        ),
        External: (link) => (
          <ExternalLink
            as="a"
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
