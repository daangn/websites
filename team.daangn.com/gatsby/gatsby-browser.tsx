/// <reference types="react-dom/experimental" />

import * as React from 'react';
import ReactDOM from 'react-dom';
import type { GatsbyBrowser } from 'gatsby';
import type { Callable } from '@cometjs/core';
import { IdProvider } from '@radix-ui/react-id';

export const replaceHydrateFunction = () => {
  return (element: React.ReactElement, container: Element, callback: Callable) => {
    ReactDOM.unstable_createRoot(container, {
      hydrate: true,
      hydrationOptions: { onHydrated: callback },
    }).render(element);
  };
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <React.StrictMode>
      <IdProvider>
        {element}
      </IdProvider>
    </React.StrictMode>
  );
};
