import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';

import EmptyPlaceholder from './jobPostList/EmptyPlaceholder';
import FaqAccordion from './FaqAccordion';

type FaqListProps = {
  className?: string,
  emptyPlaceHolderLink: string,
  data: GatsbyTypes.TeamWebsite_FaqList_faqListFragment,
}

export const query = graphql`
  fragment TeamWebsite_FaqList_faqList on PrismicFaqDataType {
    entries {
      ...TeamWebsite_FaqAccordionItem_entry
    }
  }
`

const Container = styled('div', {
  display: 'grid',
});

const FaqList: React.FC<FaqListProps> = ({ data, emptyPlaceHolderLink, className }) => {
  return (
    <Container className={className}>
      {data.entries?.length > 0 ? <FaqAccordion data={data} /> : <EmptyPlaceholder link={emptyPlaceHolderLink} />}
    </Container>
  )
}

export default React.memo(FaqList);