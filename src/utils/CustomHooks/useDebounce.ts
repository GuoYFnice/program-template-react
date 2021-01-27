import { useCallback, useRef } from 'react';

const useDebounce = (fn: ()=> void, delay = 100) => {
  const time1 = useRef<any>();

  return useCallback((...args) => {
    if (time1.current) {
      clearTimeout(time1.current);
    }
    time1.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }, [delay, fn]);
};

export default useDebounce;