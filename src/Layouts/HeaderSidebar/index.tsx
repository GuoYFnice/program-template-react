import React, { useEffect, useState } from 'react';
import { Avatar, Menu, Dropdown, message } from 'antd';
import { UserOutlined,ImportOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';


const HeaderSidebar: React.FunctionComponent = (): JSX.Element => {
  let history = useHistory();
  const [userInfo, serUserInfo] = useState<Object>({})
  useEffect(() => {
    if (localStorage.getItem('userInfo') !== null) {
      let info = JSON.parse(localStorage.getItem('userInfo'));
      serUserInfo(info)
    }
  }, [])
  function handleMenuClick(e: React.Attributes) {
    if (e.key === '3') {
      localStorage.removeItem('userInfo')
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      history.push('/Login');
      message.success('LoginOut Success')
    }
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='1' icon={<UserOutlined />}>
        {userInfo.firstName}
      </Menu.Item>
      <Menu.Item key='3' icon={<ImportOutlined />}>
        LoginOut
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
