"use strict";

exports.__esModule = true;
exports.onCreateBabelConfig = void 0;

const onCreateBabelConfig = ({
  actions
}) => {
  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-transform-react-jsx'),
    options: {
      runtime: 'automatic'
    }
  });
  actions.setBabelPlugin({
    name: require.resolve('babel-plugin-polished'),
    options: {}
  });
};

exports.onCreateBabelConfig = onCreateBabelConfig;