import type { Node } from 'gatsby';
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
