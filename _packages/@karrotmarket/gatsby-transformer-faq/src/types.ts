import type { Node, NodeInput } from 'gatsby';

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
