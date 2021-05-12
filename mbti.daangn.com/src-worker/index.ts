import { Router } from 'worktop'
import * as Cache from 'worktop/cache'
import { read, write } from 'worktop/kv'
import { preflight } from 'worktop/cors'
import type { KV } from 'worktop/kv'

declare let MBTI_TEST: KV.Namespace

const API = new Router()

API.prepare = preflight({ origin: '*', methods: ['GET', 'POST'] })

const PARTICIPANT_COUNT_KEY = `count`

API.add('GET', '/participants', async (req, res) => {
  const count = (await read<number>(MBTI_TEST, PARTICIPANT_COUNT_KEY)) || 0
  res.send(200, { count })
})

API.add('POST', '/participants', async (req, res) => {
  const count = await read<number>(MBTI_TEST, PARTICIPANT_COUNT_KEY)

  await write(MBTI_TEST, PARTICIPANT_COUNT_KEY, (count || 0) + 1)

  res.send(200, { success: true })
})

Cache.listen(API.run)
