import React, { Suspense } from 'react';
import { Input, Button } from 'antd';
import styles from './index.module.scss';
import { useHistory } from 'react-router-dom';
import userData from '../../GameData/users.json'
import useInputBind, { ReturnType } from '@/utils/CustomHooks/useInputBind';

const Login = () => {
  let history = useHistory();
  const userName: ReturnType = useInputBind('');
  const passWord: ReturnType = useInputBind('');
  const handleLogin = () => {
    userData.map(item => {
      if (item.emailAddress === userName.value && item.password === passWord.value) {
          history.push('/Home');
          localStorage.setItem('userInfo', JSON.stringify(item))
          // 懒得改
          localStorage.setItem('id', item.userAccountId)
          localStorage.setItem('token', 'true')
      }
    })
  }
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <h2 className={styles.mainTitle}>LOGIN</h2>
        <Input
          size='large'
          autoComplete='off'
          {...userName}
          placeholder='userName'
        />
        <Input
          size='large'
          autoComplete='off'
          {...passWord}
          placeholder='passWord'
        />
        <Button onClick={handleLogin} className={styles.mainButton}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
