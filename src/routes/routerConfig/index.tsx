// ? 一级菜单列表。
export const menus = [
  'PageOne',
  'Demo'
];
// ? 子级菜单列表。
export const menusList = [
  {
    name: 'PageOne',
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
