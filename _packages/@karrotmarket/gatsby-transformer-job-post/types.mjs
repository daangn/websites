// @ts-check

/**
 * @typedef {(
 *   import('@karrotmarket/gatsby-source-greenhouse-jobboard/types').GreenhouseJobBoardDepartmentNode
 * )} GreenhouseJobBoardDepartmentNode
 *
 * @typedef {(
 *   import('@karrotmarket/gatsby-source-greenhouse-jobboard/types').GreenhouseJobBoardJobNode
 * )} GreenhouseJobBoardJobNode
 *
 * @typedef {import('gatsby').Node} Node
 */

/**
 * @param {Node} node
 * @return {node is GreenhouseJobBoardJobNode}
 */
export function isGreenhouseJobNode(node) {
  return node.internal.type === 'GreenhouseJobBoardJob';
}

/**
 * @param {Node} node
 * @return {node is GreenhouseJobBoardDepartmentNode}
 */
export function isGreenhouseDepartmentNode(node) {
  return node.internal.type === 'GreenhouseJobBoardDepartment';
}
