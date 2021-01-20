import axios from 'axios';
import { message } from 'antd';
import { Method,AxiosRequestConfig } from '@/types/AxiosType';
import fmtErrMsgByStatusCode from './fmtErrMsgByStatusCode';

// api的base_url
let BASE_URL = '';
// 请求超时时间
const axiosTimeout = 10000;


// 环境的切换
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://api.xxxx/';
}


// 定义接口
interface PendingType {
  url?: string;
  method?: Method;
  params: any;
  data: any;
  cancel: (message: any) => void;
}

// 取消重复请求
const pending: Array<PendingType> = [];
const { CancelToken } = axios;

const service = axios.create({
  baseURL: BASE_URL,
  timeout: axiosTimeout
});

// 移除重复请求
const removePending = (config:AxiosRequestConfig) => {
  // eslint-disable-next-line array-callback-return
  pending.map((item:PendingType,index:number)=>{
    const list: PendingType = item;
    // 当前请求在数组中存在时执行函数体
    if (list.url === config.url && list.method === config.method && JSON.stringify(list.params) === JSON.stringify(config.params) && JSON.stringify(list.data) === JSON.stringify(config.data)) {
        // 执行取消操作
        list.cancel('操作太频繁，请稍后再试');
        // 从数组中移除记录
        pending.splice(index+1, 1);
    }
  });


// 请求拦截器
service.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = localStorage.getItem('token') || 'default';
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = token ? null : token;
    removePending(config);
    // eslint-disable-next-line no-param-reassign
    config.cancelToken = new CancelToken((c) => {
      pending.push({ url: config.url, method: config.method, params: config.params, data: config.data, cancel: c });
    });
    return config;
  },
  error => {
    return Promise.reject(error);
  });

// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    }
    return Promise.reject(response);
  },
  // 服务器状态码不是200的情况    
  // eslint-disable-next-line consistent-return
  error => {
    if (error.response.status) {
      // 显示部分错误;
      message.error(fmtErrMsgByStatusCode(error.response.status));
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径                
        // 在登录成功后返回当前页面，这一步需要在登录页操作。                
        case 401:
          break;
        // 其他错误，直接抛出错误提示                
        default:
        // message.error(error.response.data.message,1500);
      }
      return Promise.reject(error.response);
    }
  }
);
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    })
      // eslint-disable-next-line promise/always-return
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error.data);
      });
  });
}
/** 
* post方法，对应post请求 
* @param {String} url [请求的url地址] 
* @param {Object} params [请求时携带的参数] 
*/
export function post(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      // eslint-disable-next-line promise/always-return
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error.data);
      });
  });
}
/** 
* put方法，对应put请求 
* @param {String} url [请求的url地址] 
* @param {Object} params [请求时携带的参数] 
*/
export function put(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      // eslint-disable-next-line promise/always-return
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error.data);
      });
  });
}
/** 
* deleteFn方法，对应deleteFn请求 
* @param {String} url [请求的url地址] 
* @param {Object} params [请求时携带的参数] 
*/
export function deleteFn(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios.delete(url, params)
      // eslint-disable-next-line promise/always-return
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error.data);
      });
  });
}