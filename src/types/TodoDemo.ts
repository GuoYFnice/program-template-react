export enum ActionType {
  // 新增Todo
  CREATE = 'create',
  // 更新Todo
  UPDATE = 'update',
  // 删除Todo
  DELETE = 'delete',
  // 删除状态是已完成的Tdo
  REMOVE_COMPLETED = 'removeCompleted',
  // 设置当前编辑的Todo
  EDIT_SET = 'setEdit',
  // 改变当前显示类型
  CHANGE_SHOW_TYPE = 'changeShowType',
  // 更新当前编辑的Todo
  UPDATE_EDIT_TODO = 'updateEditTodo',
  // 全部切换为 完成/未完成
  TOGGLE_ALL = 'toggleAll',
}
export interface IAPPState {
  todos?: Array<any>,
  newTodo?: string,
  editTodo?: string
}
type TType =
  | 'create'
  | 'update'
  | 'delete'
export interface IAction {
  type: TType;
  payload?: IAPPState;
}