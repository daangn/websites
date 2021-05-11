/* eslint-disable @typescript-eslint/no-empty-interface */
declare module '*.svg' {
  import type * as React from 'react'
  interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

  const url: string
  export default url

  export const ReactComponent: SvgrComponent
}
