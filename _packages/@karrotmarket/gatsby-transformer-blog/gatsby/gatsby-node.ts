import { type GatsbyNode } from 'gatsby';

import {
  isPrismicAboutBlogPostNode,
  isPrismicMemberProfile,
  type PrismicAboutBlogPostNode,
  type PrismicMemberProfileNode,
} from './types';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  schema,
  actions,
}) => {
  const gql = String.raw;

  actions.createTypes([
    schema.buildObjectType({
      name: 'MemberProfile',
      interfaces: ['Node'],
      extensions: {
        dontInfer: {},
        childOf: {
          types: ['PrismicMemberProfile'],
        },
      },
      fields: {
        prismicId: {
          type: 'String!',
        },
        name: {
          type: 'String!',
          resolve(node: PrismicMemberProfileNode) {
            return node.data.name;
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'BlogPost',
      interfaces: ['Node'],
      extensions: {
        dontInfer: {},
        childOf: {
          types: ['PrismicAboutBlogPost'],
        },
      },
      fields: {
        title: {
          type: 'String!',
          resolve(node: PrismicAboutBlogPostNode) {
            const titleNode = node.data.title[0];
            if (!titleNode?.text) {
              throw new Error(`글 제목이 비어있습니다. prismic id: ${node.prismicId}`);
            }
            return titleNode.text;
          },
        },
        author: {
          type: 'MemberProfile',
          extensions: {
            link: {
              by: 'prismicId',
              from: 'data.author.id',
            },
          },
        },
      },
    }),
  ]);
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  createNodeId,
  createContentDigest,
}) => {
  if (isPrismicAboutBlogPostNode(node)) {
    actions.createNode({
      ...node,
      id: createNodeId(`PrismicAboutBlogPost:${node.id} >>> BlogPost`),
      parent: node.id,
      children: [],
      internal: {
        type: 'BlogPost',
        contentDigest: createContentDigest(node),
      },
    });
  }

  if (isPrismicMemberProfile(node)) {
    actions.createNode({
      ...node,
      id: createNodeId(`PrismicMemberProfile:${node.id} >>> MemberProfile`),
      parent: node.id,
      children: [],
      internal: {
        type: 'MemberProfile',
        contentDigest: createContentDigest(node),
      },
    });
  }
};
