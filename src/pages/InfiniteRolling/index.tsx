import React, { useEffect, useState } from 'react';
import usePartialLoading from '@/utils/CustomHooks/usePartialLoading';
import styles from './index.module.scss';

const InfiniteRolling: React.FC = (): JSX.Element => {
  // const [list, setList] = useState<Array<number>>([...new Array(60).keys()]);
  const [itemHeight, setItemHeight] = useState<number>(60);
  const { list, containerProps, wrapperProps } = usePartialLoading<number>([...new Array(6000000).keys()], itemHeight);
  return (
    <main className={styles.main}>
      <h1 className={styles.Title}>InfiniteRolling</h1>
      <div {...containerProps} className={styles.InfiniteRolling}>
        <div  {...wrapperProps}>
          {list.map(item => (
            <div key={item} style={{ height: `${itemHeight}px` }}>
              { item}
            </div>
          ))}
          <div />
        </div>
      </div>
    </main>
  );
};

export default InfiniteRolling;
