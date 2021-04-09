// ? 一级菜单列表。
export const menus = [
  'PageOne',
  'Demo'
];
// ? 子级菜单列表。
export const menusList = [
  {
    name: 'PageOne',
    path: '/Home',
    children: [
      {
        name: 'PageOne',
        path: '/Home/PageOne'
      },
      {
        name: 'GameList',
        path: '/Home/GameList'
      }
    ]
  },
  {
    name: 'Demo',
    path: '/Home',
    children: [
      {
        name: 'TodoDemo',
        path: '/Home/TodoDemo'
      },
      {
        name: 'InfiniteRolling',
        path: '/Home/InfiniteRolling'
      }
    ]
  }
];
