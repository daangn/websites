"use strict";

exports.__esModule = true;
exports.onCreateNode = exports.createSchemaCustomization = exports.pluginOptionsSchema = void 0;

var _types = require("./types");

const pluginOptionsSchema = ({
  Joi
}) => {
  return Joi.object({
    uid: Joi.string().required()
  });
};

exports.pluginOptionsSchema = pluginOptionsSchema;
const gql = String.raw;

const createSchemaCustomization = ({
  actions
}) => {
  actions.createTypes(gql`
    type Faq implements Node
      @childOf(type: ["PrismicFaq"])
      @dontInfer
    {
      entries: [FaqEntry!]!
    }

    type FaqEntry {
      id: ID!
      question: String!
      answerHtml: String!
    }
  `);
};

exports.createSchemaCustomization = createSchemaCustomization;

const onCreateNode = ({
  node,
  actions,
  createNodeId,
  createContentDigest
}, options) => {
  // Must be validated by pluginOptionsSchema
  const {
    uid
  } = options;

  if ((0, _types.isPrismicFaqNode)(node)) {
    if (node.uid !== uid) {
      return;
    }

    const id = createNodeId(`PrismicFaq:${node.id} >>> Faq`);
    const faqSource = {
      id,
      entries: node.data.entries.map((entry, index) => ({
        id: `faq-${node.id}-${index}`,
        question: entry.question,
        answerHtml: entry.answer.html
      }))
    };
    actions.createNode({ ...faqSource,
      internal: {
        type: 'Faq',
        contentDigest: createContentDigest(faqSource)
      }
    });
    actions.createParentChildLink({
      parent: node,
      child: faqSource
    });
  }
};

exports.onCreateNode = onCreateNode;