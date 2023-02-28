import * as React from 'react';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';

type Props = {
  id?: string;
  className?: string;
  href: string;
  children: React.ReactNode;
};

const LinkButton = styled('a', {
  display: 'inline-block',
  height: rem(52),

  '& > svg, & > img': {
    height: '100%',
  },
});

export default function DownloadLinkButton({ id, className, href, children }: Props) {
  return (
    <LinkButton id={id} className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </LinkButton>
  );
}
