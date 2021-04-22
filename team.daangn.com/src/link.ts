import { Fn } from '@cometjs/core';

type InternalLink = {
  type: 'internal',
  pathname: string,
}

type ExternalLink = {
  type: 'external',
  url: string,
};

export type LinkType = InternalLink | ExternalLink;

export function parseLink(urlLike: string, base: string): LinkType {
  const url = new URL(urlLike, base);
  return (
    url.origin === base
    ? { type: 'internal', pathname: url.pathname }
    : { type: 'external', url: url.href }
  );
}

export function mapLink<
  RInternal,
  RExternal,
>(
  link: LinkType,
  range: {
    Internal: RInternal | ((link: InternalLink) => RInternal),
    External: RExternal | ((link: ExternalLink) => RExternal),
  },
): RInternal | RExternal {
  switch (link.type) {
    case 'internal':
      return Fn.range(range.Internal, link);
    case 'external':
      return Fn.range(range.External, link);
  }
}
