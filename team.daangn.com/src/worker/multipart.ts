/// <reference types="@cloudflare/workers-types" />

type PartHeader = {
  name: string,
  values: string[],
};

type FormFieldInfo = (
  | {
    type: 'string',
    name: string,
  }
  | {
    type: 'file',
    name: string,
    fileType: string,
    fileName: string,
  }
);

interface Body {
  arrayBuffer(): Promise<ArrayBuffer>;
}

export async function parseFormData(body: Body): Promise<FormData> {
  const decoder = new TextDecoder();
  const bytes = await body.arrayBuffer() as Uint8Array;
  const formData = new FormData();

  for (const part of parseMimeMultipart(bytes)) {
    if (part.length === 0) {
      continue;
    }

    const blob = bytes.slice(part.index, part.index + part.length);
    const fieldInfo = parsePartHeader(part.headers);

    switch (fieldInfo.type) {
      case 'string': {
        formData.append(fieldInfo.name, decoder.decode(blob));
        break;
      }
      case 'file': {
        formData.append(fieldInfo.name, new File([blob], fieldInfo.fileName, { type: fieldInfo.fileType }));
        break;
      }
    }
  }

  return formData;
}

function parsePartHeader(headers: PartHeader[]): FormFieldInfo {
  const contentType = headers.find(h => /^content-type$/i.test(h.name));
  const contentDisposition = headers.find(h => /^content-disposition$/i.test(h.name));

  if (contentDisposition == null || contentDisposition.values[0] !== 'form-data') {
    throw new Error('No field name');
  }

  function parseFieldValue(name: string) {
    const pattern = /(?<key>[\w\-]+)=\"(?<value>.+)\"/;
    const match = name.match(pattern);
    if (match?.groups == null) {
      throw new Error('No field name');
    }
    return match.groups['value'];
  }

  const name = parseFieldValue(contentDisposition.values[1]);

  if (contentType) {
    return {
      type: 'file',
      name,
      fileType: contentType.values[0],
      fileName: parseFieldValue(contentDisposition.values[2]),
    };

  // assume it as string literal if no content type provided
  } else {
    return {
      type: 'string',
      name,
    };
  }
}

// See https://github.com/TomasHubelbauer/workers-formdata
// See https://github.com/TomasHubelbauer/mime-multipart
function* parseMimeMultipart(uint8Array: Uint8Array) {
  const textDecoder = new TextDecoder();

  type Boundary = { type: 'boundary', boundary: string };
  type HeaderName = { type: 'header-name', boundary: string, name: string, value: '', headers: PartHeader[] };
  type HeaderValue = { type: 'header-value', boundary: string, name: string, value: string, values: string[], headers: PartHeader[] };
  type Content = { type: 'content', boundary: string, headers: PartHeader[], index: number, length: number };
  type State = Boundary | HeaderName | HeaderValue | Content;

  let state: State = { type: 'boundary', boundary: '' };
  let index = 0;
  let line = 0;
  let column = 0;
  for (; index < uint8Array.byteLength; index++) {
    const character = textDecoder.decode(uint8Array.slice(index, index + 1));
    if (character === '\n') {
      line++;
      column = 0;
    }

    column++;

    switch (state.type) {
      case 'boundary': {
        // Check Windows newlines
        if (character === '\r') {
          if (textDecoder.decode(uint8Array.slice(index + 1, index + 2)) !== '\n') {
            throw new Error(`At ${index} (${line}:${column}): found an incomplete Windows newline.`);
          }
          break;
        }

        if (character === '\n') {
          state = { type: 'header-name', boundary: state.boundary, name: '', value: '', headers: [] };
          break;
        }

        state.boundary += character;
        break;
      }
      case 'header-name': {
        // Check Windows newlines
        if (character === '\r') {
          if (textDecoder.decode(uint8Array.slice(index + 1, index + 2)) !== '\n') {
            throw new Error(`At ${index} (${line}:${column}): found an incomplete Windows newline.`);
          }
          break;
        }

        if (character === '\n') {
          if (state.name === '') {
            state = { type: 'content', boundary: state.boundary, headers: state.headers, index: index + 1, length: 0 };
            break;
          } else {
            throw new Error(`At ${index} (${line}:${column}): a newline in a header name '${state.name}' is not allowed.`);
          }
        }

        if (character === ':') {
          state = { type: 'header-value', boundary: state.boundary, name: state.name, value: '', values: [], headers: state.headers };
          break;
        }

        state.name += character;
        break;
      }
      case 'header-value': {
        // Check Windows newlines
        if (character === '\r') {
          if (textDecoder.decode(uint8Array.slice(index + 1, index + 2)) !== '\n') {
            throw new Error(`At ${index} (${line}:${column}): found an incomplete Windows newline.`);
          }
          break;
        }

        if (character === ';') {
          state.values.push(state.value);
          state.value = '';
          break;
        }

        if (character === ' ') {
          // Ignore white-space prior to the value content
          if (state.value === '') {
            break;
          }
        }

        if (character === '\n') {
          state.values.push(state.value);
          state = { type: 'header-name', boundary: state.boundary, name: '', value: '', headers: [{ name: state.name, values: state.values }, ...state.headers] };
          break;
        }

        state.value += character;
        break;
      }
      case 'content': {
        // If the newline is followed by the boundary, then the content ends
        if (character === '\n' || character === '\r' && textDecoder.decode(uint8Array.slice(index + 1, index + 2)) === '\n') {
          if (character === '\r') {
            index++;
          }

          const boundaryCheck = textDecoder.decode(uint8Array.slice(index + '\n'.length, index + '\n'.length + state.boundary.length));
          if (boundaryCheck === state.boundary) {
            const conclusionCheck = textDecoder.decode(uint8Array.slice(index + '\n'.length + state.boundary.length, index + '\n'.length + state.boundary.length + '--'.length));
            if (conclusionCheck === '--') {
              index += '\n'.length + state.boundary.length + '--'.length;
              yield { headers: state.headers, index: state.index, length: state.length };

              if (index !== uint8Array.byteLength) {
                const excess = uint8Array.slice(index);
                if (textDecoder.decode(excess) === '\n' || textDecoder.decode(excess) === '\r\n') {
                  return;
                }

                throw new Error(`At ${index} (${line}:${column}): content is present past the expected end of data ${uint8Array.byteLength}.`);
              }

              return;
            } else {
              yield { headers: state.headers, index: state.index, length: state.length };
              state = { type: 'boundary', boundary: '' };
              break;
            }
          }
        }

        state.length++;
        break;
      }
      default: {
        throw new Error(`At ${index} (${line}:${column}): invalid state ${JSON.stringify(state)}.`);
      }
    }
  }

  if (state.type !== 'content') {
    throw new Error(`At ${index} (${line}:${column}): expected content state, got ${JSON.stringify(state)}.`);
  }
};
