import type { GatsbyNode } from 'gatsby';
import * as path from 'path';

export const onPostBootstrap: GatsbyNode['onPostBootstrap'] = ({ actions }) => {
  actions.createRedirect({
    fromPath: '/jobs/faq/',
    toPath: '/faq/',
    isPermanent: true,
  });
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
  store,
}) => {
  const { program } = store.getState();
  const basePath = program.directory as string;

  const gql = String.raw;

  type Data = {
    allPrismicIr: {
      nodes: Array<{
        uid: string;
      }>;
    };
    allPrismicFinancialStatements: {
      nodes: Array<{
        uid: string;
      }>;
    };
    allPost: {
      nodes: Array<{
        id: string;
        slug: string;
      }>;
    };
    allPostCategory: {
      nodes: Array<{
        name: string;
        uid: string;
      }>;
    };
  };
  const { data, errors } = await graphql<Data>(gql`
    {
      allPrismicIr(
        filter: {
          uid: {
            ne: null
          }
          tags: {
            in: ["team.daangn.com"]
          }
        }
      ) {
        nodes {
          uid
        }
      }

      allPrismicFinancialStatements(
        filter: {
          tags: {
            in: ["team.daangn.com"]
          }
        }
      ) {
        nodes {
          uid
        }
      }

      allPost {
        nodes {
          id
          slug
        }
      }

      allPostCategory {
        nodes {
          uid
          name
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(errors);
  }
  if (!data) {
    throw new Error('Failed to fetch data for team.daangn.com');
  }

  for (const ir of data.allPrismicIr.nodes) {
    if (!ir.uid) {
      reporter.warn('Some ir in Prismic CMS have empty uid');
      continue;
    }
    actions.createPage({
      path: `/ir/${ir.uid}/`,
      component: path.resolve(basePath, 'src/templates/IrPage.tsx'),
      context: {
        uid: ir.uid,
      },
    });
  }

  for (const finance of data.allPrismicFinancialStatements.nodes) {
    if (!finance.uid) {
      reporter.warn('Some financial_statements in Prismic CMS have empty uid');
      continue;
    }
    actions.createPage({
      path: `/ir/finances/${finance.uid}/`,
      component: path.resolve(basePath, 'src/templates/FinancialStatementsPage.tsx'),
      context: {
        uid: finance.uid,
      },
    });
  }
  actions.createRedirect({
    fromPath: '/ir/finances/',
    toPath: `/ir/finances/${
      data.allPrismicFinancialStatements.nodes.filter((node) => node.uid)[0].uid
    }/`,
    isPermanent: false,
    redirectInBrowser: true,
  });

  actions.createPage({
    path: '/blog/',
    component: path.resolve(basePath, 'src/templates/BlogMainPage.tsx'),
    context: {
      id: '*',
    },
  });

  for (const post of data.allPost.nodes) {
    actions.createPage({
      path: `/blog/archive/${post.slug}/`,
      component: path.resolve(basePath, 'src/templates/BlogPostPage.tsx'),
      context: {
        id: post.id,
      },
    });
  }

  for (const postCategory of data.allPostCategory.nodes) {
    actions.createPage({
      path: `/blog/category/${postCategory.uid}/`,
      component: path.resolve(basePath, 'src/templates/BlogMainPage.tsx'),
      context: {
        id: postCategory.uid,
      },
    });
  }

  actions.createRedirect({
    fromPath: '/blog/cateogry/*',
    toPath: '/blog/',
    redirectInBrowser: true,
  });
};
