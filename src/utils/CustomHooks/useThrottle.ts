import { useCallback, useRef } from 'react';

const useThrottle = (fn: ()=> void, delay = 100) => {
  const time1 = useRef<any>();

  return useCallback(() => {
    if (time1.current) {
      return;
    }
    time1.current = setTimeout(() => {
      fn();
      time1.current = null;
    }, delay);
  }, [delay, fn]);
};

export default useThrottle;