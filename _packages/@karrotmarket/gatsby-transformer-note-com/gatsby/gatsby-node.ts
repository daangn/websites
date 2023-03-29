import { type GatsbyNode } from 'gatsby';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  schema,
  actions,
}) => {};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  createNodeId,
  createContentDigest,
}) => {
  if (node.internal.type === 'NoteTextNote') {
    actions.createNode({
      ...node,
      id: createNodeId(`NoteTextNote:${node.id} >>> Note`),
      parent: node.id,
      children: [],
      internal: {
        type: 'Note',
        contentDigest: createContentDigest(node),
      },
    });
  }
};
