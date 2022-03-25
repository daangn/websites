import { useState, useEffect } from "react";
import { useStaticQuery, graphql } from 'gatsby';

export const useFaqSearch = (query?: string) => {
  const staticData = useStaticQuery<GatsbyTypes.UseFaqSearchIndexStaticQuery>(graphql`
    query UseFaqSearchIndexStatic {
      localSearchFaqContent {
        publicIndexURL
      }
    }
  `)

  const [searchResult, setSearchResult] = useState<string[]>();
  const [flexIndex,setFlexIndex] = useState();

  useEffect(() => {
    if (!staticData.localSearchFaqContent.publicIndexURL) return {};

    try {
      fetch(staticData.localSearchFaqContent.publicIndexURL).then(async res=>{
        setFlexIndex(await res.json());
      });
    } catch (e) {
      console.warn("flexsearch index documment parse error.", e);
    }
  }, [staticData.localSearchFaqContent.publicIndexURL]);

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
