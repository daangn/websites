import type {
  NormalizeAPI,
  PluginOptions,
} from './types';
import { isPrismicFaqNode } from './types';

export const pluginOptionsSchema: NormalizeAPI<'pluginOptionsSchema'> = ({ 
  Joi,
}) => {
  return Joi.object({
    uid: Joi.string().required(),
  });
};

const gql = String.raw;

export const createSchemaCustomization: NormalizeAPI<'createSchemaCustomization'> = ({
  actions,
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

export const onCreateNode: NormalizeAPI<'onCreateNode'> = ({
  node,
  actions,
  createNodeId,
  createContentDigest,
}, options) => {
  // Must be validated by pluginOptionsSchema
  const { uid } = options as unknown as PluginOptions;

  if (isPrismicFaqNode(node)) {
    if (node.uid !== uid) {
      return;
    }
    const id = createNodeId(`PrismicFaq:${node.id} >>> Faq`);
    const faqSource = {
      id,
      entries: node.data.entries.map((entry, index) => ({
        id: `faq-${node.id}-${index}`,
        question: entry.question,
        answerHtml: entry.answer.html,
      })),
    };
    actions.createNode({
      ...faqSource,
      internal: {
        type: 'Faq',
        contentDigest: createContentDigest(faqSource),
      },
    });
    actions.createParentChildLink({
      parent: node,
      child: faqSource as any,
    });
  }
};
