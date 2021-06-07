import type { LinkResolver } from 'gatsby-plugin-prismic-previews';

export const linkResolver: LinkResolver = _doc => {
  return '/';
};
