import {
  WorkflowEntrypoint,
  type WorkflowStep,
  type WorkflowEvent,
} from 'cloudflare:workers';
import { NonRetryableError } from 'cloudflare:workflows';
import { Octokit } from '@octokit/rest';
import * as v from 'valibot';

export type DeploymentWorkflowParams = v.InferOutput<typeof DeploymentWorkflowParamsSchema>;
export const DeploymentWorkflowParamsSchema = v.object({
  workflowId: v.string(),
  ref: v.string(),
  commitSha: v.string(),
  baseUrl: v.string(),
});

export type BuildJobBindEvent = v.InferOutput<typeof BuildJobFinishedEventSchema>;
export const BuildJobBindEventSchema = v.object({
  runId: v.string(),
});

export type BuildJobFinishedEvent = v.InferOutput<typeof BuildJobFinishedEventSchema>;
export const BuildJobFinishedEventSchema = v.object({
  runId: v.string(),
  status: v.picklist(['success', 'failure', 'cancelled']),
  artifactName: v.string(),
});

export class DeploymentWorkflow extends WorkflowEntrypoint<Env, DeploymentWorkflowParams> {
  async run(event: WorkflowEvent<DeploymentWorkflowParams>, step: WorkflowStep) {
    const octokit = new Octokit({ auth: this.env.GITHUB_API_TOKEN });

    await step.do('dispatch a GitHub Actions workflow for the build', async () => {
      const { status: actionStatus } = await octokit.actions.createWorkflowDispatch({
        owner: 'daangn',
        repo: 'websites',
        workflow_id: event.payload.workflowId,
        ref: event.payload.ref,
        inputs: {
          deployment_id: event.instanceId,
          bind_url: new URL(`/deployments/${event.instanceId}`, event.payload.baseUrl).toString(),
          callback_url: new URL(`/deployments/${event.instanceId}/callback`, event.payload.baseUrl).toString(),
        },
      });
      if (actionStatus !== 204) {
        throw new Error('Failed to dispatch an action');
      }
    });

    const buildJobBindEvent = await step.waitForEvent<BuildJobBindEvent>(
      'wait for the build job to be detected',
      { type: 'build-job-bind', timeout: 1000 * 60 * 2 },
    );

    await step.do('bind the build job', async () => {
      await this.env.DEPLOYMENT_META.put(
        `deployment:${event.instanceId}:runId`,
        buildJobBindEvent.payload.runId
      );
    })

    const buildJobFinishedEvent = await step.waitForEvent<BuildJobFinishedEvent>(
      'wait for the build to complete',
      { type: 'build-job-finished', timeout: 1000 * 60 * 60 },
    );

    const { payload } = buildJobFinishedEvent;

    await step.do('check the build job result', async () => {
      if (payload.status !== 'success') {
        throw new NonRetryableError(`Build job ${payload.status}`);
      }
    })

    return payload;
  }
}
