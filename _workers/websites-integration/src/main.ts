import { Hono } from 'hono';
import { bearerAuth } from 'hono/bearer-auth';
import * as v from 'valibot';
import { sValidator } from '@hono/standard-validator';

import {
  DeploymentWorkflowParamsSchema,
  BuildJobFinishedEventSchema,
  BuildJobBindEventSchema,
} from './DeploymentWorkflow.ts';

export { DeploymentWorkflow } from './DeploymentWorkflow.ts';

const app = new Hono<{ Bindings: Env }>()
  .use(async (c, next) => {
    const bearer = bearerAuth({ token: c.env.WEBSITES_ADMIN_KEY });
    return bearer(c, next);
  })

  // Create a new deployment
  .post('/deployments', sValidator('json', DeploymentWorkflowParamsSchema), async (c) => {
    const params = c.req.valid('json');
    const instance = await c.env.DEPLOYMENT_WORKFLOW.create({ params });
    return c.json({
      id: instance.id,
      bind_url: new URL(`/deployments/${instance.id}`, c.req.url).toString(),
      check_url: new URL(`/deployments/${instance.id}`, c.req.url).toString(),
      callback_url: new URL(`/deployments/${instance.id}/callback`, c.req.url).toString(),
      artifact_url: new URL(`/deployments/${instance.id}/download-artifact`, c.req.url).toString(),
    });
  })

  // Bind the build job to the deployment
  .post('/deployments/:id', sValidator('json', BuildJobBindEventSchema), async (c) => {
    const payload = c.req.valid('json');
    const instance = await c.env.DEPLOYMENT_WORKFLOW.get(c.req.param('id'));
    const status = await instance.sendEvent({ type: 'build-job-bind', payload });
    return c.json(status);
  })

  // Get the deployment status
  .get('/deployments/:id', async (c) => {
    const instance = await c.env.DEPLOYMENT_WORKFLOW.get(c.req.param('id'));
    const runId = await c.env.DEPLOYMENT_META.get(`deployment:${instance.id}:runId`);
    const status = await instance.status();
    return c.json({ ...status, runId });
  })

  // Callback from the deployment job
  .post('/deployments/:id/callback', sValidator('json', BuildJobFinishedEventSchema), async (c) => {
    const payload = c.req.valid('json');
    const instance = await c.env.DEPLOYMENT_WORKFLOW.get(c.req.param('id'));
    await instance.sendEvent({ type: 'build-job-finished', payload });
    return c.json({ id: instance.id });
  })

  // Download artifact from the completed deployment
  .get('/deployments/:id/download-artifact', async (c) => {
    const instance = await c.env.DEPLOYMENT_WORKFLOW.get(c.req.param('id'));
    const status = await instance.status();
    if (status.status !== 'complete') {
      return c.json({ message: "Coundn't download the artifact yet" }, 400);
    }
    const result = v.parse(BuildJobFinishedEventSchema, status.output);
    const object = await c.env.ARTIFACTS.get(result.artifactName);
    if (!object) {
      return c.json({ message: 'The artifact seems to be expired' }, 410);
    }
    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set('etag', object.httpEtag);
    return new Response(object.body, { headers });
  });

export type AppType = typeof app;
export default app;
