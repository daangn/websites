import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

export const useSearchIndex = (query?: string) => {
  const staticData = useStaticQuery<GatsbyTypes.UseSearchIndexStaticQuery>(graphql`
    query UseSearchIndexStatic {
      localSearchBlogPosts {
        publicIndexURL
      }
    }
  `);
  const [searchResult, setSearchResult] = React.useState<string[]>();
  const [flexIndex, setFlexIndex] = React.useState();
  React.useEffect(() => {
    if (!staticData.localSearchBlogPosts?.publicIndexURL) return {};
    try {
      fetch(staticData.localSearchBlogPosts.publicIndexURL).then(async (res) => {
        setFlexIndex(await res.json());
      });
    } catch (e) {
      console.warn('flexsearch index documment parse error.', e);
    }
  }, [staticData.localSearchBlogPosts?.publicIndexURL]);
  React.useEffect(() => {
    if (query) {
      const results = flexIndex?.[0].flatMap(
        (entities) => entities[query.toLocaleLowerCase()] || [],
      );
      setSearchResult(Array.from(new Set(results)));
    } else {
      setSearchResult(undefined);
    }
  }, [query, flexIndex]);

  return searchResult;
};
