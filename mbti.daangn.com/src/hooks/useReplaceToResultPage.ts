import React, { useMemo } from 'react'
import { navigate } from 'gatsby'

import { MBTI_RESULT_LOCALSTORAGE_KEY } from '@src/constants/mbti'
import { isValidResult } from '@src/utils'

export const useReplaceToResultPage = () => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const resultCode = localStorage.getItem(MBTI_RESULT_LOCALSTORAGE_KEY)
    const upperResultCode = resultCode?.toUpperCase()

    if (isValidResult(upperResultCode || '')) {
      navigate(`/results/${upperResultCode?.toLowerCase()}`, {
        replace: true,
      })
    } else {
      setShow(true)
    }
  }, [])

  return useMemo(() => ({ show }), [show])
}
