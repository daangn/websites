/// <reference types="@cloudflare/workers-types" />

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event: FetchEvent) {
  const pathname = new URL(event.request.url).pathname;

  return new Response(`'${pathname}' not found`, {
    status: 404,
    statusText: 'not found',
  });
}
