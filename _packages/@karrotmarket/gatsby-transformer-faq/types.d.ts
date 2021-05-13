import type { Node } from 'gatsby';
export declare type PluginOptions = {
    uid: string;
};
export declare type PrismicFaqNode = (Node & {
    uid: string;
    data: {
        entries: {
            question: string;
            answer: {
                html: string;
            };
        }[];
    };
});
export declare function isPrismicFaqNode(node: Node): node is PrismicFaqNode;
