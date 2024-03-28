import type {
  GreenhouseJobBoardDepartmentNode,
  GreenhouseJobBoardJobNode,
} from '@karrotmarket/gatsby-source-greenhouse-jobboard/types';
import type { Node } from 'gatsby';

export function isGreenhouseJobNode(node: Node): node is GreenhouseJobBoardJobNode {
  return node.internal.type === 'GreenhouseJobBoardJob';
}

export function isGreenhouseDepartmentNode(node: Node): node is GreenhouseJobBoardDepartmentNode {
  return node.internal.type === 'GreenhouseJobBoardDepartment';
}
