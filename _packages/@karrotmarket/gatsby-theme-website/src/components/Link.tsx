import { type IntrinsicElementWrapperFuntion } from '@cometjs/react-utils';
import { Link as GatsbyLink, type GatsbyLinkProps } from 'gatsby';
import * as React from 'react';

import { type LinkType, mapLink } from '../link';

type Props = {
  link: LinkType;
  children: React.ReactNode;
  to: never;
} & GatsbyLinkProps<unknown>;

const Link: IntrinsicElementWrapperFuntion<'a', Props> = (
  { link, children, ...otherProps },
  forwaredRef,
) => {
  return mapLink(link, {
    Internal: (link) => (
      // biome-ignore lint/suspicious/noExplicitAny: sorry
      <GatsbyLink {...otherProps} ref={forwaredRef as any} to={link.pathname}>
        {children}
      </GatsbyLink>
    ),
    External: (link) => (
      <a {...otherProps} ref={forwaredRef} href={link.url.href}>
        {children}
      </a>
    ),
  });
};

export default React.forwardRef(Link);
