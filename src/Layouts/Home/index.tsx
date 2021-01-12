import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../../routes';
import HeaderSidebar from '../HeaderSidebar';
import LeftSidebar from '../LeftSidebar';
import styles from './index.module.scss';

const ComponentsDisplay = () => {
  return (
    <div className={styles.App}>
      <Router>
        <HeaderSidebar/>
        <div className={styles.main}>
          <LeftSidebar />
          <main className={styles.mainContent}>
            <Suspense fallback={<div>loading...</div>}>
              <Switch>
                {routes.map((route) => (
                  <Route key={route.path} path={route.path}  component={route.component} />
              ))}
                {/* 重定向路由。 */}
                <Redirect exact to='/PageOne' from='/' />
              </Switch>
            </Suspense>
          </main>
        </div>
      </Router>
    </div>
  );
};

export default ComponentsDisplay;
