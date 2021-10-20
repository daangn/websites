import type { Node } from 'gatsby';
import type { GreenhouseJobBoardJobNode } from '@karrotmarket/gatsby-source-greenhouse-jobboard/types';

export function isGreenhouseJobNode(node: Node): node is GreenhouseJobBoardJobNode {
  return node.internal.type === 'GreenhouseJobBoardJob';
}
