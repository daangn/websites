import React from 'react'
import { RecoilRoot } from 'recoil'

import './src/styles/global.css'

export default ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>
}
