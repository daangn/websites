import { componentResolverFromMap } from 'gatsby-plugin-prismic-previews';
import TeamsArticlePageTemplate from '../../templates/PrismicTeamsArticlePage';

export const componentResolve = componentResolverFromMap({
  teams_article: TeamsArticlePageTemplate,
});
