// @ts-check

/**
 * @import { IGatsbyImageData } from 'gatsby-plugin-image'
 */

/**
 * @param {string} imageSrc
 * @return {string}
 */
export function replaceImageHost(imageSrc) {
  return imageSrc.replaceAll('https://images.prismic.io', 'https://prismic-image-proxy.krrt.io');
}

/**
 * @param {IGatsbyImageData} imageData
 * @return {IGatsbyImageData}
 */
export function getCdnImage(imageData) {
  const copy = structuredClone(imageData);
  if (copy.images.fallback) {
    copy.images.fallback.src = replaceImageHost(copy.images.fallback.src);
    if (copy.images.fallback.srcSet) {
      copy.images.fallback.srcSet = replaceImageHost(copy.images.fallback.srcSet);
    }
  }
  if (copy.images.sources) {
    copy.images.sources = copy.images.sources.map(source => ({
      ...source,
      srcSet: replaceImageHost(source.srcSet),
    }));
  }
  return copy;
}
