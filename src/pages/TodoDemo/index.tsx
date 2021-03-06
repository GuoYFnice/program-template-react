import React from 'react';
import { Provider } from '@/store/TotoStore';
import TodoInput from '@/components/TodoInput';
import TodoItem from '@/components/TodoItem';
import styles from './index.module.scss';

const TodoDemo: React.FC = (): JSX.Element => {

  return (
    <main className={styles.main}>
    <Provider>
      <h1 className={styles.TodoTitle}>todos</h1>
      <section className={styles.TodoDemo}>
        <TodoInput />
        <TodoItem />
      </section>
    </Provider>
    </main>
  );
};

export default TodoDemo;
