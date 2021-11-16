// Note: gatsby-config 에서 함께 사용하기 위해 CommonJS 스타일로 전환
exports.linkResolver = doc => {
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
  return '/';
};
