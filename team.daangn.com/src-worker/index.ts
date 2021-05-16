import { Router } from 'worktop';
import * as Cache from 'worktop/cache';
import { preflight } from 'worktop/cors';

const API = new Router();

API.prepare = preflight({
  origin: '*',
  methods: ['GET', 'POST'],
});

API.add('GET', '/ping', async (_req, res) => {
  res.send(200, 'pong');
});

API.add('POST', '/job/:jobId/application/submit', async (req, res) => {
  const { jobId } = req.params;
  res.send(200, { jobId });
});

Cache.listen(API.run);
