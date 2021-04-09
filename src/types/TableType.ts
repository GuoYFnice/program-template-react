export interface ArgTableProps {
  owncolumns?: any;
  queryAction?: any;
  params?: any;
  baseProps?: any;
}
export interface paginationInitialType {
  current?: number,
    pageSize?: number,
    total?: number,
}
export interface initialStateType {
  loading: boolean,
    pagination: paginationInitialType,
    dataSource: Array<any>
}
export interface actionType {
  payload?: any;
  type?: any;
}