import type { GatsbyNode } from 'gatsby';

interface NormalizedAPI<T1, T2, Return> {
  (t1: T1, t2: T2): Return | Promise<Return>;
}

export type NormalizeAPI<T extends keyof GatsbyNode> = (
  NonNullable<GatsbyNode[T]> extends NormalizedAPI<infer T1, infer T2, infer Return>
  ? NormalizedAPI<T1, T2, Return>
  : false
);

// Trick for pretty syntax highlighting
export const gql = String.raw;
