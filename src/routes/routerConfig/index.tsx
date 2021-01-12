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
        path: '/PageOne'
      }
    ]
  },
  {
    name: 'Demo',
    children: [
      {
        name: 'TodoDemo',
        path: '/TodoDemo'
      }
    ]
  }
];
