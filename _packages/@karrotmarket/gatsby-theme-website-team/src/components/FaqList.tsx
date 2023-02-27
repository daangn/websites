import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';

import EmptyPlaceholder from './jobPostList/EmptyPlaceholder';
import FaqAccordion from './FaqAccordion';

type FaqListProps = {
  className?: string,
  emptyPlaceHolderLink: string,
  faqLists: GatsbyTypes.TeamWebsite_FaqList_faqListsFragment,
};

export const query = graphql`
  fragment TeamWebsite_FaqList_faqLists on PrismicFaqDataType {
    entries {
      ...TeamWebsite_FaqAccordionItem_entry
    }
  }
`;

const Container = styled('div', {
  display: 'grid',
});

const FaqList: React.FC<FaqListProps> = ({ faqLists, emptyPlaceHolderLink, className }) => {
  return (
    <Container className={className}>
      {faqLists.entries?.length > 0 ? <FaqAccordion data={faqLists} /> : <EmptyPlaceholder link={emptyPlaceHolderLink} buttonVisible={false} />}
    </Container>
  )
};

export default React.memo(FaqList);
