declare module '*.svg' {
  import type * as React from 'react';
  interface SvgrComponent extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

  const url: string;
  export default url;

  export const ReactComponent: SvgrComponent;
}
