import type { Node } from 'gatsby';
import type { GreenhouseJob } from '@karrotmarket/gatsby-source-greenhouse-job-board/types';

export type GreenhouseJobNode = (
  & Node
  & Omit<GreenhouseJob, 'id'>
  & {
    ghId: number,
    internal: {
      type: 'GreenhouseJob',
    },
  }
);

export function isGreenhouseJobNode(node: Node): node is GreenhouseJobNode {
  return node.internal.type === 'GreenhouseJob';
}
