import { useState, useEffect } from "react";
import { useStaticQuery, graphql } from 'gatsby';

export const useFlexSearch = (query?: string) => {
  const staticData = useStaticQuery<GatsbyTypes.UseFlexSearchIndexStaticQuery>(graphql`
    query UseFlexSearchIndexStatic {
      localSearchJobPosts {
        publicIndexURL
      }
    }
  `)
  const [searchResult, setSearchResult] = useState<string[]>();
  const [flexIndex,setFlexIndex] = useState()
  useEffect(() => {
    if (!staticData.localSearchJobPosts.publicIndexURL) return {};
    try {
      fetch(staticData.localSearchJobPosts.publicIndexURL).then(async res=>{
        setFlexIndex(await res.json());
      });
    } catch (e) {
      console.warn("flexsearch index documment parse error.", e);
    }
  }, [staticData.localSearchJobPosts.publicIndexURL]);
  useEffect(() => {
    if (query) {
      const results = flexIndex?.[0].flatMap((entities) => entities[query.toLocaleLowerCase()] || []);
      setSearchResult(Array.from(new Set(results)));
    } else {
      setSearchResult(undefined);
    }
  }, [query, flexIndex]);

  return searchResult;
};
