import { Hono } from 'hono';

import { serve } from './serve.ts';

const app = new Hono<HonoEnv>().use(serve);

export const onRequest: PagesFunction<Env> = (context) => {
  return app.fetch(context.request, context.env, context);
};
