/// <reference types="react-dom/experimental" />

import type * as React from 'react';
import ReactDOM from 'react-dom';
import type { Callable } from '@cometjs/core';

export const replaceHydrateFunction = () => {
  return (element: React.ReactElement, container: Element, callback: Callable) => {
    ReactDOM.unstable_createRoot(container, {
      hydrate: true,
      hydrationOptions: { onHydrated: callback },
    }).render(element);
  };
};
