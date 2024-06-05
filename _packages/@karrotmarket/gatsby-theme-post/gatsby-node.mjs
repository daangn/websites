// @ts-check

/**
 * @typedef {import('gatsby').GatsbyNode} GatsbyNode
 * @typedef {import('gatsby').Page} Page
 */

const gql = String.raw;

/**
 * @type {GatsbyNode['onCreateBabelConfig']}
 */
export const onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve('babel-plugin-polished'),
    options: {},
  });
};

/**
 * @type {GatsbyNode['createPages']}
 */
export const createPages = async ({ graphql, actions }) => {
  /**
   * @typedef {{
   *   allPost: {
   *     nodes: Array<{
   *       id: string;
   *       slug: string;
   *       category: {
   *         uid: string;
   *       };
   *     }>;
   *   };
   * }} Data
   */

  /** @type {{ data?: Data, errors?: any }} */
  const { data, errors } = await graphql(
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
