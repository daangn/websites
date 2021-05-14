import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { bridge } from '@src/bridge'
import Portal from '@src/components/Portal'
import { IS_DAANGN_WEBVIEW } from '@src/constants/env'

import IconClose from './icons/Close'
import IconBack from './icons/Back'

export interface NavbarProps {
  title?: React.ReactNode
  appendRight?: React.ReactNode
  iconColor: string
  theme: 'Web' | 'Cupertino' | 'Android'
  showNavigationBg?: boolean
  showClose?: boolean
}

export interface NavbarRef {
  getHeight: () => number
}

const Navbar = React.forwardRef<NavbarRef, NavbarProps>(
  ({ title, appendRight, iconColor, theme, showNavigationBg = false, showClose = false }, parentRef) => {
    const [centerTextMaxWidth, setCenterTextMaxWidth] = React.useState<undefined | number>(undefined)
    const ref = React.useRef<HTMLDivElement>(null)
    const centerRef = React.useRef<HTMLDivElement>(null)

    React.useImperativeHandle(parentRef, () => ({
      getHeight: () => ref.current?.clientHeight || 0,
    }))

    React.useEffect(() => {
      if (theme === 'Cupertino') {
        let currentClientWidth = 0
        let animationFrameId: number

        const detectMaxWidth = () => {
          animationFrameId = requestAnimationFrame(() => {
            const clientWidth = centerRef.current?.clientWidth
            if (clientWidth && clientWidth !== currentClientWidth) {
              currentClientWidth = clientWidth
              setCenterTextMaxWidth(clientWidth - 32)
            }
            detectMaxWidth()
          })
        }
        detectMaxWidth()
        return () => {
          cancelAnimationFrame(animationFrameId)
        }
      }
    }, [theme])

    const handleClickClose = () => {
      if (IS_DAANGN_WEBVIEW) {
        try {
          bridge.router.close()
        } catch {
          history.back()
        }
      } else {
        history.back()
      }
    }

    const leftIconInstance = React.useMemo(
      () =>
        showClose ? (
          <Back onClick={handleClickClose}>
            <IconClose color={iconColor} />
          </Back>
        ) : (
          <Back onClick={() => history.back()}>
            <IconBack color={iconColor} />
          </Back>
        ),
      [iconColor, showClose]
    )

    return (
      <>
        <Base navigatorTheme={theme} showNavigationBg={showNavigationBg} ref={ref} />
        <Portal>
          <Container navigatorTheme={theme} showNavigationBg={showNavigationBg}>
            <Flex>
              <Left>{leftIconInstance}</Left>
              <Center ref={centerRef} showNavigationBg={showNavigationBg} navigatorTheme={theme}>
                <h1>
                  <TitleSpan style={{ maxWidth: centerTextMaxWidth }}>{title}</TitleSpan>
                </h1>
              </Center>
              <Right>{appendRight}</Right>
            </Flex>
          </Container>
        </Portal>
      </>
    )
  }
)

interface ContainerProps {
  navigatorTheme: 'Web' | 'Cupertino' | 'Android'
  showNavigationBg: boolean
}
const Base = styled.div<ContainerProps>`
  ${(props) => {
    switch (props.navigatorTheme) {
      case 'Cupertino':
        return css`
          height: 2.75rem;
          min-height: 2.75rem;
        `
      default:
        return css`
          height: 3.5rem;
          min-height: 3.5rem;
        `
    }
  }}
  position: relative;
`
export const Container = styled(Base)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  top: 0;
  background-color: ${({ showNavigationBg }) => (showNavigationBg ? '#fff' : 'transparent')};
  z-index: 100;
  transition: background-color 250ms;
`

const Flex = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Left = styled.div`
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 1;

  &:empty {
    display: none;
  }
  svg span {
    transition: fill 450ms;
  }
`

const Back = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  opacity: 1;
  transition: opacity 300ms;
  width: 2.25rem;
  height: 2.75rem;

  &:active {
    opacity: 0.2;
    transition: opacity 0s;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

interface CenterProps {
  navigatorTheme: 'Web' | 'Cupertino' | 'Android'
  showNavigationBg: boolean
}
const Center = styled.div<CenterProps>`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  overflow: hidden;

  h1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    width: 100%;
    opacity: ${({ showNavigationBg }) => (showNavigationBg ? 1 : 0)};

    ${(props) => {
      switch (props.navigatorTheme) {
        case 'Cupertino':
          return css`
            font-family: -apple-system, BlinkMacSystemFont;
            text-align: center;
            font-weight: 600;
            font-size: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          `
        default:
          return css`
            font-family: 'Noto Sans KR', sans-serif;
            text-align: left;
            padding-left: 0.375rem;
            font-weight: 700;
            font-size: 1.1875rem;
          `
      }
    }}
  }
`
const Right = styled.div`
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
  z-index: 1;

  &:empty {
    display: none;
  }
`

const TitleSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: inherit;
  font-weight: inherit;
`
export default Navbar
