import { type GatsbyNode } from 'gatsby';
import { createRemoteFileNode } from 'gatsby-source-filesystem';

import {
  type PrismicMemberProfileNode,
  type PrismicPostNode,
  type PrismicPostRichTextSectionSlice,
  isPrismicMemberProfile,
  isPrismicPostCategoryNode,
  isPrismicPostNode,
} from './types';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  schema,
  cache,
  createNodeId,
  actions: { createNode, createTypes },
}) => {
  createTypes([
    schema.buildObjectType({
      name: 'PostCategory',
      interfaces: ['Node'],
      extensions: {
        dontInfer: {},
      },
      fields: {
        prismicId: {
          type: 'String!',
        },
        uid: {
          type: 'String!',
        },
        name: {
          type: 'String!',
          extensions: {
            proxy: {
              from: 'data.name',
            },
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'Post',
      interfaces: ['Node'],
      extensions: {
        dontInfer: {},
        childOf: {
          types: ['PrismicPost'],
        },
      },
      fields: {
        prismicId: {
          type: 'String!',
        },
        uid: {
          type: 'String!',
        },
        title: {
          type: 'String!',
          resolve(node: PrismicPostNode) {
            const titleNode = node.data.title[0];
            if (!titleNode?.text) {
              throw new Error(`글 제목이 비어있습니다. prismic id: ${node.prismicId}`);
            }
            return titleNode.text;
          },
        },
        summary: {
          type: 'String!',
          resolve(node: PrismicPostNode) {
            if (!node.data.summary) {
              throw new Error(`글 요약 비어있습니다. prismic id: ${node.prismicId}`);
            }
            return node.data.summary;
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
        category: {
          type: 'PostCategory!',
          extensions: {
            link: {
              by: 'prismicId',
              from: 'data.category.id',
            },
          },
        },
        tags: {
          type: '[String!]!',
          resolve(node: PrismicPostNode) {
            if (!node.data.tags) {
              return [];
            }
            return node.data.tags.split(',').map((tag) => tag.trim());
          },
        },
        relatedPosts: {
          type: '[Post!]!',
          extensions: {
            link: {
              by: 'prismicId',
            },
          },
          resolve(node: PrismicPostNode) {
            if (!node.data.related_posts || node.data.related_posts.length === 0) {
              return [];
            }
            return node.data.related_posts
              .map(({ post }) => ('id' in post ? post.id : null))
              .filter(Boolean);
          },
        },
        body: {
          type: '[PostRichTextSection!]!',
          resolve(node: PrismicPostNode) {
            return node.data.body;
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'PostRichTextSection',
      extensions: {
        dontInfer: {},
      },
      fields: {
        content: {
          type: 'JSON!',
          resolve(parent: PrismicPostRichTextSectionSlice) {
            return parent.primary.content;
          },
        },
      },
    }),
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
            if (!node.data.name) {
              throw new Error(
                `MemberProfile 의 name 필드 값이 비어있습니다. prismicId: ${node.prismicId}`,
              );
            }
            return node.data.name;
          },
        },
        image: {
          type: 'File!',
          resolve(node: PrismicMemberProfileNode) {
            if (!node.data.image.url) {
              throw new Error(
                `MemberProfile 의 image 필드 값이 비어있습니다. prismicId: ${node.prismicId}`,
              );
            }
            return createRemoteFileNode({
              url: node.data.image.url,
              createNode,
              createNodeId,
              cache,
            });
          },
        },
        nickname: {
          type: 'String!',
          resolve(node: PrismicMemberProfileNode) {
            if (!node.data.nickname) {
              throw new Error(
                `MemberProfile 의 nickname 필드 값이 비어있습니다. prismicId: ${node.prismicId}`,
              );
            }
            return node.data.nickname;
          },
        },
        email: {
          type: 'String!',
          resolve(node: PrismicMemberProfileNode) {
            if (!node.data.email) {
              throw new Error(
                `MemberProfile 의 email 필드 값이 비어있습니다. prismicId: ${node.prismicId}`,
              );
            }
            return node.data.email;
          },
        },
        role: {
          type: 'String!',
          resolve(node: PrismicMemberProfileNode) {
            if (!node.data.role) {
              throw new Error(
                `MemberProfile 의 role 필드 값이 비어있습니다. prismicId: ${node.prismicId}`,
              );
            }
            return node.data.role;
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
  if (isPrismicPostCategoryNode(node)) {
    actions.createNode({
      ...node,
      id: createNodeId(`PrismicPostCategory:${node.id} >>> PostCategory`),
      parent: node.id,
      children: [],
      internal: {
        type: 'PostCategory',
        contentDigest: createContentDigest(node),
      },
    });
  }

  if (isPrismicPostNode(node)) {
    actions.createNode({
      ...node,
      id: createNodeId(`PrismicPost:${node.id} >>> Post`),
      parent: node.id,
      children: [],
      internal: {
        type: 'Post',
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
