import * as React from 'react';

export function usePrefersColorScheme(): 'light' | 'dark' {
  const [
    getSnapshot,
    getServerSnapshot,
    subscribe,
  ] = React.useMemo(() => {
    return [
      () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      () => 'light',
      (notify: () => void) => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', notify);
        return () => {
          window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', notify);
        };
      },
    ];
  }, []);

  return React.useSyncExternalStore(
    subscribe,
    typeof window !== 'undefined' ? getSnapshot : getServerSnapshot,
    getServerSnapshot,
  );
}