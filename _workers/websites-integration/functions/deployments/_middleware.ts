import { json } from '#lib/http';

export const onRequest: PagesFunction<Env> = async (ctx) => {
  const key = ctx.env.WEBSITES_ADMIN_KEY;
  if (!key) {
    console.error('WEBSITES_ADMIN_KEY is not set properly');
    return json({ message: 'Unauthorized' }, { status: 401 });
  }

  const cred = ctx.request.headers.get('Authorization');
  if (cred !== `AdminKey ${key}`) {
    return json({ message: 'Unauthorized' }, { status: 401 });
  }

  return ctx.next();
};
