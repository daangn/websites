import { Hono } from 'hono';

const UPSTREAM = new URL('https://images.prismic.io');
const ALLOWED_REPOS = ['karrot'];

const app = new Hono<{ Bindings: Cloudflare.Env }>();

app.get('/:repo/*', async (c) => {
  const repo = c.req.param('repo');
  if (!ALLOWED_REPOS.includes(repo)) {
    return c.text('Method not allowed', 405);
  }

  const upstreamImageUrl = new URL(c.req.url);
  upstreamImageUrl.protocol = UPSTREAM.protocol;
  upstreamImageUrl.hostname = UPSTREAM.hostname;

  let response = await fetch(upstreamImageUrl, {
    cf: {
      cacheKey: upstreamImageUrl.toString(),
      cacheTtlByStatus: {
        '200-299': 86400, // 24 hours
        '404': 1,
        '500-599': 0, // bypass cache
      },
    },
  });
  response = new Response(response.body, response);
  response.headers.set('Cache-Control', 'public, max-age=3600');

  // Omit Imgix headers
  response.headers.delete('X-Cache');
  response.headers.delete('X-Content-Type-Options');
  response.headers.delete('X-Imgix-Id');
  response.headers.delete('X-Served-By');

  return response;
});

export default app;
