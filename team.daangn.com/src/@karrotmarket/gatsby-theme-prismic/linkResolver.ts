import type { LinkResolverFunction } from '@prismicio/helpers';

export const linkResolver: LinkResolverFunction = doc => {
  switch (doc.type) {
    case 'site_navigation': {
      return '/';
    }
    case 'faq': {
      return '/faq/';
    }
    case 'team_contents': {
      return '/';
    }
  }
  return '/';
};
