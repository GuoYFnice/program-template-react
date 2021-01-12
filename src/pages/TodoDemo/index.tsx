import React, { useContext, useEffect, useState } from 'react';
import { Provider, Context } from '@/store/TotoStore';
import { ActionType } from '@/types/TodoDemo';
import { Input } from 'antd';

const TodoDemo: React.FC = (): JSX.Element => {
  const { state, dispatch } = useContext(Context);
  // 内部状态 title
  const [title, changeTitle] = useState<string>('');
  useEffect(()=>{
    console.log(111,state);
  },[]);
  // 输入时更新 title
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    changeTitle(e.target.value.trim());
  }

  // 回车新增一条Todo
  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e);
    if(e.code === 'Enter'){
      // 新增
      dispatch({
        type: ActionType.CREATE,
        payload: { newTodo: title }
      });
      // 清空
      changeTitle('');
    }
  }
  return (
    <Provider>
      <section>
        <Input
          className='new-todo'
          autoComplete='off'
          placeholder='What needs to be done?'
          value={title}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        {state.todos && state.todos.map(item => (
          <div key={item}>
            {item}
          </div>
        ))}
      </section>
    </Provider>
  );
};

export default TodoDemo;
