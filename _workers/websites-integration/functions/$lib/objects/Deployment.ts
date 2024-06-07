import { DurableObject } from 'cloudflare:workers';
import { Octokit } from '@octokit/rest';

declare global {
  interface Env {
    DEPLOYMENT: DurableObjectNamespace<Deployment>;
  }
}

export type DeploymentState =
  | {
      type: 'IDLE';
      runId?: string;
    }
  | {
      type: 'IN_PROGRESS';
      runId?: string;
      params: DeploymentParameters;
    }
  | {
      type: 'DONE';
      runId?: string;
      artifactName?: string;
      params?: DeploymentParameters;
      status: DeploymentBuildStatus;
    };

export type DeploymentBuildStatus = 'success' | 'failure' | 'cancelled';

export type DeploymentParameters = {
  workflow_id: string;
  ref: string;
  commit_sha: string;
};

export type DeploymentResult = {
  run_id: string;
  status: DeploymentBuildStatus;
  artifact_name: string;
};

export class Deployment extends DurableObject<Env> {
  #ctx: DurableObjectState;
  #octokit: Octokit;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.#ctx = ctx;
    this.#octokit = new Octokit({ auth: env.GITHUB_API_TOKEN });
    ctx.blockConcurrencyWhile(async () => {
      const state = await ctx.storage.get<DeploymentState>('state');
      if (!state) {
        await ctx.storage.put<DeploymentState>('state', { type: 'IDLE' });
      }
    });
  }

  get #id() {
    return this.#ctx.id.toString();
  }

  async #next(nextState: DeploymentState) {
    await this.#ctx.storage.put<DeploymentState>('state', nextState);
  }

  async getCurrentState() {
    const state = await this.#ctx.storage.get<DeploymentState>('state');
    if (!state) {
      throw new Error('not initialized');
    }
    return state;
  }

  async init(params: DeploymentParameters, bindUrl: string, callbackUrl: string) {
    const state = await this.getCurrentState();
    if (state.type !== 'IDLE') {
      throw new Error('invariant');
    }

    const { status: actionStatus } = await this.#octokit.actions.createWorkflowDispatch({
      owner: 'daangn',
      repo: 'websites',
      workflow_id: params.workflow_id,
      ref: params.ref,
      inputs: {
        deployment_id: this.#id,
        bind_url: bindUrl,
        callback_url: callbackUrl,
      },
    });
    if (actionStatus !== 204) {
      throw new Error('Failed to initialize a deployment');
    }

    const nextState: DeploymentState = {
      ...state,
      type: 'IN_PROGRESS',
      params,
    };

    await this.#next(nextState);

    return {
      state: nextState,
    };
  }

  async cancel() {
    const state = await this.getCurrentState();
    if (state.type !== 'IN_PROGRESS') {
      return;
    }

    this.#next({
      ...state,
      type: 'DONE',
      status: 'cancelled',
    });
  }

  async bind(runId: string) {
    const state = await this.getCurrentState();
    if (!state.runId) {
      this.#next({ ...state, runId });
    }
  }

  async finish(result: DeploymentResult) {
    const state = await this.getCurrentState();
    if (state.type === 'DONE') {
      throw new Error('invariant');
    }

    this.#next({
      type: 'DONE',
      runId: result.run_id,
      status: result.status,
      artifactName: result.artifact_name,
      ...(state.type === 'IN_PROGRESS' && {
        params: state.params,
      }),
    });
  }
}
