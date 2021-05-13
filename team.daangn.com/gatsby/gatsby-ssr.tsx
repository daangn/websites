import * as React from 'react';

export const wrapRootElement = ({ element }: { element: React.ReactElement }) => {
  return (
    <React.StrictMode>
      {element}
    </React.StrictMode>
  );
};
