import type { Context } from 'hono';
import { serveStatic as makeServe } from 'hono/serve-static';
import { mimes as baseMimes } from 'hono/utils/mime';

export const serve = makeServe<HonoEnv>({
  getContent: async (assetPath, c) => {
    console.debug(`getContent: ${assetPath}`);
    if (
      assetPath.startsWith('static/') ||
      // assets with chunk hash
      /-[a-z0-9]{20}\.(js|js\.map|css|txt)$/.test(assetPath)
    ) {
      console.debug('getContent (immutable)');
      c.header('Cache-Control', 'public, max-age=31536000, immutable');
      return await getAssetResponse('about-daangn-com-production:immutable', assetPath, c);
    } else {
      console.debug('getContent (public)');
      c.header('Cache-Control', 'public, s-maxage=8640, must-revalidate');
      return await getAssetResponse(
        `about-daangn-com-production:public:${c.env.PUBLIC_TAG}`,
        assetPath,
        c,
      );
    }
  },
  onNotFound: async (assetPath, c) => {
    console.debug(`onNotFound: ${assetPath}`);
    const notFoundPage = await getAssetResponse(
      `about-daangn-com-production:public:${c.env.PUBLIC_TAG}`,
      '404.html',
      c,
    );
    if (notFoundPage) {
      c.newResponse(notFoundPage.body, notFoundPage);
    } else {
      c.newResponse('Not found', { status: 404 });
    }
  },
  mimes: {
    ...baseMimes,
    webmanifest: 'application/manifest+json',
    map: 'application/json',
    xsl: 'text/xsl',
  },
});

async function getAssetResponse(
  cacheName: string,
  assetPath: string,
  c: Context<HonoEnv>,
): Promise<Response | null> {
  console.debug(`getAssetResponse: ${assetPath}`);

  console.debug(`cache open: ${cacheName}`);
  const cache = await caches.open(cacheName);

  let res = await cache.match(c.req.raw);
  if (res) {
    console.debug('cache hit');
    return res;
  }

  const object = await c.env.CONTENT_BUCKET.get(assetPath);
  if (!object) {
    console.debug('object not found');
    return null;
  }

  const objectHeaders = new Headers();
  object.writeHttpMetadata(objectHeaders);

  res = new Response(object.body, {
    headers: objectHeaders,
  });

  c.executionCtx.waitUntil(cache.put(c.req.raw, res.clone()));

  return res;
}
