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

/**
 * wrangler.toml 파일에서 관리합니다.
 */
declare var GH_JOBBOARD_TOKEN: string;

const API = new Router();

API.prepare = CORS.preflight({
  origin: '*',
  headers: [
    'Cache-Control',
    'Content-Type',
    'X-Upload-Resume',
    'X-Upload-Portfolio',
  ],
  methods: ['GET', 'HEAD', 'POST'],
});

API.add('GET', '/ping', (_req, res) => {
  res.send(200, 'pong');
});

interface MakeRemoteForm {
  (props: {
    name: FormDataEntryValue | null,
    email: FormDataEntryValue | null,
    phoneNumber: FormDataEntryValue | null,
    resume: {
      filename: string,
      blob: Blob,
    } | null,
    portfolio: {
      filename: string,
      blob: Blob,
    } | null,
    veterans: FormDataEntryValue | null,
    disability: FormDataEntryValue | null,
    alternativeCivilian: FormDataEntryValue | null,
  }): FormData;
}

const makeRemoteForm: MakeRemoteForm = ({
  name,
  email,
  phoneNumber,
  resume,
  portfolio,
  veterans,
  disability,
  alternativeCivilian,
}) => {
  const missing = [];
  if (name == null) {
    missing.push('name');
  }
  if (email == null) {
    missing.push('email');
  }
  if (phoneNumber == null) {
    missing.push('phone_number');
  }
  if (resume == null) {
    missing.push('resume');
  }
  if (veterans == null) {
    missing.push('veterans');
  }
  if (disability == null) {
    missing.push('disability');
  }
  if (missing.length > 0) {
    throw new Error(`missing ${missing.join(', ')} fields are required`);
  }

  if (typeof name !== 'string') {
    throw new Error('name must be a string');
  }
  if (typeof email !== 'string') {
    throw new Error('email must be a string');
  }
  if (typeof phoneNumber !== 'string') {
    throw new Error('phone_number must be a string');
  }
  if (typeof veterans !== 'string') {
    throw new Error('veterans must be a string');
  }
  if (typeof disability !== 'string') {
    throw new Error('disability must be a string');
  }
  if (!(alternativeCivilian == null || typeof alternativeCivilian == 'string')) {
    throw new Error('alternative_civilian must be a string or null');
  }

  const veteransQuestion = 'question_5942639003';
  const veteransAnswer: Record<string, string> = {
    yes: '12699586003',
    no: '12699587003',
  };
  if (veteransAnswer[veterans] == null) {
    throw new Error(
      `veterans must be one of ${Object.keys(veteransAnswer).join(', ')}`,
    );
  }

  const disabilityQuestion = 'question_5942640003';
  const disabilityAnswer: Record<string, string> = {
    no: '12699588003',
    normal: '12699589003',
    industry: '12699590003',
    military: '12699591003',
  };
  if (disabilityAnswer[disability] == null) {
    throw new Error(
      `disability must be one of ${Object.keys(disabilityAnswer).join(', ')}`,
    );
  }

  const alternativeCivilianQuestion = 'question_6354170003';
  const alternativeCivilianAnswer: Record<string, string> = {
    yes: '1',
    no: '0',
  };
  if (alternativeCivilian != null && alternativeCivilianAnswer[alternativeCivilian]) {
    throw new Error(
      `alternativeCivilian must be one of ${Object.keys(alternativeCivilianAnswer).join(', ')}`,
    );
  }

  const formData = new FormData();
  formData.set('first_name', name);
  formData.set('last_name', '님');
  formData.set('email', email);
  formData.set('phone' , phoneNumber);
  formData.set('resume', resume!.blob, resume!.filename);

  formData.set(veteransQuestion, veteransAnswer[veterans]);
  formData.set(disabilityQuestion, disabilityAnswer[disability]);

  if (alternativeCivilian != null) {
    formData.set(alternativeCivilianQuestion, alternativeCivilianAnswer[alternativeCivilian]);
  }

  if (portfolio != null) {
    formData.set('question_5552480003', portfolio.blob, portfolio.filename);
  }

  return formData;
};

API.add('POST', '/jobs/:jobId/application/submit', async (req, res) => {
  const { jobId } = req.params;
  const greenhouseEndpoint = `https://boards-api.greenhouse.io/v1/boards/${GH_JOBBOARD_TOKEN}/jobs/${jobId}`;
  const headers = new Headers({
    'Accept': 'application/json',
    'Authorization': `Basic ${Base64.encode(`${GH_JOBBOARD_API_KEY}:`)}`,
  });

  const resumeFilename = req.headers.get('x-upload-resume');
  const portfolioFilename = req.headers.get('x-upload-portfolio');

  const formData = await req.body.formData();

  const name = formData.get('name');
  const email = formData.get('email');
  const phoneNumber = formData.get('phone_number');
  const resume = formData.get('resume');
  const portfolio = formData.get('portfolio');
  const veterans = formData.get('veterans');
  const disability = formData.get('disability');
  const alternativeCivilian = formData.get('alternative_civilian');

  let remoteFormData: FormData;
  try {
    remoteFormData = makeRemoteForm({
      name,
      email,
      phoneNumber,
      veterans,
      disability,
      alternativeCivilian,
      resume: resume && resumeFilename ? {
        filename: resumeFilename,
        blob: new Blob([Uint8Array.from(resume as unknown as Iterable<number>)]),
      } : null,
      portfolio: portfolio && portfolioFilename ? {
        filename: portfolioFilename,
        blob: new Blob([Uint8Array.from(portfolio as unknown as Iterable<number>)]),
      } : null,
    });
  } catch (e) {
    return res.send(400, e.message);
  }

  try {
    const result = await fetch(greenhouseEndpoint, {
      method: 'POST',
      headers,
      body: remoteFormData,
    });
    const data = await result.json();
    return res.send(
      data.status,
      data,
      Object.fromEntries(result.headers.entries()),
    );
  } catch (e) {
    return res.send(500, 'Internal Server Error');
  }
});

listen(API.run);
