import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';

import EmptyPlaceholder from './jobPostList/EmptyPlaceholder';
import FaqAccordion from './FaqAccordion';

type FaqListProps = {
  searchResults?: string[]
  data: GatsbyTypes.TeamWebsite_FaqListQuery,
}

export const query = graphql`
  query TeamWebsite_FaqList {
    allPrismicFaq {
      nodes {
        id
        data {
          entries {
            question
            answer {
              text
            }
          }
        }
      }
    }
  }
`

const FaqList: React.FC<FaqListProps> = ({ data, searchResults }) => {
  const entries = data.allPrismicFaq.nodes.map((node) => node.data.entries).reduce((acc, val) => acc.concat(val), []);

  const filteredFaqList = {
    entries: [...entries.filter((entry) => {
        if (!searchResults) return true

        return searchResults.includes(entry.question)
      })
    ]
  }

  return filteredFaqList.entries.length > 0 ? <FaqAccordion data={filteredFaqList} /> : <EmptyPlaceholder />
}

export default FaqList