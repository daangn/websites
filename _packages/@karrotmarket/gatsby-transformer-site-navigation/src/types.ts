import type { Node } from 'gatsby';

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
