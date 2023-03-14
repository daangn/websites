import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';

import Category from './Category';

type CategoryListProps = {
  query: GatsbyTypes.CategoryList_dataFragment;
  pageContext: string;
};

export const query = graphql`
  fragment CategoryList_query on Query {
    allPostCategory(filter: {uid: {ne: "pr"}}) {
      nodes {
        ...Category_category
      }
    }
  }
`;

const CategoryList: React.FC<CategoryListProps> = ({ query, pageContext }) => {
  return (
    <Container>
      <Category
        key="all"
        active={true}
        pageContext={pageContext}
        category={{ uid: '*', name: '전체' }}
      />
      {query.allPostCategory.nodes.map((category) => (
        <Category key={category.uid} active={false} pageContext={pageContext} category={category} />
      ))}
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  overFlowX: 'auto',
  boxSizing: 'border-box',
});

export default CategoryList;
