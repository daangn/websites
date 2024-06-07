import { json } from '#lib/http';
import { type Deployment, type DeploymentState } from '#lib/objects/Deployment';

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
    stub = context.env.DEPLOYMENT.getExisting(deploymentId);
  } catch {
    return json({ message: 'Not found' }, { status: 404 });
  }

  let state: DeploymentState;
  try {
    state = await stub.getCurrentState();
  } catch (err) {
    console.error(err);

    // @ts-ignore
    return json({ message: err?.message || err.toString() }, { status: 500 });
  }

  if (state.type === 'DONE' && state.artifactName) {
    const object = await context.env.ARTIFACTS.get(state.artifactName);
    if (object) {
      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set('etag', object.httpEtag);
      return new Response(object.body, { headers });
    } else {
      return json(
        {
          id: paramId,
          message: 'Artifact seems to be expired',
          state,
        },
        { status: 410 },
      );
    }
  } else {
    return json(
      {
        id: paramId,
        message: "Coundn't donwload artifact for the deployment",
        state,
      },
      { status: 400 },
    );
  }
};
