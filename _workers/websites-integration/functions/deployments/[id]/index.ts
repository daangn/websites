import { json } from '#lib/http';
import { type Deployment } from '#lib/objects/Deployment';

export const onRequestGet: PagesFunction<Env, 'id'> = async (context) => {
  const deploymentId = context.env.DEPLOYMENT.idFromString(context.params.id as string);

  let stub: DurableObjectStub<Deployment>;
  try {
    stub = context.env.DEPLOYMENT.getExisting(deploymentId);
  } catch {
    return json({ message: 'Not found' }, { status: 404 });
  }

  try {
    const state = await stub.getCurrentState();
    return json({ state });
  } catch (err) {
    console.error(err);

    // @ts-ignore
    return json({ message: err?.message || err.toString() }, { status: 500 });
  }
};

export const onRequestPost: PagesFunction<Env, 'id'> = async (context) => {
  const request = context.request as Request;
  const params = await request.json<{ run_id: string }>();

  const deploymentId = context.env.DEPLOYMENT.idFromString(context.params.id as string);

  let stub: DurableObjectStub<Deployment>;
  try {
    stub = context.env.DEPLOYMENT.getExisting(deploymentId);
  } catch {
    return json({ message: 'Not found' }, { status: 404 });
  }

  try {
    await stub.bind(params.run_id);
    return json({ message: 'Workflow run bound', run_id: params.run_id });
  } catch (err) {
    console.error(err);

    // @ts-ignore
    return json({ message: err?.message || err.toString() }, { status: 500 });
  }
};
