import { useState } from 'react';

export const useToggle = (
  initialState?: boolean
): [boolean, VoidFunction, VoidFunction, VoidFunction] => {
  const [state, setState] = useState<boolean>(!!initialState);

  const open = () => {
    setState(true);
  };

  const close = () => {
    setState(false);
  };

  const toggle = () => {
    setState((state) => !state);
  };

  return [state, toggle, open, close];
};
