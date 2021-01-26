import { useEffect } from 'react';

// 使用 setTimeout/setInterval 之后自动卸载

function useTimeout(fn: () => void, delay: number, interval: boolean) {
  useEffect(() => {
    const timer = interval
      ? setInterval(() => {
        fn();
      }, delay)
      : setTimeout(() => {
        fn();
      }, delay);
    return interval
      ? () => {
        clearInterval(timer);
      }
      : () => {
        clearTimeout(timer);
      };
  }, [delay, fn, interval]);
}

export default useTimeout;


// 使用方法
// useTimeout(() => {
//   fn()
// }, 3000，true);