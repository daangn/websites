import * as path from 'node:path';
import type { GatsbyNode } from 'gatsby';

export const onPostBootstrap: GatsbyNode['onPostBootstrap'] = ({ actions }) => {
  actions.createRedirect({
    fromPath: '/jobs/faq/',
    toPath: '/faq/',
    isPermanent: true,
  });
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
  if (node.internal.type === 'JobPost') {
    // FIXME: 얘네도 다 컨텐츠로 관리해야하는데...
    if ('boardToken' in node && node.boardToken === '07153') {
      // Note: 원래 tags 필터링으로 숨기려고 했는데,
      // in/nin 조건 들어가면 배열이 비어있는 노드들이 다 빠짐...
      actions.createNodeField({
        node,
        name: 'searchable',
        value: false,
      });
      actions.createNodeField({
        node,
        name: 'allowResume',
        value: false,
      });
    }
  }
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
    allPrPost: {
      nodes: Array<{
        id: string;
        slug: string;
      }>;
    };
    allBlogPost: {
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
        sort: {
          first_publication_date: DESC
        }
      ) {
        nodes {
          uid
        }
      }

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
        }
      }

      allPostCategory(
        filter: {
          uid: { ne: "pr" }
        }
      ) {
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
  actions.createRedirect({
    fromPath: '/ir/finances/2022-seperate/',
    toPath: '/ir/finances/2022-separate/',
    isPermanent: true,
    redirectInBrowser: false,
  });
  actions.createRedirect({
    fromPath: '/ir/finances/2023-seperate/',
    toPath: '/ir/finances/2023-separate/',
    isPermanent: true,
    redirectInBrowser: false,
  });

  actions.createPage({
    path: '/blog/',
    component: path.resolve(basePath, 'src/templates/BlogMainPage.tsx'),
    context: {
      id: '*',
    },
  });

  for (const post of data.allPrPost.nodes) {
    actions.createPage({
      path: `/company/pr/archive/${post.slug}/`,
      component: path.resolve(basePath, 'src/templates/PrPostPage.tsx'),
      context: {
        id: post.id,
      },
    });
  }

  for (const post of data.allBlogPost.nodes) {
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

  // 2025-11-04
  // 회사소개를 홈으로 합침
  actions.createRedirect({
    fromPath: '/company/',
    toPath: '/',
    isPermanent: false,
    redirectInBrowser: true,
  });
};
