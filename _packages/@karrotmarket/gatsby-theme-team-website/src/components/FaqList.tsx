import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';

import EmptyPlaceholder from './jobPostList/EmptyPlaceholder';
import FaqAccordion from './FaqAccordion';

type FaqListProps = {
  searchResults?: string[]
  className?: string,
  data: GatsbyTypes.TeamWebsite_FaqList_faqListFragment,
}

export const query = graphql`
  fragment TeamWebsite_FaqList_faqList on PrismicFaqConnection {
    nodes {
      id
      data {
        ...TeamWebsite_FaqAccordion_faqData
      }
    }
  }
`

const Container = styled('div', {
  display: 'grid',
});

const FaqList: React.FC<FaqListProps> = ({ data, className, searchResults }) => {
  const entries = data.nodes.map((node) => node.data.entries).reduce((acc, val) => acc.concat(val), []);

  const filteredFaqList = {
    entries: [...entries.filter((entry) => {
        if (!searchResults) return true

        return searchResults.includes(entry.question)
      })
    ]
  }

  return (
    <Container className={className}>
      {filteredFaqList.entries?.length > 0 ? <FaqAccordion data={filteredFaqList} /> : <EmptyPlaceholder link="/faq/지원-관련/" />}
    </Container>
  )
}

export default React.memo(FaqList);