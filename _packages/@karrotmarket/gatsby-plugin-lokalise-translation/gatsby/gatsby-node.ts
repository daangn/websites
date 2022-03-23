import * as path from 'path';
import * as fs from 'fs/promises';
import type { GatsbyNode, NodeInput } from 'gatsby';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
}) => {
  const gql = String.raw;

  actions.createTypes(gql`
    type LokaliseTranslation implements Node {
      messages: LokaliseMessages!
    }

    type LokaliseMessages {
      _placeholder: String!
    }
  `);
}

let emitted = false;

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({
  store,
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  if (!(
    node.internal.type === 'File' &&
    node.internal.mediaType === 'application/json' &&
    node.sourceInstanceName === 'translations'
  )) {
    return;
  }

  const { program } = store.getState();
  const baseDir = program.directory;

  type TranslationKey = string;
  type TranslationMessage = string;
  type LokaliseMessages = Record<TranslationKey, TranslationMessage>;

  const messages: LokaliseMessages = JSON.parse(await loadNodeContent(node));
  const translationNode: NodeInput = {
    id: createNodeId(`${node.id} >>> LokaliseTranslation`),
    parent: node.id,
    internal: {
      type: 'LokaliseTranslation',
      contentDigest: createContentDigest(messages),
    },
    messages,
  };

  actions.createNode(translationNode);
  actions.createParentChildLink({
    parent: node,
    child: translationNode,
  });

  if (!emitted) {
    const outputDir = path.join(baseDir, 'src/__generated__');
    await fs.mkdir(outputDir, { recursive: true });

    await renderMessagesFragment(
      outputDir,
      Object.keys(messages),
      reporter.stripIndent,
    );
    emitted = true;
  }
};

async function renderMessagesFragment(
  outputDir: string,
  keys: string[],
  stripIndent = String.raw,
) {
  const outputPath = path.join(outputDir, 'lokalise-translation.js');
  const content = stripIndent`
    /* eslint-disable */

    import { graphql } from 'gatsby';

    export const fragments = graphql\`
      fragment AllLokaliseMessages on LokaliseMessages {
        ${keys.join('\n        ')}
      }
    \`;
  `;
  await fs.writeFile(outputPath, content, 'utf-8');
};

// 어... 일단 안씀
async function renderMessagesType(
  outputDir: string,
  keys: string[],
  stripIndent = String.raw,
) {
  const outputPath = path.join(outputDir, 'types.ts');
  const content = stripIndent`
    /* eslint-disable */

    export type AllLokaliseMessages = Record<AllLokaliseMessageKeys, string>;

    type AllLokaliseMessageKeys = (
      | ${keys.map(key => `'${key}'`).join('\n      | ')}
    );
  `;
  await fs.writeFile(outputPath, content, 'utf-8');
};
