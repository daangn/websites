"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.sourceNodes = exports.createSchemaCustomization = exports.pluginOptionsSchema = void 0;

var _got = _interopRequireDefault(require("got"));

const gql = String.raw;

const pluginOptionsSchema = ({
  Joi
}) => {
  return Joi.object({
    boardToken: Joi.string().required(),
    includeContent: Joi.boolean().default(false)
  });
};

exports.pluginOptionsSchema = pluginOptionsSchema;

const createSchemaCustomization = ({
  actions,
  schema
}, options) => {
  // already validated by `pluginOptionsSchema`
  const {
    includeContent
  } = options;
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
  actions.createTypes([schema.buildObjectType({
    name: 'GreenhouseJob',
    interfaces: ['Node'],
    extensions: {
      infer: false
    },
    fields: {
      ghId: {
        type: 'String!',
        resolve: source => source.ghId.toString()
      },
      title: {
        type: 'String!'
      },
      boardUrl: {
        type: 'String!',
        resolve: source => source.absolute_url,
        description: 'URL to public Greenhouse job board UI'
      },
      content: {
        type: includeContent ? 'String!' : 'String'
      },
      updatedAt: {
        type: 'Date!',
        resolve: source => new Date(source.updated_at),
        extensions: {
          dateformat: {}
        }
      },
      metadata: {
        type: '[GreenhouseJobCustomFieldMetadata!]!'
      }
    }
  }), schema.buildObjectType({
    name: 'GreenhouseJobCustomFieldMetadata',
    extensions: {
      infer: false
    },
    fields: {
      id: {
        type: 'String!',
        resolve: source => source.id.toString()
      },
      name: {
        type: 'String!'
      },
      type: {
        type: 'GreenhouseJobCustomFieldType!',
        resolve: source => source.value_type.toUpperCase()
      },
      value: {
        type: 'String'
      }
    }
  })]); // TODO: Department
  // TODO: Location
};

exports.createSchemaCustomization = createSchemaCustomization;

const sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest
}, options) => {
  // already validated by `pluginOptionsSchema`
  const {
    boardToken,
    includeContent
  } = options;
  const url = new URL(`https://boards-api.greenhouse.io/v1/boards/${boardToken}/jobs?content=${includeContent}`);
  const response = await (0, _got.default)(url, {
    responseType: 'json'
  });

  for (const job of response.body.jobs) {
    const {
      id: ghId,
      ...content
    } = job;
    actions.createNode({
      id: createNodeId(`GreenhouseJob - ${ghId}`),
      internal: {
        type: 'GreenhouseJob',
        contentDigest: createContentDigest(job)
      },
      ghId,
      ...content
    });
  }
};

exports.sourceNodes = sourceNodes;