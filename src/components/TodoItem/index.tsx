import React, { useContext } from 'react';
import { Context } from '@/store/TotoStore';
import { ActionType } from '@/types/TodoDemo';
import { Checkbox } from 'antd';

const TodoInput: React.FC = (): JSX.Element => {
  const { state , dispatch } = useContext(Context);
  const handleChange = (checkedValues: Array<any>):void => {
    dispatch({
      type: ActionType.FINISH,
      payload: { todos:[...state.todos],finish: checkedValues }
    });
  };
  return (
    <Checkbox.Group style={{ width: '100%' }} onChange={handleChange}>
      {state.todos && state.todos.map(item => (
        <div key={item}>
          <Checkbox value={item}>{item}</Checkbox>
        </div>
      ))}
    </Checkbox.Group>
  );
};
export default TodoInput;