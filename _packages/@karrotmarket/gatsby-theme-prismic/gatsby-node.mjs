// @ts-check

/**
 * @typedef {import('gatsby').GatsbyNode} GatsbyNode
 */

import { replaceImageHost, getCdnImage } from './image-utils.mjs';

/**
 * @type {GatsbyNode['createResolvers']}
 */
export const createResolvers = ({ createResolvers }) => {
  createResolvers({
    PrismicImageField: {
      url: {
				resolve: async (source, args, ctx, info) => {
          const url = await info.originalResolver(source, args, ctx, info);
          return replaceImageHost(url);
				},
      },
      gatsbyImageData: {
        resolve: async (source, args, ctx, info) => {
          if (!source.url) return null;

          const copy = { ...source, url: replaceImageHost(source.url) };
          const image = await info.originalResolver(copy, args, ctx, info);
          return image && getCdnImage(image);
        },
      },
    },
  });
};
