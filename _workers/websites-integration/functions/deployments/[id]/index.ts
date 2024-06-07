import { json } from '#lib/http';
import { type Deployment } from '#lib/objects/Deployment';

export const onRequestGet: PagesFunction<Env, 'id'> = async (context) => {
  const paramId = context.params.id as string;

  let deploymentId: DurableObjectId;
  try {
    deploymentId = context.env.DEPLOYMENT.idFromString(paramId);
  } catch {
    return json({ id: paramId, message: 'Bad request (invalid id format)' }, { status: 400 });
  }

  let stub: DurableObjectStub<Deployment>;
  try {
    stub = context.env.DEPLOYMENT.get(deploymentId);
  } catch {
    return json({ id: paramId, message: 'Not found' }, { status: 404 });
  }

  try {
    const state = await stub.getCurrentState();
    return json({ id: paramId, state });
  } catch (err) {
    console.error(err);

    // @ts-ignore
    return json({ id: paramId, message: err?.message || err.toString() }, { status: 500 });
  }
};

export const onRequestPost: PagesFunction<Env, 'id'> = async (context) => {
  const paramId = context.params.id as string;
  const request = context.request as Request;
  const params = await request.json<{ run_id: string }>();

  let deploymentId: DurableObjectId;
  try {
    deploymentId = context.env.DEPLOYMENT.idFromString(paramId);
  } catch (err) {
    return json({ id: paramId, message: 'Bad request (invalid id format)' }, { status: 400 });
  }

  let stub: DurableObjectStub<Deployment>;
  try {
    stub = context.env.DEPLOYMENT.get(deploymentId);
  } catch {
    return json({ id: paramId, message: 'Not found' }, { status: 404 });
  }

  try {
    await stub.bind(params.run_id);
    return json({ id: paramId, message: 'Workflow run bound', run_id: params.run_id });
  } catch (err) {
    console.error(err);

    // @ts-ignore
    return json({ id: paramId, message: err?.message || err.toString() }, { status: 500 });
  }
};
