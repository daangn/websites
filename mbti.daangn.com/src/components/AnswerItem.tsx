import React from 'react'
import styled from '@emotion/styled'

import { MBTIValue } from '@src/constants/mbti'

interface Props {
  selected: null | MBTIValue
  target: MBTIValue
  text?: string
  onSelect: (target: MBTIValue) => void
}

const AnswerItem: React.FC<Props> = ({ onSelect, selected, target, text }) => {
  return (
    <Base>
      <AnswerItemButton
        selected={target === selected}
        onClick={() => {
          if (!selected) {
            onSelect(target)
          }
        }}>
        {text}
      </AnswerItemButton>
    </Base>
  )
}

const Base = styled.li`
  margin-bottom: 1rem;
  &:last-of-type {
    margin: 0;
  }
`
const AnswerItemButton = styled.button<{ selected?: boolean }>`
  width: 100%;
  text-align: start;
  border: 1px solid ${({ theme, selected }) => (selected ? theme.colors.carrot500 : theme.colors.gray200)};
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.875rem;
  padding: 1.5rem;
  cursor: pointer;
  display: block;
  font-weight: bold;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: -0.02em;
  background: ${({ theme, selected }) => (selected ? theme.colors.carrot500 : '#fff')};
  color: ${({ theme, selected }) => (selected ? '#fff' : theme.colors.gray700)};
  transition: all 125ms;
  white-space: pre-line;
`

export default AnswerItem
