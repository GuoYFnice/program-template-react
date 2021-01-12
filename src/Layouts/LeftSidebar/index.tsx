import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { menusList } from '@/routes/RouterConfig';
import styles from './index.module.scss';

const { SubMenu } = Menu;

const LeftSidebar: React.FunctionComponent = (): JSX.Element => {
  return (
    <Menu
      className={styles.leftSidebar}
      mode='inline'
      theme='dark'
    >
      {menusList.map(item => (
        <SubMenu key={item.name} title={item.name}>
          {item.children.map(childItem => (
            <Menu.Item key={childItem.name}>
              <Link to={childItem.path}>{childItem.name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default LeftSidebar;
