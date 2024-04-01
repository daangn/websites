import * as React from 'react';
import { isBrowser } from './common';

export function useURLSearchParams(): URLSearchParams {
  const [getSnapshot, getServerSnapshot, subscribe] = React.useMemo(() => {
    return [
      () => window.location.search,
      () => '',
      (notify: () => void) => {
        window.addEventListener('hashchange', notify);
        return () => {
          window.removeEventListener('hashchange', notify);
        };
      },
    ] as const;
  }, []);

  const search = React.useSyncExternalStore(
    subscribe,
    isBrowser ? getSnapshot : getServerSnapshot,
    getServerSnapshot,
  );

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
