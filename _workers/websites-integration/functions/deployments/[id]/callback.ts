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
    return json({ id: paramId, message: 'Invalid ID format' }, { status: 400 });
  }

  let stub: DurableObjectStub<Deployment>;
  try {
    stub = context.env.DEPLOYMENT.get(deploymentId);
  } catch {
    return json({ id: paramId, message: 'Not found' }, { status: 404 });
  }

  try {
    const ok = await stub.finish(result);
    if (!ok) {
      return json(
        {
          id: paramId,
          message: 'Callback failed, perhaps the deployment has already been finished',
        },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error(error);

    return json(
      {
        id: paramId,
        message: 'Internal error',
        error,
      },
      { status: 500 },
    );
  }

  return json({ id: paramId, message: 'The result has been reported successfully' });
};
