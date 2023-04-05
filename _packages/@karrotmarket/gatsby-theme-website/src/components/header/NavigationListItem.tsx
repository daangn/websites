import * as React from 'react';
import { Link } from 'gatsby';
import { rem } from 'polished';
import { useLocation } from '@reach/router';
import { vars } from '@seed-design/design-token';

import { styled } from 'gatsby-theme-stitches/src/config';
import { mapLink, useLinkParser } from '../../link';

import externalSvgUrl from '!!file-loader!./navigationListItem/external.svg';

const NavigationListItemContainer = styled('li', {
  fontSize: '$subtitle2',
  fontWeight: 'bold',

  opacity: 0.5,
  transform: 'translateY(50%)',
  transition: ['opacity .3s', 'transform .3s'].join(','),

  ':checked ~ ul > &': {
    opacity: 1,
    transform: 'none',
  },

  '@sm': {
    fontSize: '$body2',
    opacity: 1,
    transform: 'none',
  },
});

const NavigationLink = styled(Link, {
  display: 'inline-flex',
  alignItems: 'center',

  textDecoration: 'none',
  color: vars.$scale.color.gray900,
  '&:hover, &:focus': {
    color: vars.$scale.color.gray600,
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

const ExternalLink = styled(NavigationLink, {
  '&::after': {
    content: '',
    display: 'inline-block',
    width: rem(18),
    height: rem(18),
    backgroundColor: 'currentColor',
    maskImage: `url(${externalSvgUrl})`,
  },
});

interface FooterEntryItemProps {
  entry: Pick<GatsbyTypes.PrismicSiteNavigationDataFooterEntries, 'display_text'> & {
    readonly link: GatsbyTypes.Maybe<Pick<GatsbyTypes.PrismicLinkType, 'url'>>;
  };
}

const NavigationListItem: React.FC<FooterEntryItemProps> = ({ entry }) => {
  const parseLink = useLinkParser();
  const location = useLocation();

  return (
    // rome-ignore lint/style/noNonNullAssertion: intentional
    <NavigationListItemContainer key={entry.link!.url}>
      {/* rome-ignore lint/style/noNonNullAssertion: intentional */}
      {mapLink(parseLink(entry.link!.url), {
        Internal: (link) => (
          <NavigationLink
            to={link.pathname}
            active={
              link.pathname === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.pathname)
            }
          >
            {entry.display_text}
          </NavigationLink>
        ),
        External: (link) => (
          <ExternalLink as="a" rel="external noopener" href={link.url.href}>
            {entry.display_text}
          </ExternalLink>
        ),
      })}
    </NavigationListItemContainer>
  );
};

export default NavigationListItem;
