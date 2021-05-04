import type { GatsbyNode, Node } from 'gatsby';
interface NormalizedAPI<T1, T2, Return> {
    (t1: T1, t2: T2): Return | Promise<Return>;
}
export declare type NormalizeAPI<T extends keyof GatsbyNode> = (NonNullable<GatsbyNode[T]> extends NormalizedAPI<infer T1, infer T2, infer Return> ? NormalizedAPI<T1, T2, Return> : false);
export declare type PluginOptions = {
    baseUrl: string;
    uid: string;
};
export declare type PrismicLink = ({
    link_type: 'Any';
} | {
    link_type: 'Web';
    url: string;
});
export declare type PrismicSiteNavigationNode = (Node & {
    uid: string;
    prismicId: string;
    data: {
        canonical_link: PrismicLink;
        header_entries: {
            display_name: string | null;
            category: string | null;
            link: PrismicLink;
        }[];
        footer_entries: {
            display_name: string | null;
            category: string | null;
            link: PrismicLink;
        }[];
        social_entries: {
            social_type: string | null;
            link: PrismicLink;
        }[];
    };
});
export declare function isPrismicSiteNavigationNode(node: Node): node is PrismicSiteNavigationNode;
export {};
