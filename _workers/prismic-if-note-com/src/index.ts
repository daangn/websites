import { Router } from 'itty-router';
import { makeNoteApiClient } from 'note-com-js';

import type { IntegrationFieldsFormat } from './types';

const router = Router();
const client = makeNoteApiClient();

router.get('/creators/:creator/notes', async ({ params }) => {
  if (!params.creator) {
    return new Response('Creator could not be verified. Please enter the creator', {
      status: 400,
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  try {
    const contents = await client.getUserContents(params.creator);
    const noteTexts = await Promise.all(
      contents.map((content) => {
        return client.getNoteText(content.key);
      }),
    );

    const result: IntegrationFieldsFormat = {
      results_size: noteTexts.length,
      results: noteTexts.map((note) => ({
        id: note.id.toString(),
        title: note.name,
        description: note.description,
        image_url: note.eyecatch,
        last_update: note.publish_at,
        blob: note,
      })),
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: `Internal server error: ${e}` }), {
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*',
      },
      status: 500,
    });
  }
});

router.all('*', () => new Response('Not Found.', { status: 404 }));

export default {
  async fetch(request: Request): Promise<Response> {
    return router.handle(request);
  },
};
