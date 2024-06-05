// @ts-check

/** 
 * @typedef {import('@prismicio/helpers').LinkResolverFunction} LinkResolverFunction
 */

/** @type {LinkResolverFunction} */
exports.linkResolver = (doc) => {
  switch (doc.type) {
    case 'site_navigation': {
      return '/';
    }
    case 'faq': {
      if (doc.uid) {
        return `/faq/${doc.uid}/`;
      }
      break;
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
  return '/';
};
