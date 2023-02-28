import type { LinkResolverFunction } from '@prismicio/helpers';

export const linkResolver: LinkResolverFunction = (_doc) => {
  return '/';
};
