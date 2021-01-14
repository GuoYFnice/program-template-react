import React from 'react';
import { Avatar,Menu,Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.module.scss';


function handleMenuClick(e:React.Attributes) {
  console.log('click', e);
}
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key='1' icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key='2' icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key='3' icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);

const HeaderSidebar: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.HeaderSidebar}>
      <h1 className={styles.HeaderSidebarTitle}>
        Program-Template-React
      </h1>
      <Dropdown overlay={menu} trigger={['click']}>
        <Avatar icon={<UserOutlined />}  className={styles.HeaderSidebarIcon}/>
      </Dropdown>
    </div>
  );
};

export default HeaderSidebar;
