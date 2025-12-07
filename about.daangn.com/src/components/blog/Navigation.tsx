import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import * as React from 'react';

import CategoryList from './CategoryList';
import SearchInput from './SearchInput';

type NavigationProos = {
  pageContext: string;
  query: GatsbyTypes.Navigation_queryFragment;
  search: string;
  onSearchChange: (query: string) => void;
};

export const query = graphql`
  fragment Navigation_query on Query {
    ...CategoryList_query
  }
`;

const Navigation: React.FC<NavigationProos> = ({ query, pageContext, search, onSearchChange }) => {
  return (
    <BlogNavigation id="_filter">
      <CategoryList query={query} pageContext={pageContext} />
      <SearchInput search={search} onSearchChange={onSearchChange} />
    </BlogNavigation>
  );
};

const BlogNavigation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,
  scrollBehavior: 'smooth',
  scrollMarginTop: '96px',

  '@lg': {
    margin: '0 48px',
  },
});

export default Navigation;
