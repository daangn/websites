import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/config";

import SearchInput from "./SearchInput";
import CategoryList from "./CategoryList";

const Navigation = ({ categories }) => {
  return (
    <BlogNavigation>
      <div>
        <CategoryList categories={categories} />
      </div>
      <SearchInput />
    </BlogNavigation>
  );
};

const BlogNavigation = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  blogContentArea: true,
});

export default Navigation;
