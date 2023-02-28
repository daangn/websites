import { decode } from 'html-entities';

type Content = {
  level: `H${1 | 2 | 3 | 4 | 5 | 6}`;
  title: string;
  bodyHtml: string;
};

type Result = {
  content: Content[];
  raw: string;
};

export function parseContent(contentHtml: string): Result {
  const splitter = /<(h[1-6])>(.*)<\/\1>/;
  const parts = decode(contentHtml).replace(/<div.*>[\s\S]*?<\/div>/g, '').split(splitter);

  const result: Result = {
    content: [],
    raw: contentHtml,
  };

  type State = 'initial' | 'wait_title' | 'wait_body';
  let state: State = 'initial';
  let current: Partial<Content> = {};

  for (const part of parts) {
    if (part === '') {
      continue;
    }

    switch (state) {
      case 'initial': {
        current.level = part.toUpperCase() as Content['level'];
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
        result.content.push(current as Content);

        current = {};
        state = 'initial';
        break;
      }
    }
  }

  return result;
}
