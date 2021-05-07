import * as React from 'react'
import { createPortal } from 'react-dom'

const Portal: React.FC = ({ children }) => {
  const [mount, setMount] = React.useState(false)

  React.useEffect(() => {
    setMount(true)
  }, [])

  if (mount) {
    return createPortal(children, document.body)
  }
  return null
}

export default Portal
