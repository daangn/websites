import type {
  GatsbyNode,
  Node,
  NodeInput,
} from 'gatsby';

interface NormalizedAPI<T1, T2, Return> {
  (t1: T1, t2: T2): Return | Promise<Return>;
}

export type NormalizeAPI<T extends keyof GatsbyNode> = (
  NonNullable<GatsbyNode[T]> extends NormalizedAPI<infer T1, infer T2, infer Return>
  ? NormalizedAPI<T1, T2, Return>
  : false
);

export type PluginOptions = {
  uid: string,
};

export type PrismicFaqNode = (
  & Node
  & {
    uid: string,
    data: {
      entries: {
        question: string,
        answer: {
          html: string,
        },
      }[],
    },
  }
);

export function isPrismicFaqNode(node: Node): node is PrismicFaqNode {
  return node.internal.type === 'PrismicFaq';
}
