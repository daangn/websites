import { useState, useEffect, useMemo } from "react";
import { useStaticQuery, graphql } from 'gatsby';

export const useFlexSearch = (query?: string) => {
  const staticData = useStaticQuery<GatsbyTypes.UseFlexSearchIndexStaticQuery>(graphql`
    query UseFlexSearchIndexStatic {
      localSearchJobPosts {
        index
      }
    }
  `)
  const [searchResult, setSearchResult] = useState<string[]>();
  const flexIndex = useMemo(() => {
    if (!staticData.localSearchJobPosts.index) return {};
    try {
      const index = JSON.parse(staticData.localSearchJobPosts.index)[0] || {};
      return index;
    } catch (e) {
      console.warn("flexsearch index documment parse error.",e);
      return {};
    }
  }, [staticData.localSearchJobPosts.index]);
  
  useEffect(() => {
    if (query) {
      const results = flexIndex.flatMap((entities) => entities[query] || []);
      setSearchResult(Array.from(new Set(results)));
    } else {
      setSearchResult(undefined);1
    }
  }, [query, flexIndex]);

  return searchResult;
};
