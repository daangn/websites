import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import type { LinkType } from '~/link';
import { mapLink } from '~/link';

type LinkProps = {
  to: LinkType,
  id?: string,
  className?: string,
  children?: React.ReactNode,
};

export default function Link({
  to,
  ...others
}: LinkProps) {
  return mapLink(to, {
    Internal: link => (
      <GatsbyLink to={link.path} {...others} />
    ),
    External: link => (
      <a
        href={link.url.toString()}
        rel="external noopener"
        {...others}
      />
    ),
  });
}
