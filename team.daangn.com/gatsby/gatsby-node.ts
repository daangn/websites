import * as path from 'path';
import type { GatsbyNode } from 'gatsby';
import { createRemoteFileNode } from 'gatsby-source-filesystem';

export const onPostBootstrap: GatsbyNode['onPostBootstrap'] = ({
  actions,
}) => {
  actions.createRedirect({
    fromPath: '/jobs/faq/',
    toPath: '/faq/',
    isPermanent: true,
  });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
}) => {
  const gql = String.raw;
  actions.createTypes(gql`
    type FinancialStatementsYaml implements Node {
      items: [FinancialStatementsYamlItems!]!
    }

    type FinancialStatementsYamlItems {
      key: String!
      value: String!
      summary: Boolean
    }
  `);
};

export const createResolvers: GatsbyNode['createResolvers'] = ({
  createResolvers,
  actions: {
    createNode,
  },
  cache,
  createNodeId,
}) => {
  createResolvers({
    PrismicLinkType: {
      localFileFixed: {
        type: 'File',
        description: 'See https://github.com/gatsbyjs/gatsby/issues/35636',
        resolve(source: any) {
          if (!source.url) {
            return null;
          }

          const url = new URL(source.url);

          let name: string | undefined = undefined;
          let ext: string | undefined = undefined;

          const match = url.pathname.match(/\/([^/\\&\?]+)(\.\w{3,4})$/);
          if (match) {
            name = decodeURIComponent(match[1]);
            ext = match[2] ?? undefined;
            url.pathname.replace(match[1], name);
            url.searchParams.set('_fix35636', 'true');
          }

          return createRemoteFileNode({
            url: url.toString(),
            cache,
            createNode,
            createNodeId,
            name,
            ext,
          });
        },
      },
    },
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
        uid: string,
      }>,
    },
    allFinancialStatementsYaml: {
      nodes: Array<{
        id: string,
        year: number,
      }>,
    },
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

      allFinancialStatementsYaml(
        sort: {
          fields: year,
          order: DESC
        }
      ) {
        nodes {
          id
          year
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
    actions.createPage({
      path: `/ir/${ir.uid}/`,
      component: path.resolve(basePath, 'src/templates/IrPage.tsx'),
      context: {
        uid: ir.uid,
      },
    });
  }

  for (const finance of data.allFinancialStatementsYaml.nodes) {
    actions.createPage({
      path: `/ir/finances/${finance.year}/`,
      component: path.resolve(basePath, 'src/templates/FinancialStatementsPage.tsx'),
      context: {
        id: finance.id,
      },
    });
  }
  actions.createRedirect({
    fromPath: '/ir/finances/',
    toPath: `/ir/finances/${data.allFinancialStatementsYaml.nodes[0].year}/`,
    isPermanent: false,
    redirectInBrowser: true,
  });
};
