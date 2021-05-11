import React from 'react'
import styled from '@emotion/styled'
import { useRecoilValueLoadable } from 'recoil'

import { participantsCount } from '@src/store/mbti'
import { numberWithCommas } from '@src/utils'

const Participants: React.FC = () => {
  const count = useRecoilValueLoadable(participantsCount)

  if (count.state === 'hasValue') {
    return (
      <ParticipantsParagraph>현재 {numberWithCommas(count.contents)}명의 이웃들이 참여했어요.</ParticipantsParagraph>
    )
  }
  return <ParticipantsParagraph>&nbsp;</ParticipantsParagraph>
}

export const ParticipantsParagraph = styled.p`
  margin: 0 0 0.5rem;
  font-weight: bold;
  font-size: 0.8125rem;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #505356;
`

export default Participants
