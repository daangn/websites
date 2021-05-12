import * as React from 'react'
import { createPortal } from 'react-dom'

const Portal: React.FC = ({ children }) => {
  const [mount, setMount] = React.useState(false)
  const body = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    body.current = document.body
    setMount(true)
  }, [])

  if (mount) {
    return createPortal(children, body.current!)
  }
  return null
}

export default Portal
