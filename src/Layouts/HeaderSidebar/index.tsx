import React from 'react';
import styles from './index.module.scss';

const HeaderSidebar: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.HeaderSidebar}>
      <h1 className={styles.HeaderSidebarTitle}>
        Program-Template-React
      </h1>
    </div>
  );
};

export default HeaderSidebar;
