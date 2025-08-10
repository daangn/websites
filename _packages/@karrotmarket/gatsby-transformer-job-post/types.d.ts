export type PluginOptions = {
 defaultTags?: {
   [boardToken: string]: string[];
 },
 defaultMeta?: {
   [boardToken: string]: {
      title?: string;
      description?: string;
      image?: string;
   };
 },
};
