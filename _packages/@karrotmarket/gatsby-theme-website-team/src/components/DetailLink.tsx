import { useTranslation } from '@karrotmarket/gatsby-theme-website-team/src/translation';
import type { LinkType } from '@karrotmarket/gatsby-theme-website/src/link';
import * as React from 'react';

import ArrowLink from './ArrowLink';

type DetailLinkProps = {
  link: LinkType;
  className?: string;
  message?: string;
};

const DetailLink: React.FC<DetailLinkProps> = ({ link, className, message }) => {
  const messages = useTranslation();

  return (
    <ArrowLink link={link} className={className} direction="forward">
      {message || messages.detail_link__default_label}
    </ArrowLink>
  );
};

export default DetailLink;
