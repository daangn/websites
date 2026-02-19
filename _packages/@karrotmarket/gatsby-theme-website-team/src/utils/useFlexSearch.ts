import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useState } from 'react';

export const useFlexSearch = (query?: string) => {
  const staticData = useStaticQuery<GatsbyTypes.UseFlexSearchIndexStaticQuery>(graphql`
    query UseFlexSearchIndexStatic {
      localSearchJobPosts {
        publicIndexURL
      }
    }
  `);
  const [searchResult, setSearchResult] = useState<string[]>();
  const [flexIndex, setFlexIndex] = useState();
  useEffect(() => {
    if (!staticData.localSearchJobPosts.publicIndexURL) return {};
    try {
      fetch(staticData.localSearchJobPosts.publicIndexURL).then(async (res) => {
        setFlexIndex(await res.json());
      });
    } catch (e) {
      console.warn('flexsearch index documment parse error.', e);
    }
  }, [staticData.localSearchJobPosts.publicIndexURL]);
  useEffect(() => {
    if (query) {
      const words = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
      if (words.length === 0) {
        setSearchResult(undefined);
        return;
      }

      const perWordSets = words.map(
        (word) => new Set(flexIndex?.[0].flatMap((entities) => entities[word] || [])),
      );

      const intersection = [...perWordSets[0]].filter((id) =>
        perWordSets.every((set) => set.has(id)),
      );

      setSearchResult(intersection);
    } else {
      setSearchResult(undefined);
    }
  }, [query, flexIndex]);

  return searchResult;
};
