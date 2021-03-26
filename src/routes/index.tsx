import { lazy } from 'react';

const Home = lazy(() => import('../Layouts/Home/index'));
const Login = lazy(() => import('../Layouts/Login/index'));
const PageOne = lazy(() => import('../pages/PageOne/index'));
const GameList = lazy(() => import('../pages/GameList/index'));
const TodoDemo = lazy(() => import('../pages/TodoDemo/index'));
const InfiniteRolling = lazy(() => import('../pages/InfiniteRolling/index'));

export const mainRoutes = [
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Login',
    component: Login
  }
];

export const routes = [
  {
    path: '/Home/PageOne',
    component: PageOne
  },
  {
    path: '/Home/GameList',
    component: GameList
  },
  {
    path: '/Home/TodoDemo',
    component: TodoDemo
  },
  {
    path: '/Home/InfiniteRolling',
    component: InfiniteRolling
  }
];