import { useEffect } from 'react';

// 其功能为在 Dom 渲染之后执行相关函数，即类似于 class 组件写法中的 componentDidMount 生命周期钩子的功能。

const useMount = (fn: () => void): void => {
  useEffect(() => {
    fn();
  }, [fn]);
};

export default useMount;

// 使用方法
// useMount(fun);