import axios from 'axios'

const mbtiTestWorker = axios.create({
  baseURL: 'https://mbti-test.karrot.workers.dev',
})

export const getParticipantCount = async () => {
  const { data } = await mbtiTestWorker.get<{ count: number }>('/participants')
  return data.count
}

export const postPartipantCount = async () => {
  const data = await mbtiTestWorker.post<{ success: boolean }>('/participants')
  return data.data.success
}
