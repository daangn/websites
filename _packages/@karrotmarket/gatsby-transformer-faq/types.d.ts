import type { GatsbyNode, Node } from 'gatsby';
interface NormalizedAPI<T1, T2, Return> {
    (t1: T1, t2: T2): Return | Promise<Return>;
}
export declare type NormalizeAPI<T extends keyof GatsbyNode> = (NonNullable<GatsbyNode[T]> extends NormalizedAPI<infer T1, infer T2, infer Return> ? NormalizedAPI<T1, T2, Return> : false);
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
export {};
