import { lazy } from 'react';

const PageOne = lazy(() => import('../pages/PageOne/index'));
const TodoDemo = lazy(() => import('../pages/TodoDemo/index'));
const InfiniteRolling = lazy(() => import('../pages/InfiniteRolling/index'));


export const routes = [
  {
    path: '/PageOne',
    component: PageOne
  },
  {
    path: '/TodoDemo',
    component: TodoDemo
  },
  {
    path: '/InfiniteRolling',
    component: InfiniteRolling
  }
];