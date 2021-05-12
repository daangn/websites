import { MBTI_RESULT_LOCALSTORAGE_KEY } from '@src/constants/mbti'

export const linkResolver = () => (document) => {
  switch (document.type) {
    case 'mbti-test-result': {
      return `/results/${document.uid}/`
    }
    case 'mbti_test_question': {
      localStorage.removeItem(MBTI_RESULT_LOCALSTORAGE_KEY)
      return `/q/`
    }
  }
  return '/'
}
