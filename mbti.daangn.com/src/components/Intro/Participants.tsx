import React from 'react'
import styled from '@emotion/styled'

import { numberWithCommas } from '@src/utils'
import { ParticipantState } from '@src/hooks/useParticipants'

interface Props {
  participants: ParticipantState
}

const Participants: React.FC<Props> = ({ participants }) => {
  if (participants.state === 'hasValue') {
    return (
      <ParticipantsParagraph>현재 {numberWithCommas(participants.data)}명의 이웃들이 참여했어요.</ParticipantsParagraph>
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
