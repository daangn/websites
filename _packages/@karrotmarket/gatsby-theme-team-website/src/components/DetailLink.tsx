import * as React from 'react';
import type { LinkType } from '@karrotmarket/gatsby-theme-website/src/link';

import ArrowLink from './ArrowLink';

import messages from './detailLink/messages';

type DetailLinkProps = {
  link: LinkType,
  className?: string,
  message?: string,
};

const DetailLink: React.FC<DetailLinkProps> = ({
  link,
  className,
  message = messages.detail,
}) => {
  return (
    <ArrowLink
      link={link}
      className={className}
      direction="forward"
    >
      {message}
    </ArrowLink>
  );
};

export default DetailLink;
