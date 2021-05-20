import * as React from 'react';
import { Fn } from '@cometjs/core';

import { useSiteMetadata } from './siteMetadata';

type InternalLink = {
  t: 'Internal',
  pathname: string,
};

type ExternalLink = {
  t: 'External',
  url: URL,
};

type LinkType = InternalLink | ExternalLink;

export function isInternalLink(link: LinkType): link is InternalLink {
  return link.t === 'Internal';
}

export function isExternalLink(link: LinkType): link is ExternalLink {
  return link.t === 'External';
}

export function mapLink<
  RInternal,
  RExternal,
>(link: LinkType, fn: {
  Internal: Fn.T<RInternal, InternalLink>,
  External: Fn.T<RExternal, ExternalLink>,
}): RInternal | RExternal {
  if (isInternalLink(link)) {
    return Fn.range(fn.Internal, link);
  } else {
    return Fn.range(fn.External, link);
  }
}

export function parseLink(urlString: string, baseOrigin: string): LinkType {
  const baseUrl = new URL(baseOrigin);
  const url = new URL(urlString, baseOrigin);
  if (baseUrl.origin === url.origin) {
    return { t: 'Internal', pathname: url.pathname };
  } else {
    return { t: 'External', url };
  }
}

export function useLinkParser() {
  const siteMetadata = useSiteMetadata();
  return React.useMemo(() => {
    return (urlString: string) => parseLink(urlString, siteMetadata.siteUrl);
  }, [siteMetadata]);
}

export function useLink(urlString: string): LinkType {
  const parseLink = useLinkParser();
  return parseLink(urlString);
}
