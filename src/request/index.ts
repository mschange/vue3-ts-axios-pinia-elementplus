import { AxiosInstance, AxiosRequestConfig } from "axios";

export function inject(service: AxiosInstance) {
    // request拦截器
    service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.log(config, 'config')
        // 添加token验证
        return config;
      },
      (error: any) => {
        Promise.reject(error);
      }
    );
    // response拦截器
    service.interceptors.response.use(
      (response: AxiosRequestConfig) => {
        console.log(response, 'response')
        // 对返回的数据进行错误码处理
      },
      (error: any) => {
        console.log(JSON.stringify(error));
      }
    );
  }
  
  export default inject;