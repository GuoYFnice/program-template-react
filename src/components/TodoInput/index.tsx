import React, { useContext } from 'react';
import { Context } from '@/store/TotoStore';
import { ActionType } from '@/types/TodoDemo';
import { Input } from 'antd';
import useInputBind,{ReturnType} from '@/utils/CustomHooks/useInputBind';

const TodoInput: React.FC = (): JSX.Element => {
  const { state , dispatch } = useContext(Context);
  const inputProps : ReturnType= useInputBind('');
  // 内部状态 title
  // const [title, changeTitle] = useState<string>('');
  // 输入时更新 title
  // function onChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   changeTitle(e.target.value.trim());
  // }
  // 回车新增一条Todo
  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e && e.key === 'Enter'){
      // 新增
      dispatch({
        type: ActionType.CREATE,
        payload: { todos:[...state.todos],newTodo: inputProps.value }
      });
      // 清空
      inputProps.onReset();
    }
  }
  return (
    <Input
      size='large'
      autoComplete='off'
      placeholder='What needs to do?'
      {...inputProps}
      onKeyDown={onKeyDown}
    />
  );
};
export default TodoInput;