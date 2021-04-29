import * as React from 'react';
import { IdProvider } from '@radix-ui/react-id';

export const wrapRootElement = ({ element }: { element: React.ReactElement }) => {
  return (
    <React.StrictMode>
      <IdProvider>
        {element}
      </IdProvider>
    </React.StrictMode>
  );
};
