// @ts-check

import { decode } from 'html-entities';

/**
 * @typedef {{
 *   level: `H${1 | 2 | 3 | 4 | 5 | 6}`;
 *   title: string;
 *   bodyHtml: string;
 * }} Content
 *
 * @typedef {{
 *   content: Content[];
 *   raw: string;
 * }} Result
 */

/**
 * @param {string} contentHtml
 * @return {Result}
 */
export function parseContent(contentHtml) {
  const splitter = /<(h[1-6])>(.*)<\/\1>/;
  const parts = decode(contentHtml)
    .replace(/<div.*>[\s\S]*?<\/div>/g, '')
    .split(splitter);

  /** @type {Result} */
  const result = {
    content: [],
    raw: contentHtml,
  };

  /** @typedef {'initial' | 'wait_title' | 'wait_body'} State */

  /** @type {State} */
  let state = 'initial';
  /** @type {Partial<Content>} */
  let current = {};

  for (const part of parts) {
    if (part === '') {
      continue;
    }

    switch (state) {
      case 'initial': {
        // @ts-ignore
        current.level = part.toUpperCase();
        state = 'wait_title';
        break;
      }

      case 'wait_title': {
        current.title = part
          // strips all XML tags
          .replace(/<[^>]*>?/gm, '')
          .trim();
        state = 'wait_body';
        break;
      }

      case 'wait_body': {
        current.bodyHtml = part.trim();
        // @ts-ignore
        result.content.push(current);

        current = {};
        state = 'initial';
        break;
      }
    }
  }

  return result;
}
