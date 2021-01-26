import { useEffect } from 'react';

// 其功能为在 Dom 卸载之前执行相关函数，即类似于 class 组件写法中的 componentWillUnmount 生命周期钩子的功能。

const useUnmount = (fn: () => void): void => {
  useEffect(() => {
    return () => fn();
  });
};

export default useUnmount;

// 使用方法
// useUnmount(fun);