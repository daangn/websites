import * as React from 'react';

import TeamsArticlePageTemplate from '../../templates/PrismicTeamsArticlePage';

export const componentResolver: Record<string, React.ComponentType<any>> = {
  teams_article: TeamsArticlePageTemplate,
};
