import type { GatsbyNode, Node } from 'gatsby';
import type { GreenhouseJob } from '@karrotmarket/gatsby-source-greenhouse-job-board/types';

interface NormalizedAPI<T1, T2, Return> {
  (t1: T1, t2: T2): Return | Promise<Return>;
}

export type NormalizeAPI<T extends keyof GatsbyNode> = (
  NonNullable<GatsbyNode[T]> extends NormalizedAPI<infer T1, infer T2, infer Return>
  ? NormalizedAPI<T1, T2, Return>
  : false
);

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
