import { lazy } from 'react';

const PageOne = lazy(() => import('../pages/PageOne/index'));
const TodoDemo = lazy(() => import('../pages/TodoDemo/index'));


export const routes = [
  {
    path: '/PageOne',
    component: PageOne
  },
  {
    path: '/TodoDemo',
    component: TodoDemo
  }
];