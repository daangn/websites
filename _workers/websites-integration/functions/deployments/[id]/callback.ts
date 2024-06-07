import { json } from '#lib/http';
import { type Deployment, type DeploymentResult } from '#lib/objects/Deployment';

export const onRequestPost: PagesFunction<Env, 'id'> = async (context) => {
  const paramId = context.params.id as string;
  const request = context.request as Request;
  const result = await request.json<DeploymentResult>();

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
    return json({ message: 'Not Found' }, { status: 404 });
  }

  try {
    await stub.finish(result);
  } catch (err) {
    console.error(err);

    // @ts-ignore
    return json({ message: err?.message || err.toString() }, { status: 500 });
  }

  return json(null, { status: 204 });
};
