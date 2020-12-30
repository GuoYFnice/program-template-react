import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../../routes/index';
import LeftSidebar from '../LeftSidebar/index';
import styles from './index.module.scss';

const ComponentsDisplay = () => {
  return (
    <div className={styles.App}>
      <Router>
        <LeftSidebar />
        <main className={styles.mainContentRight}>
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              {routes.map((route, index) => (
                <Route key={index} path={route.path}  component={route.component} />
              ))}
              {/* 重定向路由。 */}
              <Redirect exact to="/PageOne" from='/' />
            </Switch>
          </Suspense>
        </main>
      </Router>
    </div>
  );
};

export default ComponentsDisplay;
