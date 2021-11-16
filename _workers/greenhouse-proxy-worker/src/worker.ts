/// <reference types="@cloudflare/workers-types" />

import { Router, listen } from 'worktop';
import * as CORS from 'worktop/cors';
import * as Base64 from 'worktop/base64';
import { Result } from '@cometjs/core';

import type { ApplicationFormPayload } from './utils';
import { parsePayload } from './utils';

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

type RemoteForm = {
  [fieldName: string]: string,
};

interface ConvertForm {
  (form: ApplicationFormPayload): RemoteForm;
}

const convertForm: ConvertForm = form => {
  return {
    // Note: Greenhouse 는... 무려 이름을 first_name, last_name 으로 나눠서 받는다.. 심지어 둘다 필수라 생략이 불가능함
    first_name: form.name,
    // Zero-width space 나 먹어라
    last_name: '\u200b',
    email: form.email,
    phone: form.phoneNumber,
    resume_content: form.resume.content,
    resume_content_filename: form.resume.filename,

    // FIXME: Custom question id 를 알 수 없는 구조이므로 일단 CV 폼으로 때웠음
    ...form.portfolio && {
      cover_letter_content: form.portfolio.content,
      cover_letter_content_filename: form.portfolio.filename,
    },

    // TODO: Custom questions
    // See https://developers.greenhouse.io/job-board.html#retrieve-a-job
    //
    // 결국 폼빌더를 만들어서 쓰는 쪽으로 다 갈아엎어야 한다
  };
};

/**
 * @deprecated
 */
API.add('POST', '/boards/:boardToken/jobs/:jobId/application/submit', async (req, res) => {
  const { boardToken, jobId } = req.params;
  const greenhouseEndpoint = `https://boards-api.greenhouse.io/v1/boards/${boardToken}/jobs/${jobId}`;

  const form = await req.body.json<ApplicationFormPayload>();
  const parseResult = parsePayload(form);
  if (Result.isOk(parseResult)) {
    const form = Result.getExn(parseResult);
    const remoteForm = convertForm(form);
    try {
      const response = await fetch(greenhouseEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Base64.encode(`${GH_JOBBOARD_API_KEY}:`)}`,
        },
        body: JSON.stringify(remoteForm),
      });
      const data = await response.json();
      return res.send(
        response.status,
        data,
        Object.fromEntries(response.headers.entries()),
      );
    } catch (e) {
      return res.send(500, 'Internal Server Error');
    }
  } else {
    const { fields } = Result.getErrExn(parseResult);

    const reason: string[] = [];
    if (!fields.name) reason.push('이름');
    if (!fields.email) reason.push('이메일');
    if (!fields.phoneNumber) reason.push('전화번호');
    if (!fields.resume) reason.push('이력서');

    return res.send(400, `${reason.join(', ')}을(를) 입력해주세요`);
  }
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
