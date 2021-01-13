export enum ActionType {
  // 新增Todo
  CREATE = 'create',
  // 更新Todo
  UPDATE = 'update',
  // 删除Todo
  DELETE = 'delete',
  FINISH = 'finish'
}
export interface IAPPState {
  todos: Array<any>,
  newTodo?: string,
  editTodo?: string,
  finish?: Array<any>
}
type TType =
  | 'create'
  | 'update'
  | 'delete'
  | 'finish'
export interface IAction {
  type: TType;
  payload?: IAPPState;
}