// @ts-ignore

/**
 * @typedef {import('gatsby').Node} Node
 *
 * @typedef {import('./types').PrismicPostCategoryNode} PrismicPostCategoryNode
 * @typedef {import('./types').PrismicPostNode} PrismicPostNode
 * @typedef {import('./types').PrismicMemberProfileNode} PrismicMemberProfileNode
 */

/**
 * @param {Node} node
 * @return {node is PrismicPostCategoryNode}
 */
export function isPrismicPostCategoryNode(node) {
  return node.internal.type === 'PrismicPostCategory';
}

/**
 * @param {Node} node
 * @return {node is PrismicPostNode}
 */
export function isPrismicPostNode(node) {
  return node.internal.type === 'PrismicPost';
}

/**
 * @param {Node} node
 * @return {node is PrismicMemberProfileNode}
 */
export function isPrismicMemberProfile(node) {
  return node.internal.type === 'PrismicMemberProfile';
}
