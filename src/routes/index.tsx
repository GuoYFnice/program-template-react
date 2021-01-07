import { lazy } from 'react';

const PageOne = lazy(() => import('../pages/PageOne/index'));


export const routes = [
  {
    path: '/PageOne',
    component: PageOne
  }
];