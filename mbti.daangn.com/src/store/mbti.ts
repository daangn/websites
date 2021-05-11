import { atom, DefaultValue, selector, selectorFamily } from 'recoil'

import { getParticipantCount } from '@src/api'
import { MBTIValue } from '@src/constants/mbti'

export const mbtiAnswersAtom = atom<Record<string | number, MBTIValue>>({
  key: 'MbtiAnswersAtom',
  default: {},
})

export const hasValidAnswerSelector = selectorFamily<boolean, number>({
  key: 'HasValidAnswerSelector',
  get: (idx) => ({ get }) => {
    const answers = get(mbtiAnswersAtom)

    if (idx > 0) {
      let valid = true
      for (let i = 0; i < idx; i++) {
        valid = !!answers[i]
      }
      return valid
    }
    return true
  },
})

export const selectedAnswerByIndexSelector = selectorFamily<MBTIValue, number>({
  key: 'SelectedAnswerByIndexSelector',
  get: (idx) => ({ get }) => {
    const answers = get(mbtiAnswersAtom)

    return answers[idx] || null
  },
  set: (idx) => ({ set }, nextValue) => {
    if (!(nextValue instanceof DefaultValue) && nextValue) {
      set(mbtiAnswersAtom, (prev) => ({ ...prev, [idx]: nextValue }))
    }
  },
})

export const participantsCount = selector({
  key: 'participantsCountSelector',
  get: getParticipantCount,
})
