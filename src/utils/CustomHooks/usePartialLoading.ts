import { useState,useRef } from 'react';

/*
 * 进行部分加载并返回数据。
 */
const usePartialLoading = <T>(list: T[], num: number) => {
  const [state, setState] = useState({ start: 0, end: 60 });
  const containerRef = useRef<HTMLElement | null>();
  const calculateRange = (e) => {
    const height = containerRef.current.clientHeight;
    const top = Math.ceil(containerRef.current.scrollTop/num)+state.start -1;
    const bottom = top + Math.ceil(height/num) + 50;
    console.log(top,bottom);
    setState({ start: top< 0 ? 0 :top, end: bottom });
  };
  return {
    list: list.slice(state.start, state.end),
    containerProps: {
      ref: (ele: Arbitrary) => {
        containerRef.current = ele;
      },
      onScroll: (event) => {
        event.preventDefault();
        calculateRange(event);
      }
    },
    // * 子容器外层辅助容器节点参数。
    wrapperProps: {
      style: {
        width: '100%',
        marginTop: state.start * num
      }
    }
  };
};

export default usePartialLoading;