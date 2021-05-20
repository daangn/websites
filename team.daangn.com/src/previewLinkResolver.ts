import type { PluginLinkResolver } from 'gatsby-source-prismic/src/types';

export const linkResolver: PluginLinkResolver = ({ node }) => _document => {
  switch (node.type) {
    case 'site_navigation': {
      return '/';
    }
    case 'faq': {
      return '/faq/';
    }
  }
  return '/';
}
