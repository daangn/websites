export const MBTI_RESULT_LOCALSTORAGE_KEY = 'daangn:eventMbtiResult'

export const MBTI_GROUPS = [
  ['M', ['E', 'I']],
  ['B', ['S', 'N']],
  ['T', ['T', 'F']],
  ['I', ['J', 'P']],
] as const
export type MBTIGroup = typeof MBTI_GROUPS

export type MBTIValue = MBTIGroup[number][1][number]

type MBTIReverseIndex = Record<MBTIGroup[0][1][number], MBTIGroup[0][0]> &
  Record<MBTIGroup[1][1][number], MBTIGroup[1][0]> &
  Record<MBTIGroup[2][1][number], MBTIGroup[2][0]> &
  Record<MBTIGroup[3][1][number], MBTIGroup[3][0]>

const MBTI_REVERSE_INDEX = MBTI_GROUPS.reduce((acc, curr) => {
  const [category, candidate] = curr
  return {
    ...acc,
    [candidate[0]]: category,
    [candidate[1]]: category,
  }
}, {} as MBTIReverseIndex)

const getMoreString = (arr: string[]) => {
  const strings = Object.entries(
    arr.reduce<Record<string, number>>((acc, cur) => {
      const prev = acc[cur]
      if (prev) {
        acc[cur] += 1
      } else {
        acc[cur] = 1
      }
      return acc
    }, {})
  )
  let max = { key: strings[0][0], count: strings[0][1] }
  for (let i = 1; i < strings.length; i++) {
    if (max.count < strings[i][1]) {
      max = { key: strings[i][0], count: strings[i][1] }
    }
  }
  return max.key
}

export const getMBTIResult = (selected: Record<any, MBTIValue>) => {
  const groupValueMap = Object.values(selected).reduce<Record<MBTIGroup[number][0], MBTIValue[]>>((acc, cur) => {
    const prev = acc[MBTI_REVERSE_INDEX[cur]]
    if (prev) {
      acc[MBTI_REVERSE_INDEX[cur]].push(cur)
    } else {
      acc[MBTI_REVERSE_INDEX[cur]] = [cur]
    }
    return acc
  }, {} as any)

  return MBTI_GROUPS.map(([groupKey]) => getMoreString(groupValueMap[groupKey] || [])).join('')
}
export type MBTIKind = `${MBTIGroup[0][1][number]}${MBTIGroup[1][1][number]}${MBTIGroup[2][1][number]}${MBTIGroup[3][1][number]}`

export const AVAILABLE_MBTI_RESULT_CODE: MBTIKind[] = [
  'INTJ',
  'INTP',
  'ENTJ',
  'ESFP',
  'ESTP',
  'ISFP',
  'ISTP',
  'ESFJ',
  'ESTJ',
  'ISFJ',
  'ISTJ',
  'ENFP',
  'ENFJ',
  'INFP',
  'INFJ',
  'ENTP',
  'ENTP',
]
