import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { serve } from './serve.ts';

const app = new Hono<HonoEnv>()
  // TODO: 그냥 service bindings 을 써서 same-origin 으로 만들자..
  .use(
    '/completed/',
    cors({
      origin: '*',
      allowMethods: ['HEAD', 'GET', 'OPTIONS'],
    }),
  )
  .use(serve);

export const onRequest: PagesFunction<Env> = (context) => {
  return app.fetch(context.request, context.env, context);
};
