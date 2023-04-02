import { type GatsbyNode } from 'gatsby';
import { createRemoteFileNode } from 'gatsby-source-filesystem';
import { type NoteContentNode, type NoteTextNoteNode } from 'gatsby-source-note-com/types';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  schema,
  actions,
  createNodeId,
  cache,
}) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'NoteContent',
      interfaces: ['Node'],
      extensions: {
        infer: false,
      },
      fields: {
        noteId: {
          type: 'String!',
          resolve(source: NoteContentNode) {
            return source.noteId.toString();
          },
        },
        title: {
          type: 'String!',
          resolve(source: NoteContentNode) {
            return source.name;
          },
        },
        noteUrl: {
          type: 'String!',
          resolve(source: NoteContentNode) {
            return source.noteUrl;
          },
        },
        bodyIntro: {
          type: 'String!',
          resolve(source: NoteContentNode) {
            return source.body;
          },
        },
        eyecatch: {
          type: 'File!',
          resolve(source: NoteContentNode) {
            return createRemoteFileNode({
              url: source.eyecatch,
              createNode: actions.createNode,
              createNodeId: createNodeId,
              cache,
            });
          },
        },
        hashtags: {
          type: '[String!]!',
          resolve(source: NoteContentNode) {
            if (!source.hashtags) {
              return [];
            }
            return source.hashtags.map((tag) => tag.hashtag.name);
          },
        },
        publishedAt: {
          type: 'String!',
          resolve(source: NoteContentNode) {
            return source.publishAt;
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'Note',
      interfaces: ['Node'],
      extensions: {
        infer: false,
      },
      fields: {
        noteId: {
          type: 'String!',
          resolve(source: NoteTextNoteNode) {
            return source.noteId.toString();
          },
        },
        title: {
          type: 'String!',
          resolve(source: NoteTextNoteNode) {
            return source.name;
          },
        },
        noteUrl: {
          type: 'String!',
          resolve(source: NoteTextNoteNode) {
            return source.note_url;
          },
        },
        bodyHtml: {
          type: 'String!',
          resolve(source: NoteTextNoteNode) {
            return source.body;
          },
        },
        eyecatch: {
          type: 'File!',
          resolve(source: NoteTextNoteNode) {
            return createRemoteFileNode({
              url: source.eyecatch,
              createNode: actions.createNode,
              createNodeId: createNodeId,
              cache,
            });
          },
        },
        hashtags: {
          type: '[String!]!',
          resolve(source: NoteTextNoteNode) {
            if (!source.hashtag_notes) {
              return [];
            }
            return source.hashtag_notes.map((tag) => tag.hashtag.name);
          },
        },
        publishedAt: {
          type: 'String!',
          resolve(source: NoteTextNoteNode) {
            return source.publish_at;
          },
        },
        pictures: {
          type: '[NotePicture!]!',
          resolve(source: NoteTextNoteNode) {
            return source.pictures ?? [];
          },
        },
        embeddedContents: {
          type: '[NoteEmbeddedContent!]!',
          resolve(source: NoteTextNoteNode) {
            return source.embedded_contents ?? [];
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'NotePicture',
      extensions: {
        infer: false,
      },
      fields: {
        key: {
          type: 'String!',
          resolve(source) {
            return source.key;
          },
        },
        image: {
          type: 'File!',
          resolve(source) {
            return createRemoteFileNode({
              url: source.url,
              createNode: actions.createNode,
              createNodeId,
              cache,
            });
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'NoteEmbeddedContent',
      extensions: {
        infer: false,
      },
      fields: {
        key: {
          type: 'String!',
          resolve(source) {
            return source.key;
          },
        },
        url: {
          type: 'String!',
          resolve(source) {
            return source.url;
          },
        },
        embedHtml: {
          type: 'String!',
          resolve(source) {
            return source.html_for_embed;
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
  if (node.internal.type === 'NoteContent') {
    const contentNode = {
      id: createNodeId(`NoteContent-${node.id} >>> NoteContent`),
      parent: node.id,
      children: [],
      internal: {
        type: 'Content',
        contentDigest: createContentDigest(node),
      },
    };

    actions.createNode(contentNode);
    actions.createParentChildLink({ parent: node, child: contentNode });
  }

  if (node.internal.type === 'NoteTextNote') {
    const noteNode = {
      ...node,
      id: createNodeId(`NoteTextNote-${node.id} >>> Note`),
      parent: node.id,
      children: [],
      internal: {
        type: 'Note',
        contentDigest: createContentDigest(node),
      },
    };

    actions.createNode(noteNode);
    actions.createParentChildLink({ parent: node, child: noteNode });
  }
};
