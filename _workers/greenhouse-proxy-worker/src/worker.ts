import {
  compose,
  Router,
  type Context as WorktopContext,
} from 'worktop';
import { HeadersObject, reply } from 'worktop/response';
import { start } from 'worktop/cfw';
import * as CORS from 'worktop/cors';
import * as Base64 from 'worktop/base64';
import * as Cache from 'worktop/cfw.cache';

interface Context extends WorktopContext {
  bindings: {
    /**
     * Greenhouse Jobboard API Key
     *
     * wrangler secret 커맨드로 관리합니다.
     *
     * @See https://app3.greenhouse.io/configure/dev_center/credentials
     * @See https://developers.cloudflare.com/workers/cli-wrangler/commands#secret
     */
    GH_JOBBOARD_API_KEY: string;

    /**
     * Cloudflare Turnstile flag
     */
    TURNSTILE_ENABLED: boolean;

    /**
     * Cloudflare Turnstile secret key
     *
     * wrangler secret 커맨드로 관리합니다.
     *
     * @See https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
     */
    TURNSTILE_SECRET_KEY: string;
  },
}

const API = new Router<Context>();

API.prepare = compose(
  Cache.sync(),
  CORS.preflight(),
);

API.add('GET', '/ping', (_req, _ctx) => {
  return reply(200, 'pong');
});

API.add('POST', '/boards/:boardToken/jobs/:jobId/application/proxy', async (req, ctx) => {
  const { boardToken, jobId } = ctx.params;
  const greenhouseEndpoint = `https://boards-api.greenhouse.io/v1/boards/${boardToken}/jobs/${jobId}`;
  const requestBody = await req.formData();

  if (ctx.bindings.TURNSTILE_ENABLED) {
    const token = requestBody.get('cf-turnstile-response');
    const ip = req.headers.get('CF-Connecting-IP');
    if (token) {
      try {
        const formData = new FormData();
        formData.append('secret', ctx.bindings.TURNSTILE_SECRET_KEY);
        formData.append('response', token);
        if (ip) {
          formData.append('remoteip', ip);
        }

        const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
        const response = await fetch(url, {
          body: formData,
          method: 'POST',
        });
        const data = await response.json();
        if (data.success !== true) {
          return reply(403, 'Are you human? Otherwise automated request does not allowed :(');
        }
      }  catch (error) {
        if (error instanceof Error) {
          return reply(500, error.message);
        }
        return reply(500, 'Internal Server Error');
      }
    } else {
      return reply(400, 'CAPTCHA (Turnstile) token does not set');
    }
  }

  try {
    const response = await fetch(greenhouseEndpoint, {
      method: 'POST',
      headers: {
        ...req.headers,
        'Accept': 'application/json',
        'Authorization': `Basic ${Base64.encode(`${ctx.bindings.GH_JOBBOARD_API_KEY}:`)}`,
      },
      body: requestBody,
    });
    if (response.ok) {
      const origin = req.headers.get('origin');

      const responseHeaders: HeadersObject = {};
      responseHeaders['Location'] = origin + '/completed/';

      return reply(303, response.body, responseHeaders);
    } else {
      return reply(
        response.status,
        response.body,
        Object.fromEntries(response.headers.entries()),
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return reply(500, error.message);
    }
    return reply(500, 'Internal Server Error');
  }
});

export default start(API.run);
