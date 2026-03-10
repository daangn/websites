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
				type: "String",
				description: "The image's URL.",
				args: {
					imgixParams: {
						type: "PrismicImgixURLParams",
						description:
							"Parameters to modify the image output using Imgix's URL API. To learn more, see: https://docs.imgix.com/apis/rendering",
					},
				},
				resolve: async (source, args, ctx, info) => {
          const url = await info.originalResolver(source, args, ctx, info);
          return replaceImageHost(url);
				},
      },
      gatsbyImageData: {
        type: "JSON",
        resolve: async (source, args, ctx, info) => {
          const image = await info.originalResolver(source, args, ctx, info);
          return getCdnImage(image);
        },
      },
    },
  });
};
