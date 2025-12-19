// @ts-check

/**
 * @import { AppType } from './src/main.ts'
 */

import { createWriteStream } from 'node:fs';
import { Readable } from 'node:stream';
import { finished } from 'node:stream/promises';
import { setInterval } from 'node:timers/promises';
import { parseArgs } from 'node:util';
import { hc } from 'hono/client';
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

/** 
 * @typedef {ReturnType<typeof hc<AppType>>} Client
 * @type {Client}
 */
const client = hc(WEBSITES_DEPLOYMENT_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${WEBSITES_ADMIN_KEY}`,
  },
});

const params = {
  workflow_id: values.workflow,
  ref: CF_PAGES_BRANCH,
  commit_sha: CF_PAGES_COMMIT_SHA,
};

const initResponse = await client.deployments.$post({ json: params });
if (!initResponse.ok) {
  console.error(await initResponse.text(), initResponse);
  process.exit(1);
}

const initData = await initResponse.json();
console.log(`Deployment(id: ${initData.id}) initialized`);

const timeout = Number.parseInt(values.timeout);

let bound = false;
let runUrl;

for await (const startTime of setInterval(5000, Date.now())) {
  if (Date.now() - startTime >= timeout) {
    console.error(`Timeout exceeded (${prettyMilliseconds(timeout)})`);
    process.exit(1);
  }

  const checkResponse = await client.deployments[':id'].$get({
    param: {
      id: initData.id,
    },
  });
  if (!checkResponse.ok) {
    console.error(await checkResponse.text(), checkResponse);
    process.exit(1);
  }
  const { runId, status } = await checkResponse.json();
  if (!bound && runId) {
    bound = true;
    runUrl = `https://github.com/daangn/websites/actions/runs/${runId}`;
    console.log(
      `Waiting for job to finish on ${runUrl} (timeout: ${prettyMilliseconds(timeout)})`,
    );
  }

  if (status === 'errored' || status === 'terminated') {
    console.error(`Workflow run failed: ${runUrl}`);
    process.exit(1);
  }
 
  if (status === 'complete') {
    break;
  }
}

console.log('Downloading artifact...');
const downloadResponse = await client.deployments[':id']['download-artifact'].$get({
  param: {
    id: initData.id,
  },
});
if (!downloadResponse.ok) {
  console.error('Failed to download artifact');
  try {
    const downloadData = await downloadResponse.json();
    console.error('status: %d, res: %o', downloadResponse.status, downloadData);
  } catch {
    console.error('status: %d, res: %s', downloadResponse.status, downloadResponse.statusText);
  }
  process.exit(1);
}
const fileStream = createWriteStream('public.tar.zst');
await finished(Readable.from(downloadResponse.body).pipe(fileStream));

console.log('Extracting artifact...');
await $`tar --use-compress-program="zstd -d" -xvf public.tar.zst`;

console.log(`Build is ready in ${prettyMilliseconds(Date.now() - startedAt)}`);
