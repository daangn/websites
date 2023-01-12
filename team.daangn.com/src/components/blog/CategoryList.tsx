import { styled } from "gatsby-theme-stitches/src/config";

import Category from "./Category";

const CategoryList = ({ categories }) => {
  return (
    <Container>
      <Category
        key="all"
        active={true}
      >
        전체
      </Category>
      {categories.map((category) => (
        <Category
          key={category.uid}
          active={false}
        >
          {category.name}
        </Category>
      ))}
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  overFlowX: "auto",
  boxSizing: "border-box",
  margin: "0 auto",
});

export default CategoryList;
