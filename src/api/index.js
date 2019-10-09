import axios from 'axios';
import config from './config';
import Qs from 'qs';

// 请求拦截
axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(response => {
  return response;
}, error => {
  let msg = null;
  if (error.response) {
    console.log(error);
    switch (error.response.status) {
      case 400:
        msg = '400：请求错误！';
        break;
      case 401:
        msg = '401：接口无权限访问！';
        setTimeout(() => {
          window.location.href = '/login';
        }, 1000);
        break;
      case 403:
        msg = '403：拒绝访问';
        break;
      case 404:
        msg = '404：接口请求不存在！';
        break;
      case 500:
        msg = '500：服务器内部错误';
        break;
      case 501:
        msg = '501：服务未实现';
        break;
      case 502:
        msg = '502：网关错误';
        break;
      case 503:
        msg = '503：服务不可用';
        break;
      case 504:
        msg = '504：网关超时';
        break;
      case 505:
        msg = '505：HTTP版本不受支持';
        break;
      default:
        break;
    }
    console.log(msg);
  }
  return Promise.reject(error);
});

/**
 * Api
 * @param method
 * @param apiUrl
 * @param params
 * @returns {Promise<AxiosResponse<any> | never>}
 * @constructor
 */
const Api = (
  method = 'GET',
  apiUrl,
  params,
) => {
  let url = null;
  if(typeof config[apiUrl] === 'function') {
    url = `${config.domain}${config[apiUrl](params)}`;
  } else {
    url = `${config.domain}${config[apiUrl]}`;
  }
  return axios({
    method: method,
    url: url,
    data: Qs.stringify(params),
    timeout: config.timeout,
    headers: config.headers
  }).then(response => {
    return response.data;
  }).catch(error => {
    return error;
  });
};

export default Api;
