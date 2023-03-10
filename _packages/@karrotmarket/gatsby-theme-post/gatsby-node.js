"use strict";

exports.__esModule = true;
exports.onCreateBabelConfig = exports.createPages = void 0;
const gql = String.raw;
const onCreateBabelConfig = ({
  actions
}) => {
  actions.setBabelPlugin({
    name: require.resolve('babel-plugin-polished'),
    options: {}
  });
};
exports.onCreateBabelConfig = onCreateBabelConfig;
const createPages = async ({
  graphql,
  actions
}) => {
  const {
    data,
    errors
  } = await graphql(gql`
    query {
      allPost{
        nodes {
          id
          slug
          category {
            uid
          }
        }
      }
    }
    `);
  if (errors) {
    console.error(errors);
    throw errors;
  }
  if (!data) {
    throw new Error('Failed to load data');
  }
  if (data.allPost.nodes.length > 0) {
    for (const post of data.allPost.nodes) {
      const pathPrefix = post.category.uid === 'pr' ? 'pr' : 'blog';
      try {
        actions.createPage({
          path: `/${pathPrefix}/archive/${post.slug}/`,
          component: require.resolve('./src/templates/PostPage.tsx'),
          context: {
            id: post.id
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
exports.createPages = createPages;