import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/config";

import SearchInput from "./SearchInput";
import CategoryList from "./CategoryList";

type NavigationProos = {
  query: GatsbyTypes.Navigation_queryFragment,
  pageContext: string,
}

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
      <SearchInput />
    </BlogNavigation>
  );
};

const BlogNavigation = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "3rem",
  marginRight: "3rem",
});

export default Navigation;
