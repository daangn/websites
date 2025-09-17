// @ts-check

/**
 * @typedef {import('gatsby').GatsbyNode} GatsbyNode
 * @typedef {import('./types').PrismicMemberProfileNode} PrismicMemberProfileNode
 * @typedef {import('./types').PrismicPostDataBodyCtaButtonSlice} PrismicPostDataBodyCtaButtonSlice
 * @typedef {import('./types').PrismicPostDataBodyDividerSlice} PrismicPostDataBodyDividerSlice
 * @typedef {import('./types').PrismicPostDataBodyGroupImageSectionSlice} PrismicPostDataBodyGroupImageSectionSlice
 * @typedef {import('./types').PrismicPostDataBodyQuoteSectionSlice} PrismicPostDataBodyQuoteSectionSlice
 * @typedef {import('./types').PrismicPostDataBodySingleImageSectionSlice} PrismicPostDataBodySingleImageSectionSlice
 * @typedef {import('./types').PrismicPostDataBodySummaryBulletSectionSlice} PrismicPostDataBodySummaryBulletSectionSlice
 * @typedef {import('./types').PrismicPostDataBodyVerticalQuoteSectionSlice} PrismicPostDataBodyVerticalQuoteSectionSlice
 * @typedef {import('./types').PrismicPostNode} PrismicPostNode
 * @typedef {import('./types').PrismicPostCategoryNode} PrismicPostCategoryNode
 * @typedef {import('./types').PrismicPostRichTextSectionSlice} PrismicPostRichTextSectionSlice
 */

import slugify from 'cjk-slug';
import { createRemoteFileNode } from 'gatsby-source-filesystem';

import { isPrismicMemberProfile, isPrismicPostCategoryNode, isPrismicPostNode } from './types.mjs';

/** @type {GatsbyNode['createSchemaCustomization']} */
export const createSchemaCustomization = ({
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
        priority: {
          type: 'Int!',
          /** @param {PrismicPostCategoryNode} node */
          resolve(node) {
            return node.data.priority || 0;
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
          /** @param {PrismicPostNode} node */
          resolve(node) {
            return node.uid && slugify(node.uid);
          },
        },
        publishedAt: {
          type: 'Date!',
          /** @param {PrismicPostNode} node */
          resolve(node) {
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
          /** @param {PrismicPostNode} node */
          resolve(node) {
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
        verticalThumbnailImage: {
          type: 'File!',
          /** @param {PrismicPostNode} node */
          resolve(node) {
            if (!node.tags.includes('blog')) {
              return null;
            }

            if (!node.data.vertical_thumbnail_image.url) {
              throw new Error(
                `Post 의 vertical_thumbnail_image 필드 값이 비어있습니다. prismicId: ${node.prismicId}`,
              );
            }

            return createRemoteFileNode({
              url: node.data.vertical_thumbnail_image.url,
              createNode,
              createNodeId,
              cache,
            });
          },
        },
        title: {
          type: 'String!',
          /** @param {PrismicPostNode} node */
          resolve(node) {
            const titleNode = node.data.title[0];
            if (!titleNode?.text) {
              throw new Error(`글 제목이 비어있습니다. prismic id: ${node.prismicId}`);
            }
            return titleNode.text;
          },
        },
        summary: {
          type: 'String!',
          /** @param {PrismicPostNode} node */
          resolve(node) {
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
        blogCategory: {
          type: '[PostCategory!]!',
          extensions: {
            link: {
              by: 'prismicId',
              from: 'data.category_group.blog_category.id',
            },
          },
        },
        tags: {
          type: '[String!]!',
          /** @param {PrismicPostNode} node */
          resolve(node) {
            if (!node.data.tags) {
              return [];
            }
            return node.data.tags.split(',').map((tag) => tag.trim());
          },
        },
        headerQuote: {
          type: '[JSON]',
          /** @param {PrismicPostNode} node */
          resolve(node) {
            return node.data.header_quote;
          },
        },
        relatedPosts: {
          type: '[Post!]!',
          extensions: {
            link: {
              by: 'prismicId',
            },
          },
          /** @param {PrismicPostNode} node */
          resolve(node) {
            if (!node.data.related_posts || node.data.related_posts.length === 0) {
              return [];
            }
            // TODO: post.isBroken 은 원본이 제거된 참조의 경우
            //  어떻게 찾아 지울 수 있게 검증 및 가이드 마련 필요함
            return node.data.related_posts
              .filter(({ post }) => 'id' in post && !post.isBroken)
              .map(({ post }) => 'id' in post && post.id);
          },
        },
        body: {
          type: '[PostBodyItem!]!',
          /** @param {PrismicPostNode} node */
          resolve(node) {
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
        'PostDivider',
        'PostSummaryBulletSection',
        // 'PostSummaryBulletPoint',
      ],
      /** @param {PrismicPostNode['data']['body'][number]} parent */
      resolveType(parent) {
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
          case 'divider':
            return 'PostDivider';
          case 'summary_bullet_section':
            return 'PostSummaryBulletSection';
          // case 'summary_bullet_point':
          // return 'PostSummaryBulletPoint';
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
          /** @param {PrismicPostRichTextSectionSlice} parent */
          resolve(parent) {
            return parent;
          },
        },
        id: {
          type: 'String!',
          /** @param {PrismicPostRichTextSectionSlice} parent */
          resolve(parent) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          /** @param {PrismicPostRichTextSectionSlice} parent */
          resolve(parent) {
            return parent.slice_type;
          },
        },
        items: {
          type: '[JSON!]!',
          /** @param {PrismicPostRichTextSectionSlice} parent */
          resolve(parent) {
            return parent.items;
          },
        },
        primary: {
          type: 'JSON!',
          /** @param {PrismicPostRichTextSectionSlice} parent */
          resolve(parent) {
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
          /** @param {PrismicPostDataBodyGroupImageSectionSlice} parent */
          resolve(parent) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          /** @param {PrismicPostDataBodyGroupImageSectionSlice} parent */
          resolve(parent) {
            return parent.slice_type;
          },
        },
        groupImage1: {
          type: 'File!',
          /** @param {PrismicPostDataBodyGroupImageSectionSlice} parent */
          resolve(parent) {
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
          /** @param {PrismicPostDataBodyGroupImageSectionSlice} parent */
          resolve(parent) {
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
          /** @param {PrismicPostDataBodyGroupImageSectionSlice} parent */
          resolve(parent) {
            return parent.primary?.group_image_caption;
          },
        },
        primary: {
          type: 'JSON!',
          /** @param {PrismicPostDataBodyGroupImageSectionSlice} parent */
          resolve(parent) {
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
          /** @param {PrismicPostDataBodyQuoteSectionSlice} parent */
          resolve(parent) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          /** @param {PrismicPostDataBodyQuoteSectionSlice} parent */
          resolve(parent) {
            return parent.slice_type;
          },
        },
        primary: {
          type: 'JSON!',
          /** @param {PrismicPostDataBodyQuoteSectionSlice} parent */
          resolve(parent) {
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
          /** @param {PrismicPostDataBodyVerticalQuoteSectionSlice} parent */
          resolve(parent) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          /** @param {PrismicPostDataBodyVerticalQuoteSectionSlice} parent */
          resolve(parent) {
            return parent.slice_type;
          },
        },
        primary: {
          type: 'JSON!',
          /** @param {PrismicPostDataBodyVerticalQuoteSectionSlice} parent */
          resolve(parent) {
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
          /** @param {PrismicPostDataBodyCtaButtonSlice} parent */
          resolve(parent) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          /** @param {PrismicPostDataBodyCtaButtonSlice} parent */
          resolve(parent) {
            return parent.slice_type;
          },
        },
        primary: {
          type: 'JSON!',
          /** @param {PrismicPostDataBodyCtaButtonSlice} parent */
          resolve(parent) {
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
          /** @param {PrismicMemberProfileNode} node */
          resolve(node) {
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
          /** @param {PrismicMemberProfileNode} node */
          resolve(node) {
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
          /** @param {PrismicMemberProfileNode} node */
          resolve(node) {
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
          /** @param {PrismicMemberProfileNode} node */
          resolve(node) {
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
          /** @param {PrismicMemberProfileNode} node */
          resolve(node) {
            if (!node.data.role) {
              throw new Error(
                `MemberProfile 의 role 필드 값이 비어있습니다. prismicId: ${node.prismicId}`,
              );
            }
            return node.data.role;
          },
        },
        profileLink: {
          type: 'String',
          /** @param {PrismicMemberProfileNode} node */
          resolve(node) {
            return node.data?.profile_link?.url;
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
          /** @param {PrismicPostDataBodySingleImageSectionSlice} parent */
          resolve(parent) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          /** @param {PrismicPostDataBodySingleImageSectionSlice} parent */
          resolve(parent) {
            return parent.slice_type;
          },
        },
        image: {
          type: 'File!',
          /** @param {PrismicPostDataBodySingleImageSectionSlice} parent */
          resolve(parent) {
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
          /** @param {PrismicPostDataBodySingleImageSectionSlice} parent */
          resolve(parent) {
            return parent.primary?.image_caption_text;
          },
        },
        primary: {
          type: 'JSON!',
          /** @param {PrismicPostDataBodySingleImageSectionSlice} parent */
          resolve(parent) {
            return parent.primary;
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'PostDivider',
      extensions: {
        dontInfer: {},
      },
      fields: {
        id: {
          type: 'String!',
          /** @param {PrismicPostDataBodyDividerSlice} parent */
          resolve(parent) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          /** @param {PrismicPostDataBodyDividerSlice} parent */
          resolve(parent) {
            return parent.slice_type;
          },
        },
        fullWidthLineDivider: {
          type: 'Boolean',
          /** @param {PrismicPostDataBodyDividerSlice} parent */
          resolve(parent) {
            return parent.primary?.full_width_line_divider;
          },
        },
        lineDivider: {
          type: 'Boolean',
          /** @param {PrismicPostDataBodyDividerSlice} parent */
          resolve(parent) {
            return parent.primary?.line_divider;
          },
        },
        dotDivider: {
          type: 'Boolean',
          /** @param {PrismicPostDataBodyDividerSlice} parent */
          resolve(parent) {
            return parent.primary?.dot_divider;
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'PostSummaryBulletSection',
      extensions: {
        dontInfer: {},
      },
      fields: {
        id: {
          type: 'String!',
          /** @param {PrismicPostDataBodySummaryBulletSectionSlice} parent */
          resolve(parent) {
            return parent.id;
          },
        },
        sliceType: {
          type: 'String!',
          /** @param {PrismicPostDataBodySummaryBulletSectionSlice} parent */
          resolve(parent) {
            return parent.slice_type;
          },
        },
        primary: {
          type: 'JSON!',
          /** @param {PrismicPostDataBodySummaryBulletSectionSlice} parent */
          resolve(parent) {
            return parent.primary;
          },
        },
      },
    }),
  ]);
};

/** @type {GatsbyNode['onCreateNode']} */
export const onCreateNode = ({ node, actions, createNodeId, createContentDigest }) => {
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
