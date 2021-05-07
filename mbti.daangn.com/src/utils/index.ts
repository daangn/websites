import { AVAILABLE_MBTI_RESULT_CODE } from '@src/constants/mbti'

export const isValidResult = (string: string) => {
  return AVAILABLE_MBTI_RESULT_CODE.includes(string.toUpperCase() as any)
}
