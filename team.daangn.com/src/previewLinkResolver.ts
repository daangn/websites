import type { LinkResolver } from 'gatsby-plugin-prismic-previews';

export const linkResolver: LinkResolver = doc => {
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
}
