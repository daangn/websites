export declare function parseHtml(contentHtml: string): {
    content: ({
        readonly tagName: "p";
        readonly title: string;
        readonly level: string;
        readonly rawContent: string | null;
        readonly paragraph: string;
        readonly items?: undefined;
    } | {
        readonly tagName: "ol";
        readonly title: string;
        readonly level: string;
        readonly rawContent: string | null;
        readonly items: import("domhandler").Element[];
        readonly paragraph?: undefined;
    } | {
        readonly tagName: "ul";
        readonly title: string;
        readonly level: string;
        readonly rawContent: string | null;
        readonly items: import("domhandler").Element[];
        readonly paragraph?: undefined;
    })[];
    raw: string | null;
};
