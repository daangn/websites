import slugify from 'cjk-slug';
import { type GatsbyNode } from 'gatsby';
import { createRemoteFileNode } from 'gatsby-source-filesystem';

import {
  type PrismicAboutBlogPostImageSectionSlice,
  type PrismicAboutBlogPostNode,
  type PrismicAboutBlogPostRichTextSectionSlice,
  type PrismicMemberProfileNode,
  isPrismicAboutBlogCategoryNode,
  isPrismicAboutBlogPostNode,
  isPrismicMemberProfile,
} from './types';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  schema,
  cache,
  createNodeId,
  actions: { createNode, createTypes },
}) => {
  createTypes([
    schema.buildObjectType({
      name: 'BlogCategory',
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
      name: 'BlogPost',
      interfaces: ['Node'],
      extensions: {
        dontInfer: {},
        childOf: {
          types: ['PrismicAboutBlogPost'],
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
          resolve(node: PrismicAboutBlogPostNode) {
            return node.uid && slugify(node.uid);
          },
        },
        publishedAt: {
          type: 'Date!',
          resolve(node: PrismicAboutBlogPostNode) {
            if (!node.data.published_at) {
              throw new Error(`BlogPost 의 published_at 필드 값이 비어있습니다. prismicId: ${node.prismicId}`);
            }
            return node.data.published_at;
          },
        },
        thumbnailImage: {
          type: 'File!',
          resolve(node: PrismicAboutBlogPostNode) {
            if (!node.data.thumbnail_image.url) {
              throw new Error(`BlogPost 의 thumbnail_image 필드 값이 비어있습니다. prismicId: ${node.prismicId}`);
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
          resolve(node: PrismicAboutBlogPostNode) {
            const titleNode = node.data.title[0];
            if (!titleNode?.text) {
              throw new Error(`글 제목이 비어있습니다. prismic id: ${node.prismicId}`);
            }
            return titleNode.text;
          },
        },
        summary: {
          type: 'String!',
          resolve(node: PrismicAboutBlogPostNode) {
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
          type: 'BlogCategory!',
          extensions: {
            link: {
              by: 'prismicId',
              from: 'data.category.id',
            },
          },
        },
        tags: {
          type: '[String!]!',
          resolve(node: PrismicAboutBlogPostNode) {
            if (!node.data.tags) {
              return [];
            }
            return node.data.tags.split(',').map((tag) => tag.trim());
          },
        },
        relatedPosts: {
          type: '[BlogPost!]!',
          extensions: {
            link: {
              by: 'prismicId',
            },
          },
          resolve(node: PrismicAboutBlogPostNode) {
            if (!node.data.related_posts || node.data.related_posts.length === 0) {
              return [];
            }
            return node.data.related_posts
              .map(({ post }) => ('id' in post ? post.id : null))
              .filter(Boolean);
          },
        },
        body: {
          type: '[BlogPostBodyItem!]!',
          resolve(node: PrismicAboutBlogPostNode) {
            return node.data.body;
          },
        },
      },
    }),
    schema.buildUnionType({
      name: 'BlogPostBodyItem',
      types: ['BlogPostRichTextSection', 'BlogPostImageSection'],
      resolveType(parent: PrismicAboutBlogPostNode['data']['body'][number]) {
        switch (parent.slice_type) {
          case 'rich_text_section':
            return 'BlogPostRichTextSection';
          case 'image_section':
            return 'BlogPostImageSection';
        }
      },
    }),
    schema.buildObjectType({
      name: 'BlogPostRichTextSection',
      extensions: {
        dontInfer: {},
      },
      fields: {
        content: {
          type: 'JSON!',
          resolve(parent: PrismicAboutBlogPostRichTextSectionSlice) {
            return parent;
          },
        },
        id: {
          type: 'String!',
          resolve(parent: PrismicAboutBlogPostRichTextSectionSlice) {
            return parent.id;
          }
        },
        sliceType: {
          type: 'String!',
          resolve(parent: PrismicAboutBlogPostRichTextSectionSlice) {
            return parent.slice_type;
          }
        },
        items: {
          type: '[JSON!]!',
          resolve(parent: PrismicAboutBlogPostRichTextSectionSlice) {
            return parent.items;
          }
        },
        primary: {
          type: 'JSON!',
          resolve(parent: PrismicAboutBlogPostRichTextSectionSlice) {
            return parent.primary;
          }
        },
      },
    }),
    schema.buildObjectType({
      name: 'BlogPostImageSection',
      extensions: {
        dontInfer: {},
      },
      fields: {
        title: {
          type: 'String!',
          resolve(parent: PrismicAboutBlogPostImageSectionSlice) {
            return parent.primary.section_title[0]?.text ?? null;
          },
        },
        content: {
          type: 'JSON',
          resolve(parent: PrismicAboutBlogPostImageSectionSlice) {
            return parent.primary.section_body;
          },
        },
        thumbnails: {
          type: '[BlogPostImageSectionImage!]!',
          resolve(parent: PrismicAboutBlogPostImageSectionSlice) {
            return parent.items.map((item) => ({
              image: item.image.url,
              alt: item.image.alt,
              description: item.image_description,
            }));
          },
        },
        primary: {
          type: 'JSON',
          resolve(parent: PrismicAboutBlogPostImageSectionSlice) {
            return parent.primary;
          },
        },
        id: {
          type: 'String!',
          resolve(parent: PrismicAboutBlogPostRichTextSectionSlice) {
            return parent.id;
          }
        },
        sliceType: {
          type: 'String!',
          resolve(parent: PrismicAboutBlogPostRichTextSectionSlice) {
            return parent.slice_type;
          }
        },
        items: {
          type: '[JSON!]!',
          resolve(parent: PrismicAboutBlogPostRichTextSectionSlice) {
            return parent.items;
          }
        },
      },
    }),
    schema.buildObjectType({
      name: 'BlogPostImageSectionImage',
      extensions: {
        dontInfer: {},
      },
      fields: {
        image: {
          type: 'File!',
          resolve(parent: { image: string }) {
            return createRemoteFileNode({
              url: parent.image,
              createNode,
              createNodeId,
              cache,
            });
          },
        },
        alt: {
          type: 'String',
        },
        description: {
          type: 'JSON',
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
  if (isPrismicAboutBlogCategoryNode(node)) {
    actions.createNode({
      ...node,
      id: createNodeId(`PrismicAboutBlogCategory:${node.id} >>> BlogCategory`),
      parent: node.id,
      children: [],
      internal: {
        type: 'BlogCategory',
        contentDigest: createContentDigest(node),
      },
    });
  }

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
