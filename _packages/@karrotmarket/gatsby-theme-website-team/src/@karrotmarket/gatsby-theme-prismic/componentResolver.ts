import { componentResolverFromMap } from 'gatsby-plugin-prismic-previews';

import TeamsArticlePageTemplate from '../../templates/PrismicTeamsArticlePage';

export const componentResolver = componentResolverFromMap({
  teams_article: TeamsArticlePageTemplate,
});
