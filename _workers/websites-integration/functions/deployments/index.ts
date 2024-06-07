import { json } from '#lib/http';
import { type DeploymentParameters } from '#lib/objects/Deployment';

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const request = context.request as Request;
  const url = new URL(request.url);
  const params = await request.json<DeploymentParameters>();

  const id = context.env.DEPLOYMENT.newUniqueId();
  const bindUrl = new URL(`/deployments/${id.toString()}`, url);
  const checkUrl = new URL(`/deployments/${id.toString()}`, url);
  const callbackUrl = new URL(`/deployments/${id.toString()}/callback`, url);
  const artifactUrl = new URL(`/deployments/${id.toString()}/download-artifact`, url);
  const stub = context.env.DEPLOYMENT.get(id);

  try {
    const ok = await stub.init(params, bindUrl.toString(), callbackUrl.toString());
    if (!ok) {
      return json({ id: id.toString(), message: 'Already initialized' }, { status: 400 });
    }
    return json({
      id: id.toString(),
      bind_url: bindUrl.toString(),
      check_url: checkUrl.toString(),
      callback_url: callbackUrl.toString(),
      artifact_url: artifactUrl.toString(),
    });
  } catch (error) {
    console.error(error);
    return json(
      { id: id.toString(), message: 'Failed to create a deployment', error },
      { status: 500 },
    );
  }
};
