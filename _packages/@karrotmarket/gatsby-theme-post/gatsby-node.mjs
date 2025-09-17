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
   *   allPrPost: {
   *     nodes: Array<{
   *       id: string;
   *       slug: string;
   *       category: {
   *         uid: string;
   *       };
   *     }>;
   *   };
   *   allBlogPost: {
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
      allPrPost: allPost(
        filter: {
          category: {
            uid: { eq: "pr" }
          }
        }
      ) {
        nodes {
          id
          slug
          category {
            uid
          }
        }
      }
      allBlogPost: allPost(
        filter: {
          category: {
            uid: { ne: "pr" }
          }
        }
      ) {
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

  for (const post of data.allPrPost.nodes) {
    actions.createPage({
      path: `/pr/archive/${post.slug}/`,
      component: require.resolve('./src/templates/PostPage.tsx'),
      context: {
        id: post.id,
      },
    });
  }

  for (const post of data.allBlogPost.nodes) {
    actions.createPage({
      path: `/blog/archive/${post.slug}/`,
      component: require.resolve('./src/templates/PostPage.tsx'),
      context: {
        id: post.id,
      },
    });
  }
};
