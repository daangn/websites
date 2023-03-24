import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

import CategoryList from './CategoryList';
// import SearchInput from './SearchInput';

type NavigationProos = {
  query: GatsbyTypes.Navigation_queryFragment;
  pageContext: string;
};

export const query = graphql`
  fragment Navigation_query on Query {
    ...CategoryList_query
  }
`;

const Navigation: React.FC<NavigationProos> = ({ query, pageContext }) => {
  return (
    <BlogNavigation>
      <div>
        <CategoryList query={query} pageContext={pageContext} />
      </div>
      {/* <SearchInput /> */}
    </BlogNavigation>
  );
};

const BlogNavigation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,

  '@lg': {
    margin: `0 ${rem(48)}`,
  },
});

export default Navigation;
