import { json } from '#lib/http';
import { type Deployment, type DeploymentResult } from '#lib/objects/Deployment';

export const onRequestPost: PagesFunction<Env, 'id'> = async (context) => {
  const request = context.request as Request;
  const result = await request.json<DeploymentResult>();

  const deploymentId = context.env.DEPLOYMENT.idFromString(context.params.id as string);

  let stub: DurableObjectStub<Deployment>;
  try {
    stub = context.env.DEPLOYMENT.getExisting(deploymentId);
  } catch {
    return json({ message: 'Not Found' }, { status: 404 });
  }

  try {
    await stub.finish(result);
  } catch (err) {
    console.error(err);
    return json({ message: 'Bad request' }, { status: 400 });
  }

  return json(null, { status: 204 });
};
