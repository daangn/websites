/// <reference types="@cloudflare/workers-types" />

import { Router } from 'worktop';
import * as CORS from 'worktop/cors';
import * as Cache from 'worktop/cache';
import { JobBoardClientV1 } from 'greenhouse-jobboard-js';

const API = new Router();

API.prepare = CORS.preflight();

const MAX_PER_PAGE = 50;

API.add('GET', '/if/boards/:boardToken/jobs', async (req, res) => {
  const { boardToken } = req.params;
  const page = +(req.query.get('page') || 1);
  const offset = (page - 1) * MAX_PER_PAGE;

  const jobBoardClient = new JobBoardClientV1({
    boardToken,
    client: jsonClient,
  });

  const jobs = await jobBoardClient.getJobListWithContent();
  const jobsSlice = jobs.slice(offset, MAX_PER_PAGE);

  const result: IntegrationFieldsFormat = {
    results_size: jobs.length,
    results: jobsSlice.map(job => ({
      id: job.id.toString(),
      title: job.title,
      description: '',
      image_url: '',
      last_update: new Date(job.updated_at).getTime(),
      blob: job,
    })),
  };

  res.send(200, result);
});

API.add('GET', '/if/boards/:boardToken/departments', async (req, res) => {
  const { boardToken } = req.params;
  const page = +(req.query.get('page') || 1);
  const offset = (page - 1) * MAX_PER_PAGE;

  const jobBoardClient = new JobBoardClientV1({
    boardToken,
    client: jsonClient,
  });

  const departments = await jobBoardClient.getDepartmentList();
  const leafDepartments = departments
    .filter(department => department.id !== 0)
    .filter(department => !department.child_ids.length);
  const departmentsSlice = leafDepartments.slice(offset, MAX_PER_PAGE);

  const result: IntegrationFieldsFormat = {
    results_size: leafDepartments.length,
    results: departmentsSlice.map(department => ({
      id: department.id.toString(),
      title: department.name,
      description: '',
      image_url: '',
      last_update: Date.now(),
      blob: department,
    })),
  };

  res.send(200, result);
});

Cache.listen(API.run);

type IntegrationFieldsFormat = {
  results_size: number,
  results: IntegrationFieldsItem[],
};

type IntegrationFieldsItem = {
  id: string,
  title: string,
  description: string,
  image_url: string,
  last_update: number,
  blob: unknown,
};

const jsonClient = {
  async get(url: URL) {
    try {
      const response = await fetch(url.toString());
      const body = await response.json();
      return body;
    } catch (cause) {
      throw new Error(
        `Failed to fetch the resource from job board: ${url.toString()}`,
        // @ts-ignore
        { cause },
      );
    }
  },
};
