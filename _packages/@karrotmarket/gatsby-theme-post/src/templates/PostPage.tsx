import { type PageProps, graphql } from 'gatsby';
import { rem } from 'polished';
import * as React from 'react';

export const query = graphql`
  query PostPage(
    $id: String!,
  ) {
    post(id: { eq: $id }) {
      id
      slug
      category {
        uid
      }
    }
  }
`;

const PostPage: React.FC = () => {
  return (
    <div>포스트 페이지 템플릿</div>
  );
};

export default PostPage;
