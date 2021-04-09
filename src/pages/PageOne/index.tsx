import React, { useState, useEffect } from 'react';
import { Map } from 'react-amap';
import styles from './index.module.scss';

const PageOne: React.FC = (): JSX.Element => {

  return (
    <>
      <div className={styles.container}>
        <div>PageOne</div>
        {/* <Map amapkey={'b193c8f7fe0b5dfef407e9af19577e96'} mapStyle={'amap://styles/651f0eca3aecea475baf22442d081729'} />, */}
      </div>
    </>
  )
};

export default PageOne;
