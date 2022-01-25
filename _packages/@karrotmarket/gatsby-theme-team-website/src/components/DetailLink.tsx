import * as React from 'react';
import type { LinkType } from '@karrotmarket/gatsby-theme-website/src/link';

import ArrowLink from './ArrowLink';

import messages from '../translations.json';

type DetailLinkProps = {
  link: LinkType,
  className?: string,
  message?: string,
};

const DetailLink: React.FC<DetailLinkProps> = ({
  link,
  className,
  message = messages.detail_link__default_label,
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
