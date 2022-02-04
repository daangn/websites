import * as path from 'path';
import * as fs from 'fs/promises';
import type { GatsbyNode } from 'gatsby';
import type { Key, Translation } from '@lokalise/node-api';
import { LokaliseApi } from '@lokalise/node-api';

type PluginOptions = {
  lokaliseApiToken: string,
  lokaliseProjectId: string,
};

const gql = String.raw;

export const pluginOptionsSchema: GatsbyNode['pluginOptionsSchema'] = ({
  Joi,
}) => {
  return Joi.object({
    lokaliseApiToken: Joi.string().required().default(process.env.LOKALISE_API_TOKEN),
    lokaliseProjectId: Joi.string().required().default(process.env.LOKALISE_PROJECT_ID),
  });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
}) => {

  actions.createTypes(gql`
    type LokaliseTranslation implements Node {
      locale: String!
      messages: LokaliseMessages!
    }

    type LokaliseMessages
  `);
}

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}, pluginOptions) => {
  const { lokaliseApiToken, lokaliseProjectId } = pluginOptions as unknown as PluginOptions;
  const lokaliseApi = new LokaliseApi({ apiKey: lokaliseApiToken });

  const { items } = await lokaliseApi.keys().list({
    project_id: lokaliseProjectId,
    page: 1,
    // FIXME: 어... 500개면 되겠지
    // FIXME: Rate-limit 대응 어떻게 하지
    limit: 500,
    include_translations: 1,
  });

  const keys = items as Key[];

  if (!keys || keys.length === 0) {
    reporter.panic(`no keys found at project_id=${lokaliseProjectId}`);
  }

  type TranslationKey = string;
  type TranslationMessage = string;
  type LokaliseTranslation = Record<TranslationKey, TranslationMessage>;

  type Locale = string;
  type LocalizedLokaliseTranslation = Record<Locale, LokaliseTranslation>;

  const aggregatedTranslation: LocalizedLokaliseTranslation = {};

  for (const key of keys) {
    if (!Array.isArray(key.translations)) {
      continue;
    }
    const keyName = (key.key_name as Record<string, string>)['web'];
    for (const t of key.translations as Translation[]) {
      if (!aggregatedTranslation[t.language_iso]) {
        aggregatedTranslation[t.language_iso] = {};
      }
      aggregatedTranslation[t.language_iso][keyName] = t.translation;
    }
  }

  let emitted = false;

  for (const [locale, messages] of Object.entries(aggregatedTranslation)) {
    const keys = Object.keys(messages);

    if (!emitted) {
      await renderMessagesFragment(
        keys,
        reporter.stripIndent,
      );
      await renderMessagesType(
        keys,
        reporter.stripIndent,
      );
      emitted = true;
    }

    const content = {
      locale,
      messages,
    };

    actions.createNode({
      id: createNodeId(`LokaliseTranslation:${locale}`),
      ...content,
      internal: {
        type: 'LokaliseTranslation',
        contentDigest: createContentDigest(content),
      },
    });
  }
};

async function renderMessagesFragment(
  keys: string[],
  stripIndent = String.raw,
) {
  const outputDir = path.join(__dirname, 'src');
  fs.mkdir(outputDir, { recursive: true });

  const outputPath = path.join(outputDir, 'fragments.js');
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

async function renderMessagesType(
  keys: string[],
  stripIndent = String.raw,
) {
  const outputDir = path.join(__dirname, 'src');
  fs.mkdir(outputDir, { recursive: true });

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
