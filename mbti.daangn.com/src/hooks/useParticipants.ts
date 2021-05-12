import { useCallback, useEffect, useMemo, useReducer } from 'react'

import { getParticipantCount, postPartipantCount } from '@src/api'
import { MBTI_PARTICIPANT_KEY } from '@src/constants/mbti'

type Action =
  | {
      type: 'req_get_success'
      payload: {
        count: number
      }
    }
  | {
      type: 'req_get'
    }
  | {
      type: 'req_get_failure'
      error: any
    }
  | {
      type: 'req_post'
    }

type State =
  | {
      state: 'hasValue'
      data: number
    }
  | {
      state: 'loading'
    }
  | {
      state: 'error'
      error: any
    }

const middlewares = async (action: Action): Promise<Action | null> => {
  switch (action.type) {
    case 'req_get': {
      try {
        const count = await getParticipantCount()
        return { type: 'req_get_success', payload: { count } }
      } catch (error) {
        return { type: 'req_get_failure', error }
      }
    }
    case 'req_post': {
      if (!localStorage.getItem(MBTI_PARTICIPANT_KEY)) {
        postPartipantCount()
          .then(() => {
            localStorage.setItem(MBTI_PARTICIPANT_KEY, 'true')
          })
          .catch(() => null)
      }
    }
  }
  return null
}

function reducer(prevState: State, action: Action): State {
  switch (action.type) {
    case 'req_get_success':
      return { state: 'hasValue', data: action.payload.count }
    case 'req_get_failure': {
      return { state: 'error', error: action.error }
    }
    default:
      return prevState
  }
}

export const useParticipants = (): [State, (action: Action) => void] => {
  const [state, dispatch] = useReducer(reducer, { state: 'loading' })

  const dispatchWithMiddleware = useCallback(
    async (action: Action) => {
      dispatch(action)
      const nextAction = await middlewares(action)
      nextAction && dispatch(nextAction)
    },
    [dispatch]
  )

  useEffect(() => {
    dispatchWithMiddleware({ type: 'req_get' })
  }, [dispatchWithMiddleware])

  return useMemo(() => [state, dispatchWithMiddleware], [dispatchWithMiddleware, state])
}

export type ParticipantState = State
