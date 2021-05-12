import { AVAILABLE_MBTI_RESULT_CODE } from '@src/constants/mbti'

export const isValidResult = (string: string) => {
  return AVAILABLE_MBTI_RESULT_CODE.includes(string.toUpperCase() as any)
}
export const numberWithCommas = (x: number): string => {
  return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
