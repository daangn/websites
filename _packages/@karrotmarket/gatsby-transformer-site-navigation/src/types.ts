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
  baseUrl: string,
  uid: string,
};

export type PrismicLink = (
  | {
    link_type: 'Any',
  }
  | {
    link_type: 'Web',
    url: string,
  }
);

export type PrismicSiteNavigationNode = (
  & Node
  & {
    uid: string,
    prismicId: string,
    data: {
      canonical_link: PrismicLink,
      header_entries: {
        display_name: string | null,
        category: string | null,
        link: PrismicLink,
      }[],
      footer_entries: {
        display_name: string | null,
        category: string | null,
        link: PrismicLink,
      }[],
      social_entries: {
        social_type: string | null,
        link: PrismicLink,
      }[],
    },
  }
);

export function isPrismicSiteNavigationNode(node: Node): node is PrismicSiteNavigationNode {
  return node.internal.type === 'PrismicSiteNavigation';
}
