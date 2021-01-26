import { useRef } from 'react';

// 保存上一次渲染时 state 的值

function usePrevious<T> (state: T): T|undefined {
  const prevRef = useRef<T>();
  const curRef = useRef<T>(); 

  prevRef.current = curRef.current;
  curRef.current = state;

  return prevRef.current;
}

export default usePrevious;

// 使用方法
// const previous = usePrevious(count);