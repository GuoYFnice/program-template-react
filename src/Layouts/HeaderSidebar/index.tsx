import React, { useEffect, useState } from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';


const HeaderSidebar: React.FunctionComponent = (): JSX.Element => {
  let history = useHistory();
  const [userInfo, serUserInfo] = useState<Object>({})
  useEffect(() => {
    let info = JSON.parse(localStorage.getItem('userInfo'))
    serUserInfo(info)
  }, [])
  function handleMenuClick(e: React.Attributes) {
    if (e.key === '3') {
      localStorage.removeItem('userInfo')
      localStorage.removeItem('token')
      history.push('/Login');
    }
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='1' icon={<UserOutlined />}>
        {userInfo.firstName}
      </Menu.Item>
      <Menu.Item key='2' icon={<UserOutlined />}>
        {userInfo.lastName}
      </Menu.Item>
      <Menu.Item key='3' icon={<UserOutlined />}>
        注销
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.HeaderSidebar}>
      <h1 className={styles.HeaderSidebarTitle}>
        Program-Template-React
      </h1>
      <Dropdown overlay={menu} trigger={['click']}>
        <Avatar icon={<UserOutlined />} className={styles.HeaderSidebarIcon} />
      </Dropdown>
    </div>
  );
};

export default HeaderSidebar;
