import type { GatsbyNode, Page } from 'gatsby';

const gql = String.raw;

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve('babel-plugin-polished'),
    options: {},
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  type Data = {
    allPost: {
      nodes: Array<{
        id: string;
        slug: string;
        category: {
          uid: string;
        };
      }>;
    };
  };

  const { data, errors } = await graphql<Data>(
    gql`
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
    `,
  );

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
            id: post.id,
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
