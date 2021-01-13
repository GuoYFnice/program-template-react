import React, { useContext, useState } from 'react';
import { Context } from '@/store/TotoStore';
import { ActionType } from '@/types/TodoDemo';
import { Input } from 'antd';

const TodoInput: React.FC = (): JSX.Element => {
  const { state , dispatch } = useContext(Context);
  // 内部状态 title
  const [title, changeTitle] = useState<string>('');
  // 输入时更新 title
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    changeTitle(e.target.value.trim());
  }
  // 回车新增一条Todo
  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e && e.code === 'Enter'){
      // 新增
      dispatch({
        type: ActionType.CREATE,
        payload: { todos:[...state.todos],newTodo: title }
      });
      // 清空
      changeTitle('');
    }
  }
  return (
    <Input
      autoComplete='off'
      placeholder='What needs to be done?'
      value={title}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
export default TodoInput;