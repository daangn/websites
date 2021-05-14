import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  max-width: 45rem;
  position: relative;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
  } ;
`
export const Base = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const PaddingContainer = styled.div`
  padding: 0 1.5rem;
  width: 100%;
`

export const clickAfterDimm = css`
  position: relative;
  overflow: hidden;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.05);
    opacity: 0;
    transition: opacity 200ms;
  }
  :active:before {
    opacity: 1;
  }
  :disabled:after {
    content: none;
  }
`
