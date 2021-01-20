
export type Method =
| 'get' | 'GET'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'
| 'purge' | 'PURGE'
| 'link' | 'LINK'
| 'unlink' | 'UNLINK'


export interface AxiosRequestConfig {
  baseURL?: string;
  url?: string;
  data?: any;
  params?: any;
  method?: Method;
  headers?: any;
  timeout?: number;
  responseType?: ResponseType;
  [propName: string]: any;
}

export interface AxiosResponse {
  data: any;
  headers: any;
  request?: any;
  status: number;
  statusText: string;
  config: AxiosRequestConfig;
  [propName: string]: any;
}