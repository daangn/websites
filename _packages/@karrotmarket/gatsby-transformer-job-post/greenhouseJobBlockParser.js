"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.parseHtml = parseHtml;

var cheerio = _interopRequireWildcard(require("cheerio"));

var _htmlEntities = require("html-entities");

function parseHtml(contentHtml) {
  const $ = cheerio.load((0, _htmlEntities.decode)(contentHtml), null, false);
  $('.content-intro').remove();
  $('.content-conclusion').remove();
  const raw = $.root().html();
  const content = [...extractBlocks($)];
  return {
    content,
    raw
  };
}

function* extractBlocks($) {
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
          paragraph: $body.text()
        };
        break;

      case 'ol':
        yield {
          tagName: 'ol',
          title,
          level,
          rawContent: $body.html(),
          items: $body.children('li').map(function () {
            return $(this).text();
          }).get()
        };
        break;

      case 'ul':
        yield {
          tagName: 'ul',
          title,
          level,
          rawContent: $body.html(),
          items: $body.children('li').map(function () {
            return $(this).text();
          }).get()
        };
        break;
      // Add more sections...
    }

    $cursor = $body.next(heading);
  }
}