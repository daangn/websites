import slugify from 'cjk-slug';
import { type GatsbyNode } from 'gatsby';
import { createRemoteFileNode } from 'gatsby-source-filesystem';

import {
  type PrismicMemberProfileNode,
  type PrismicPostDataBodyCtaButtonSlice,
  type PrismicPostDataBodyGroupImageSectionSlice,
  type PrismicPostDataBodyQuoteSectionSlice,
  type PrismicPostDataBodyVerticalQuoteSectionSlice,
  type PrismicPostNode,
  type PrismicPostRichTextSectionSlice,
  type PrismicPostDataBodySingleImageSectionSlice,
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
        slug: {
          type: 'String!',
          resolve(node: PrismicPostNode) {
            return node.uid && slugify(node.uid);
          },
        },
        publishedAt: {
          type: 'Date!',
          resolve(node: PrismicPostNode) {
            if (!node.data.published_at) {
              throw new Error(
                `Post 의 published_at 필드 값이 비어있습니다. prismicId: ${node.prismicId}`,
              );
            }
            return node.data.published_at;
          },
        },
        thumbnailImage: {
          type: 'File!',
          resolve(node: PrismicPostNode) {
            if (!node.data.thumbnail_image.url) {
              throw new Error(
                `Post 의 thumbnail_image 필드 값이 비어있습니다. prismicId: ${node.prismicId}`,
              );
            }
            return createRemoteFileNode({
              url: node.data.thumbnail_image.url,
              createNode,
              createNodeId,
              cache,
            });
          },
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
          type: '[PostBodyItem!]!',
          resolve(node: PrismicPostNode) {
            return node.data.body;
          },
        },
      },
    }),
    schema.buildUnionType({
      name: 'PostBodyItem',
      types: [
        'PostRichTextSection',
        'PostGroupImageSection',
        'PostQuoteSection',
        'PostVerticalQuoteSection',
        'PostCtaButtonSection',
        'PostSingleImageSection',
      ],
      resolveType(parent: PrismicPostNode['data']['body'][number]) {
        switch (parent.slice_type) {
          case 'rich_text_section':
            return 'PostRichTextSection';
          case 'group_image_section':
            return 'PostGroupImageSection';
          case 'quote_section':
            return 'PostQuoteSection';
          case 'vertical_quote_section':
            return 'PostVerticalQuoteSection';
          case 'cta_button':
            return 'PostCtaButtonSection';
          case 'single_image_section':
            return 'PostSingleImageSection';
        }
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
            return parent;
          },
        },
        id: {
          type: 'String!',
          resolve(parent: PrismicPostRichTextSectionSlice) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          resolve(parent: PrismicPostRichTextSectionSlice) {
            return parent.slice_type;
          },
        },
        items: {
          type: '[JSON!]!',
          resolve(parent: PrismicPostRichTextSectionSlice) {
            return parent.items;
          },
        },
        primary: {
          type: 'JSON!',
          resolve(parent: PrismicPostRichTextSectionSlice) {
            return parent.primary;
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'PostGroupImageSection',
      extensions: {
        dontInfer: {},
      },
      fields: {
        id: {
          type: 'String!',
          resolve(parent: PrismicPostDataBodyGroupImageSectionSlice) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          resolve(parent: PrismicPostDataBodyGroupImageSectionSlice) {
            return parent.slice_type;
          },
        },
        groupImage1: {
          type: 'File!',
          resolve(parent: PrismicPostDataBodyGroupImageSectionSlice) {
            if (!parent.primary.group_image1.url) {
              throw new Error(
                `GroupImageSection 의 image 필드 값이 비어있습니다. prismicId: ${parent.id}`,
              );
            }
            return createRemoteFileNode({
              url: parent.primary.group_image1.url,
              createNode,
              createNodeId,
              cache,
            });
          },
        },
        groupImage2: {
          type: 'File!',
          resolve(parent: PrismicPostDataBodyGroupImageSectionSlice) {
            if (!parent.primary.group_image2.url) {
              throw new Error(
                `GroupImageSection 의 image 필드 값이 비어있습니다. prismicId: ${parent.id}`,
              );
            }
            return createRemoteFileNode({
              url: parent.primary.group_image2.url,
              createNode,
              createNodeId,
              cache,
            });
          },
        },
        groupImageCaption: {
          type: 'String',
          resolve(parent: PrismicPostDataBodyGroupImageSectionSlice) {
            return parent.primary?.group_image_caption;
          },
        },
        primary: {
          type: 'JSON!',
          resolve(parent: PrismicPostDataBodyGroupImageSectionSlice) {
            return parent.primary;
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'PostQuoteSection',
      extensions: {
        dontInfer: {},
      },
      fields: {
        id: {
          type: 'String!',
          resolve(parent: PrismicPostDataBodyQuoteSectionSlice) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          resolve(parent: PrismicPostDataBodyQuoteSectionSlice) {
            return parent.slice_type;
          },
        },
        primary: {
          type: 'JSON!',
          resolve(parent: PrismicPostDataBodyQuoteSectionSlice) {
            return parent.primary;
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'PostVerticalQuoteSection',
      extensions: {
        dontInfer: {},
      },
      fields: {
        id: {
          type: 'String!',
          resolve(parent: PrismicPostDataBodyVerticalQuoteSectionSlice) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          resolve(parent: PrismicPostDataBodyVerticalQuoteSectionSlice) {
            return parent.slice_type;
          },
        },
        primary: {
          type: 'JSON!',
          resolve(parent: PrismicPostDataBodyVerticalQuoteSectionSlice) {
            return parent.primary;
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'PostCtaButtonSection',
      extensions: {
        dontInfer: {},
      },
      fields: {
        id: {
          type: 'String!',
          resolve(parent: PrismicPostDataBodyCtaButtonSlice) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          resolve(parent: PrismicPostDataBodyCtaButtonSlice) {
            return parent.slice_type;
          },
        },
        primary: {
          type: 'JSON!',
          resolve(parent: PrismicPostDataBodyCtaButtonSlice) {
            return parent.primary;
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
    schema.buildObjectType({
      name: 'PostSingleImageSection',
      extensions: {
        dontInfer: {},
      },
      fields: {
        id: {
          type: 'String!',
          resolve(parent: PrismicPostDataBodySingleImageSectionSlice) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          resolve(parent: PrismicPostDataBodySingleImageSectionSlice) {
            return parent.slice_type;
          },
        },
        image: {
          type: 'File!',
          resolve(parent: PrismicPostDataBodySingleImageSectionSlice) {
            if (!parent.primary.image.url) {
              throw new Error(
                `SingleImageSection 의 image 필드 값이 비어있습니다. prismicId: ${parent.id}`,
              );
            }
            return createRemoteFileNode({
              url: parent.primary.image.url,
              createNode,
              createNodeId,
              cache,
            });
          },
        },
        imageCaption: {
          type: 'String',
          resolve(parent: PrismicPostDataBodySingleImageSectionSlice) {
            return parent.primary?.image_caption_text;
          },
        },
        primary: {
          type: 'JSON!',
          resolve(parent: PrismicPostDataBodyGroupImageSectionSlice) {
            return parent.primary;
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
