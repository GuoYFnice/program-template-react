import React, { useReducer } from 'react';
import {IAPPState,ActionType,IAction} from '@/types/TodoDemo';

const initialState: IAPPState = {
  todos: [1,2,3],
  newTodo: '',
  editTodo: ''
};

const methods = {
  // [ActionType.CREATE] : (state: IAPPState ,data :ITodo):IAPPState => {
    [ActionType.CREATE] : (state: IAPPState ,data :any):IAPPState => {
    console.log(123123);
    return {
      ...state,
      todos:[...data]
    };
  },
  [ActionType.UPDATE] : (state: IAPPState ,data :any):IAPPState => {
    return {
      ...state,
      todos:data
    };
  },
  [ActionType.DELETE] : (state: IAPPState ,data :any):IAPPState => {
    return {
      ...state,
      todos:data.newTodo
    };
  }
};

const reducer = (state: IAPPState, action: IAction): IAPPState => {
  console.log(666);
  const { type, payload } = action;
  return methods[type] ? methods[type](state, payload) : state;
};

const Context = React.createContext({
  state: initialState,
  dispatch: (() => 0) as React.Dispatch<IAction>
});

const Provider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch}}>{children}</Context.Provider>;
};

export { Provider, Context };