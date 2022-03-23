import type { GatsbyNode } from 'gatsby';

const gql = String.raw;

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
