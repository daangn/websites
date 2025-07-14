import { useCallback, useState } from 'react';

export type ModalState = 'enter-active' | 'enter-done' | 'exit-active' | 'exit-done' | undefined;

export function useModalState({
  transitionDuration = 400,
}: {
  transitionDuration?: number;
}): [ModalState, () => void] {
  const [state, setState] = useState<ModalState>('exit-done');

  const toggle = useCallback(() => {
    setState((prevState) => {
      switch (prevState) {
        case 'enter-active':
        case 'exit-active': {
          return prevState;
        }
        case 'enter-done': {
          setTimeout(() => {
            setState('exit-done');
          }, transitionDuration);

          return 'exit-active';
        }
        case 'exit-done': {
          setTimeout(() => {
            setState('enter-active');
          }, 32);

          setTimeout(() => {
            setState('enter-done');
          }, transitionDuration);

          return undefined;
        }
      }
    });
  }, [transitionDuration]);

  return [state, toggle];
}
