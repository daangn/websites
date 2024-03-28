import * as React from 'react';

export const componentResolver = {
  teams_article: React.lazy(() => import('../../templates/PrismicTeamsArticlePage')),
};
