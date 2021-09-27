import type { GatsbyNode, NodeInput } from 'gatsby';
import got from 'got';

import type { GreenhouseJob } from './types';

const gql = String.raw;

export const pluginOptionsSchema: GatsbyNode['pluginOptionsSchema'] = ({
  Joi,
}) => {
  return Joi.object({
    boardToken: Joi.string().required(),
    includeContent: Joi.boolean().default(false),
    forceGC: Joi.boolean().default(false),
  });
};

type PluginOptions = {
  boardToken: string,
  includeContent: boolean,
  forceGC: boolean,
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
  schema,
}, options) => {
  // already validated by `pluginOptionsSchema`
  const { includeContent } = options as unknown as PluginOptions;

  type GreenhouseJobSource = (
    & NodeInput
    & Omit<GreenhouseJob, 'id'>
    & { ghId: number; boardToken: string }
  );

  type GreenhouseJobCustomFieldMetadataSource = GreenhouseJobSource['metadata'][number];

  actions.createTypes(gql`
    enum GreenhouseJobCustomFieldType {
      SHORT_TEXT
      LONG_TEXT
      SINGLE_SELECT
      MULTI_SELECT
      YES_NO
      CURRENCY
      DATE
      URL
      USER
      CURRENCY_RANGE
      NUMBER_RANGE
    }
  `);

  actions.createTypes([
    schema.buildObjectType({
      name: 'GreenhouseJob',
      interfaces: ['Node'],
      extensions: {
        infer: false,
      },
      fields: {
        ghId: {
          type: 'String!',
          resolve: (source: GreenhouseJobSource) => source.ghId.toString(),
        },
        title: {
          type: 'String!',
        },
        boardUrl: {
          type: 'String!',
          resolve: (source: GreenhouseJobSource) => source.absolute_url,
          description: 'URL to public Greenhouse job board UI',
        },
        content: {
          type: includeContent ? 'String!' : 'String',
        },
        updatedAt: {
          type: 'Date!',
          resolve: (source: GreenhouseJobSource) => new Date(source.updated_at),
          extensions: {
            dateformat: {},
          },
        },
        metadata: {
          type: '[GreenhouseJobCustomFieldMetadata!]!',
        },
        boardToken:{
          type: 'String!',
        }
      },
    }),
    schema.buildObjectType({
      name: 'GreenhouseJobCustomFieldMetadata',
      extensions: {
        infer: false,
      },
      fields: {
        id: {
          type: 'String!',
          resolve: (source: GreenhouseJobCustomFieldMetadataSource) => source.id.toString(),
        },
        name: {
          type: 'String!',
        },
        type: {
          type: 'GreenhouseJobCustomFieldType!',
          resolve: (source: GreenhouseJobCustomFieldMetadataSource) => source.value_type.toUpperCase(),
        },
        value: {
          type: 'String',
        },
      },
    }),
  ]);

  // TODO: Department
  // TODO: Location
};

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
  actions,
  createNodeId,
  createContentDigest,
  getNodesByType,
}, options) => {
  // must validated by `pluginOptionsSchema`
  const {
    boardToken,
    includeContent,
    forceGC,
  } = options as unknown as PluginOptions;

  type Response = {
    jobs: GreenhouseJob[],
    meta: {
      total: number,
    },
  };

  const url = new URL(`https://boards-api.greenhouse.io/v1/boards/${boardToken}/jobs?content=${includeContent}`);
  const response = await got<Response>(url, { responseType: 'json' });

  const jobNodes: NodeInput[] = response.body.jobs.map(job => ({
    ...job,
    boardToken,
    ghId: job.id,
    id: createNodeId(`GreenhouseJob:${job.id}`),
    internal: {
      type: 'GreenhouseJob',
      contentDigest: createContentDigest(job),
    },
  }));

  for (const node of jobNodes) {
    actions.createNode(node);
  }

  if (forceGC) {
    const shouldLeave = new Set<string>(jobNodes.map(node => node.id));
    const cachedNodes = getNodesByType('GreenhouseJob');
    for (const node of cachedNodes) {
      if (node.boardToken !== boardToken) {
        continue;
      }
      if (!shouldLeave.has(node.id)) {
        actions.deleteNode(node);
      }
    }
  }
};
