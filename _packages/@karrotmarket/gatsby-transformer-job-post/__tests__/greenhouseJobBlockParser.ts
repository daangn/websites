import { stripIndent } from 'common-tags';

import { parseHtml } from '../gatsby/greenhouseJobBlockParser';

describe('Greenhouse content block parser', () => {
  it('parses HTML paragraph block', () => {
    const input = stripIndent`
      <h3>제목</h3>
      <p>내용</p>
    `;
    expect(parseHtml(input)).toEqual({
      content: [
        {
          level: 'H3',
          title: '제목',
          type: 'MultipleParagraph',
          items: ['내용'],
          rawBody: stripIndent`
            <p>내용</p>
          `,
        },
      ],
      raw: stripIndent`
        <h3>제목</h3>
        <p>내용</p>
      `,
    });
  });

  it('parses HTML multiple paragraph block', () => {
    const input = stripIndent`
      <h3>제목</h3>
      <p>내용1</p>
      <p>내용2</p>
      <p>내용3</p>
    `;
    expect(parseHtml(input)).toEqual({
      content: [
        {
          level: 'H3',
          title: '제목',
          type: 'MultipleParagraph',
          items: [
            '내용1',
            '내용2',
            '내용3',
          ],
          rawBody: stripIndent`
            <p>내용1</p>
            <p>내용2</p>
            <p>내용3</p>
          `,
        },
      ],
      rawContent: stripIndent`
        <h3>제목</h3>
        <p>내용1</p>
        <p>내용2</p>
        <p>내용3</p>
      `,
    });
  });

  it('parses HTML unordered list block', () => {
    const input = stripIndent`
      <h3>제목</h3>
      <ul>
        <li>내용 1</li>
        <li>내용 2</li>
        <li>내용 3</li>
      </ul>
    `;
    expect(parseHtml(input)).toEqual({
      content: [
        {
          level: 'H3',
          title: '제목',
          type: 'UnorderedList',
          items: [
            '내용 1',
            '내용 2',
            '내용 3',
          ],
          rawBody: stripIndent`
            <ul>
              <li>내용 1</li>
              <li>내용 2</li>
              <li>내용 3</li>
            </ul>
          `,
        },
      ],
      rawContent: stripIndent`
        <h3>제목</h3>
        <ul>
          <li>내용 1</li>
          <li>내용 2</li>
          <li>내용 3</li>
        </ul>
      `,
    });
  });

  it('parses HTML ordered list block', () => {
    const input = stripIndent`
      <h3>제목</h3>
      <ol>
        <li>내용 1</li>
        <li>내용 2</li>
        <li>내용 3</li>
      </ol>
    `;
    expect(parseHtml(input)).toEqual({
      content: [
        {
          level: 'H3',
          title: '제목',
          type: 'OrderedList',
          items: [
            '내용 1',
            '내용 2',
            '내용 3',
          ],
          rawBody: stripIndent`
            <ol>
              <li>내용 1</li>
              <li>내용 2</li>
              <li>내용 3</li>
            </ol>
          `,
        },
      ],
      rawContent: stripIndent`
        <h3>제목</h3>
        <ol>
          <li>내용 1</li>
          <li>내용 2</li>
          <li>내용 3</li>
        </ol>
      `,
    });
  });

  it('takes only first block of HTML content', () => {
    expect(parseHtml(stripIndent`
      <h3>제목</h3>
      <ol>
        <li>내용 1</li>
        <li>내용 2</li>
        <li>내용 3</li>
      </ol>
      <ul>
        <li>내용 1</li>
        <li>내용 2</li>
        <li>내용 3</li>
      </ul>
      <p>내용</p>
    `)).toEqual({
      content: [
        {
          level: 'H3',
          title: '제목',
          type: 'OrderedList',
          items: [
            '내용 1',
            '내용 2',
            '내용 3',
          ],
          rawBody: stripIndent`
            <ol>
              <li>내용 1</li>
              <li>내용 2</li>
              <li>내용 3</li>
            </ol>
          `,
        },
      ],
      rawContent: stripIndent`
        <h3>제목</h3>
        <ol>
          <li>내용 1</li>
          <li>내용 2</li>
          <li>내용 3</li>
        </ol>
      `,
    });

    expect(parseHtml(stripIndent`
      <h3>제목</h3>
      <ul>
        <li>내용 1</li>
        <li>내용 2</li>
        <li>내용 3</li>
      </ul>
      <p>내용</p>
      <ol>
        <li>내용 1</li>
        <li>내용 2</li>
        <li>내용 3</li>
      </ol>
    `)).toEqual({
      content: [
        {
          level: 'H3',
          title: '제목',
          type: 'UnorderedList',
          items: [
            '내용 1',
            '내용 2',
            '내용 3',
          ],
          rawBody: stripIndent`
            <ul>
              <li>내용 1</li>
              <li>내용 2</li>
              <li>내용 3</li>
            </ul>
          `,
        },
      ],
      rawContent: stripIndent`
        <h3>제목</h3>
        <ul>
          <li>내용 1</li>
          <li>내용 2</li>
          <li>내용 3</li>
        </ul>
      `,
    });

    expect(parseHtml(stripIndent`
      <h3>제목</h3>
      <p>내용1</p>
      <p>내용2</p>
      <p>내용3</p>
      <ul>
        <li>내용 1</li>
        <li>내용 2</li>
        <li>내용 3</li>
      </ul>
      <ol>
        <li>내용 1</li>
        <li>내용 2</li>
        <li>내용 3</li>
      </ol>
    `)).toEqual({
      content: [
        {
          level: 'H3',
          title: '제목',
          type: 'MultipleParagraph',
          items: [
            '내용1',
            '내용2',
            '내용3',
          ],
          rawBody: stripIndent`
            <p>내용1</p>
            <p>내용2</p>
            <p>내용3</p>
          `,
        },
      ],
      rawContent: stripIndent`
        <h3>제목</h3>
        <p>내용1</p>
        <p>내용2</p>
        <p>내용3</p>
      `,
    });
  });
});
