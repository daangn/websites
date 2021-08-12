import type { LinkResolverFunction } from '@prismicio/helpers';
import { linkResolver as originalLinkResolver } from '@karrotmarket/gatsby-theme-prismic/src/linkResolver';

export const linkResolver: LinkResolverFunction = doc => {
  console.log(doc)
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
    case 'teams_article': {
      if (doc.uid) {
        return `/jobs/article/${doc.uid}/`;
      }
      break;
    }
  }
  return originalLinkResolver(doc);
};
