import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import * as React from 'react';

import FaqAccordion from './FaqAccordion';
import EmptyPlaceholder from './jobPostList/EmptyPlaceholder';

type FaqListProps = {
  className?: string;
  emptyPlaceHolderLink: string;
  faqLists: GatsbyTypes.TeamWebsite_FaqAccordion_faqDataFragment;
};

export const query = graphql`
  fragment TeamWebsite_FaqList_faqLists on PrismicFaqData {
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
      {faqLists.entries?.length > 0 ? (
        <FaqAccordion data={faqLists} />
      ) : (
        <EmptyPlaceholder link={emptyPlaceHolderLink} buttonVisible={false} />
      )}
    </Container>
  );
};

export default React.memo(FaqList);
