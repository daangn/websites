import * as React from 'react';
import type { LinkType } from '@karrotmarket/gatsby-theme-website/src/link';

import ArrowLink from './ArrowLink';

type DetailLinkProps = {
  link: LinkType,
  className?: string,
  children: string,
};

const DetailLink: React.FC<DetailLinkProps> = ({
  link,
  className,
  children,
}) => {
  return (
    <ArrowLink
      link={link}
      className={className}
      direction="forward"
    >
      {children}
    </ArrowLink>
  );
};

export default DetailLink;
