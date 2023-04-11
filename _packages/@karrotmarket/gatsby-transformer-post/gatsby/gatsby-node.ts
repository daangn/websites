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
  isPrismicMemberProfile,
  isPrismicPostCategoryNode,
  isPrismicPostNode,
  isNoteContentNode,
  PostNode,
  isPrismicPost,
  PrismicPostCategoryNode,
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
        categoryId: {
          type: 'String!',
          resolve(node: PrismicPostCategoryNode) {
            return node.prismicId;
          },
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
        infer: false,
        childOf: {
          types: ['PrismicPost', 'NoteContent'],
        },
      },
      fields: {
        postId: {
          type: 'String!',
          resolve(node: PostNode) {
            if (isPrismicPost(node)) {
              return node.prismicId;
            } else {
              return node.noteId.toString();
            }
          },
        },
        uid: {
          type: 'String!',
          resolve(node: PostNode) {
            if (isPrismicPost(node)) {
              return node.uid;
            } else {
              return node.key;
            }
          },
        },
        slug: {
          type: 'String!',
          resolve(node: PostNode) {
            if (isPrismicPost(node)) {
              return node.uid && slugify(node.uid as string);
            } else {
              return node.slug;
            }
          },
        },
        publishedAt: {
          type: 'Date!',
          resolve(node: PostNode) {
            if (isPrismicPost(node)) {
              if (!node.data.published_at) {
                throw new Error(
                  `Post 의 publishedAt 필드 값이 비어있습니다. postId: ${node.postId}`,
                );
              }
              return node.data.published_at;
            } else {
              return node.publishAt;
            }
          },
        },
        thumbnailImage: {
          type: 'File!',
          resolve(node: PostNode) {
            if (isPrismicPost(node)) {
              if (!node.data.thumbnail_image.url) {
                throw new Error(
                  `Post 의 thumbnailImage 필드 값이 비어있습니다. postId: ${node.postId}`,
                );
              }
              return createRemoteFileNode({
                url: node.data.thumbnail_image.url as string,
                createNode,
                createNodeId,
                cache,
              });
            } else {
              return createRemoteFileNode({
                url: node.eyecatch,
                createNode,
                createNodeId,
                cache,
              });
            }
          },
        },
        title: {
          type: 'String!',
          resolve(node: PostNode) {
            if (isPrismicPost(node)) {
              const titleNode = node.data.title[0];
              if (!titleNode?.text) {
                throw new Error(`글 제목이 비어있습니다. postId: ${node.postId}`);
              }
              return titleNode.text;
            } else {
              return node.name;
            }
          },
        },
        summary: {
          type: 'String!',
          resolve(node: PostNode) {
            if (isPrismicPost(node)) {
              if (!node.data.summary) {
                throw new Error(`글 요약 비어있습니다. postId: ${node.postId}`);
              }
              return node.data.summary;
            } else {
              return node.body;
            }
          },
        },
        author: {
          type: 'MemberProfile',
          extensions: {
            link: {
              by: 'authorId',
              from: 'data.author.id',
            },
          },
        },
        category: {
          type: 'PostCategory',
          extensions: {
            link: {
              by: 'categoryId',
              from: 'data.category.id',
            },
          },
        },
        tags: {
          type: '[String!]!',
          resolve(node: PostNode) {
            if (isPrismicPost(node)) {
              if (!node.data.tags) {
                return [];
              }
              return node.data.tags.split(',').map((tag) => tag.trim());
            } else {
              if (!node.hashtags) {
                return [];
              }
              return node.hashtags.map((tag) => tag.hashtag.name);
            }
          },
        },
        relatedPosts: {
          type: '[Post!]!',
          extensions: {
            link: {
              by: 'postId',
            },
          },
          resolve(node: PostNode) {
            if (isPrismicPost(node)) {
              if (!node.data.related_posts || node.data.related_posts.length === 0) {
                return [];
              }
              return node.data.related_posts
                .map(({ post }) => ('id' in post ? post.id : null))
                .filter(Boolean);
            } else {
              // TODO: Note.com 연관 포스트 구현
              return [];
            }
          },
        },
        body: {
          type: '[PostBodyItem!]!',
          resolve(node: PostNode) {
            if (isPrismicPost(node)) {
              return node.data.body;
            } else {
              // Note: Note.com 상세 페이지 없음
              return [];
            }
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
                `GroupImageSection 의 image 필드 값이 비어있습니다. postId: ${parent.id}`,
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
                `GroupImageSection 의 image 필드 값이 비어있습니다. postId: ${parent.id}`,
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
          type: 'String!',
          resolve(parent: PrismicPostDataBodyGroupImageSectionSlice) {
            return parent.primary.group_image_caption;
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
        authorId: {
          type: 'String!',
          resolve(source: PrismicMemberProfileNode) {
            return source.prismicId;
          },
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
    const prismicPostCategoryNode = {
      ...node,
      id: createNodeId(`PrismicPostCategory:${node.id} >>> PostCategory`),
      parent: node.id,
      children: [],
      internal: {
        type: 'PostCategory',
        contentDigest: createContentDigest(node),
      },
    };

    actions.createNode(prismicPostCategoryNode);
    actions.createParentChildLink({ parent: node, child: prismicPostCategoryNode });
  }

  if (isNoteContentNode(node)) {
    const noteContentNode = {
      ...node,
      id: createNodeId(`NoteContent-${node.id} >>> Post`),
      parent: node.id,
      children: [],
      internal: {
        type: 'Post',
        contentDigest: createContentDigest(node),
      },
    };

    actions.createNode(noteContentNode);
    actions.createParentChildLink({ parent: node, child: noteContentNode });
  }

  if (isPrismicPostNode(node)) {
    const prismicPostNode = {
      ...node,
      id: createNodeId(`PrismicPost:${node.id} >>> Post`),
      parent: node.id,
      children: [],
      internal: {
        type: 'Post',
        contentDigest: createContentDigest(node),
      },
    };

    actions.createNode(prismicPostNode);
    actions.createParentChildLink({ parent: node, child: prismicPostNode });
  }

  if (isPrismicMemberProfile(node)) {
    const prismicMemberProfileNode = {
      ...node,
      id: createNodeId(`PrismicMemberProfile:${node.id} >>> MemberProfile`),
      parent: node.id,
      children: [],
      internal: {
        type: 'MemberProfile',
        contentDigest: createContentDigest(node),
      },
    };

    actions.createNode(prismicMemberProfileNode);
    actions.createParentChildLink({ parent: node, child: prismicMemberProfileNode });
  }
};
