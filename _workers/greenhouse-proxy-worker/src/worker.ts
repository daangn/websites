/// <reference types="@cloudflare/workers-types" />

import { Router, listen } from 'worktop';
import * as CORS from 'worktop/cors';
import * as Base64 from 'worktop/base64';

/**
 * Greenhouse Jobboard API Key
 *
 * wrangler secret 커맨드로 관리합니다.
 *
 * @See https://app3.greenhouse.io/configure/dev_center/credentials
 * @See https://developers.cloudflare.com/workers/cli-wrangler/commands#secret
 */
declare var GH_JOBBOARD_API_KEY: string;

const API = new Router();

API.prepare = CORS.preflight();

API.add('GET', '/ping', (_req, res) => {
  res.send(200, 'pong');
});

API.add('POST', '/boards/:boardToken/jobs/:jobId/application/proxy', async (req, res) => {
  const { boardToken, jobId } = req.params;
  const greenhouseEndpoint = `https://boards-api.greenhouse.io/v1/boards/${boardToken}/jobs/${jobId}`;
  const body = await req.body.formData();

  try {
    const response = await fetch(greenhouseEndpoint, {
      method: 'POST',
      headers: {
        ...req.headers,
        'Accept': 'application/json',
        'Authorization': `Basic ${Base64.encode(`${GH_JOBBOARD_API_KEY}:`)}`,
      },
      body,
    });
    if (response.ok) {
      const origin = req.headers.get('origin');
      res.setHeader('Location', origin + '/completed/');

      return res.send(303, response.body);
    } else {
      return res.send(
        response.status,
        response.body,
        Object.fromEntries(response.headers.entries()),
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.send(500, error.message);
    }
    return res.send(500, 'Internal Server Error');
  }
});

listen(API.run);
