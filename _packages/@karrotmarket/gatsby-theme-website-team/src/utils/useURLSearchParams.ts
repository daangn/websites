import * as React from 'react';

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
    typeof window !== 'undefined' ? getSnapshot : getServerSnapshot,
    getServerSnapshot,
  );

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
