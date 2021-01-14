import React, { useReducer } from 'react';
import {IAPPState,ActionType,IAction} from '@/types/TodoDemo';

const initialState: IAPPState = {
  todos: [],
  newTodo: '',
  editTodo: '',
  finish: []
};

const methods = {
  // [ActionType.CREATE] : (state: IAPPState ,data :ITodo):IAPPState => {
    // TODO 對data 的類型單獨配置不能直接使用any
    [ActionType.CREATE] : (state: IAPPState ,data :any):IAPPState => {
    const todos:Array<any> = [...new Set([...state.todos,data.newTodo])];
    return {
      ...state,
      todos
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
  },
  [ActionType.FINISH] : (state: IAPPState ,data :any):IAPPState => {
    return {
      ...state,
      finish:data.finish
    };
  }
};

const reducer = (state: IAPPState, action: IAction): IAPPState => {
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