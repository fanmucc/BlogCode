import Axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

type Result<T> = {
  code: number;
  message: string;
  result: T;
};

export class Request {
  // axios 实例
  instance: AxiosInstance
  // 基础配置，url和超时时间
  baseConfig: AxiosRequestConfig = { baseURL: "/api", timeout: 60000 }
  constructor(config: AxiosRequestConfig) {
    // 使用axios.create创建axios实例，配置为基础配置和我们传递进来的配置
    this.instance = Axios.create(Object.assign(this.baseConfig, config))
    // 处理请求时的一些处理
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 一般会请求拦截里面加token，用于后端的验证
        const token = localStorage.getItem("token") as string
        if (token) {
          config.headers!.Authorization = token;
        }

        return config;
      },
      (err: any) => {
        // 请求错误，这里可以用全局提示框进行提示
        return Promise.reject(err);
      }
    );
    // 处理相应的一些处理
    this.instance.interceptors.response.use((res: AxiosResponse) => {
      // 直接返回res，当然你也可以只返回res.data
      // 系统如果有自定义code也可以在这里处理
      return res;
    }, (err: any) => {
      // 也可以使用一些公共组件弹窗错误信息
      return Promise.reject(err.response);
    })
  }
  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.get(url, config);
  }
}

// 默认导出Request实例
export default new Request({})