import type { GatsbyNode } from 'gatsby';
import * as path from 'path';

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({
  actions,
}) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};

export const onPostBootstrap: GatsbyNode['onPostBootstrap'] = ({
  actions,
}) => {
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
        uid: string,
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
    }
  `);

  if (errors) {
    reporter.panicOnBuild(errors);
  }

  console.log(data);

  for (const ir of data.allPrismicIr.nodes) {
    actions.createPage({
      path: `/ir/${ir.uid}/`,
      component: path.resolve(basePath, 'src/templates/IrPage.tsx'),
      context: {
        uid: ir.uid,
      },
    });
  }
};
