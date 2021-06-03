import * as cheerio from 'cheerio';
import { decode as decodeEntities } from 'html-entities';

export function parseHtml(contentHtml: string) {
  // @ts-ignore
  const $ = cheerio.load(decodeEntities(contentHtml), null, false);
  $('.content-intro').remove();
  $('.content-conclusion').remove();

  const raw = $.root().html();
  const content = [...extractBlocks($)];

  return { content, raw };
}

function *extractBlocks($: cheerio.Root) {
  const heading = 'h1,h2,h3,h4,h5,h6';

  let $cursor = $.root().children(heading).first();
  while ($cursor.length) {
    const $body = $cursor.next();

    const headingElement = $cursor.get(0);
    const bodyElement = $body.get(0);
    if (!(headingElement && bodyElement)) {
      return;
    }

    const title = $cursor.text();
    const level = headingElement.tagName.toUpperCase();

    switch (bodyElement.tagName.toLowerCase()) {
      case 'p':
        yield {
          tagName: 'p',
          title,
          level,
          rawContent: $body.html(),
          paragraph: $body.text(),
        } as const;
        break;
      case 'ol':
        yield {
          tagName: 'ol',
          title,
          level,
          rawContent: $body.html(),
          items: $body.children('li').map(function (this: cheerio.Cheerio) {
            return $(this).text();
          }).get(),
        } as const;
        break;
      case 'ul':
        yield {
          tagName: 'ul',
          title,
          level,
          rawContent: $body.html(),
          items: $body.children('li').map(function (this: cheerio.Cheerio) {
            return $(this).text();
          }).get(),
        } as const;
        break;
      // Add more sections...
    }

    $cursor = $body.next(heading);
  }
}
