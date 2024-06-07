import { createWriteStream } from 'node:fs';
import { Readable } from 'node:stream';
import { finished } from 'node:stream/promises';
import { setInterval } from 'node:timers/promises';
import { parseArgs } from 'node:util';
import prettyMilliseconds from 'pretty-ms';

import { $ } from 'zx';

const {
  WEBSITES_ADMIN_KEY,
  WEBSITES_DEPLOYMENT_ENDPOINT,

  // This script is available only on the Cloudflare Pages build, and some env vars will be injected from.
  // See https://developers.cloudflare.com/pages/configuration/build-configuration/
  CF_PAGES,
  CF_PAGES_COMMIT_SHA,
  CF_PAGES_BRANCH,
  CF_PAGES_URL,
} = process.env;

if (CF_PAGES !== '1') {
  throw new Error("deployment-awaiter should be executed only on Cloudflare Pages' build");
}

const startedAt = Date.now();

const deploymentUrl = new URL(WEBSITES_DEPLOYMENT_ENDPOINT);
const headers = new Headers({
  Authorization: `AdminKey ${WEBSITES_ADMIN_KEY}`,
});

const { values } = parseArgs({
  args: process.argv.slice(2),
  options: {
    workflow: {
      type: 'string',
    },
    timeout: {
      type: 'string',
      default: (10 * 60 * 1000).toString(), // 10 mins
    },
  },
});

const params = {
  workflow_id: values.workflow,
  ref: CF_PAGES_BRANCH,
  commit_sha: CF_PAGES_COMMIT_SHA,
};

const initResponse = await fetch(deploymentUrl, {
  method: 'POST',
  headers,
  body: JSON.stringify(params),
});
const initData = await initResponse.json();
if (!initResponse.ok) {
  console.error({ status: initResponse.status, data: initData });
  process.exit(1);
}

console.log(`Deployment(id: ${initData.id}) initialized`);

let state = initData.state;
let bound = false;

const checkUrl = new URL(initData.check_url);
const artifactUrl = new URL(initData.artifact_url);

const timeout = Number.parseInt(values.timeout);
for await (const startTime of setInterval(5000, Date.now())) {
  if (Date.now() - startTime >= timeout) {
    console.error(`Timeout exceeded (${prettyMilliseconds(timeout)})`);
    process.exit(1);
  }

  const res = await fetch(checkUrl, { headers });
  const data = await res.json();
  if (!res.ok) {
    console.error({ status: res.status, data });
    process.exit(1);
  }

  state = data.state;
  if (state.type === 'IDLE') {
    throw new Error('invariant');
  }

  let runUrl;
  if (state.runId && !bound) {
    bound = true;
    runUrl = `https://github.com/daangn/websites/actions/runs/${state.runId}`;
    console.log(`Waiting for job to finish on ${runUrl} (timeout: ${prettyMilliseconds(timeout)})`);
  }

  if (state.type === 'IN_PROGRESS') {
    continue;
  }

  if (state.type === 'DONE') {
    if (state.status === 'failure') {
      console.error(`Workflow run failed: ${runUrl}`);
      process.exit(1);
    }
    if (state.status === 'cancelled') {
      console.error(`Workflow run failed: ${runUrl}`);
      process.exit(1);
    }
    if (state.status === 'success') {
      break;
    }
  }
}

console.log('Downloading artifact...');
const downloadRes = await fetch(artifactUrl, { headers });
if (!downloadRes.ok) {
  console.error('Failed to download artifact');
  try {
    const resData = await downloadRes.json();
    console.error('status: %d, res: %o', downloadRes.status, resData);
  } catch {
    console.error('status: %d, res: %s', downloadRes.status, downloadRes.statusText);
  }
  process.exit(1);
}
const fileStream = createWriteStream('public.tar.zst');
await finished(Readable.from(downloadRes.body).pipe(fileStream));

console.log('Extracting artifact...');
await $`tar --use-compress-program="zstd -d" -xvf public.tar.zst`;

console.log(`Build is ready in ${prettyMilliseconds(Date.now() - startedAt)}`);
