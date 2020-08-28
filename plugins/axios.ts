import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';


const initHeader = {
  'content-type': 'application/json'
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.BaseUrl,
  timeout: 10,
  headers: initHeader,
})


axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
  (err: AxiosError) => Promise.reject(err),
)

axiosInstance.interceptors.response.use(
  (respone: AxiosResponse) => {
    // 此处可进行统一错误处理
    return respone
  },
  (err: AxiosError) => Promise.reject(err),
)


class Request {
  public readonly axiosInstance: AxiosInstance = axiosInstance;

  public get (url: string, params?: any, headers?: any ) {
    return new Promise((resolve: (data: any) => void , reject: (data: any) => void) => {
      this.axiosInstance.get(url, { params, headers}).then((res: AxiosResponse) => {
        resolve(res.data);
      }).catch((err: AxiosError) => {
        reject(err);
      })
    })
  }

  public post (url: string, data?: any, headers?: any) {
    return new Promise((resolve: (data: any) => void , reject: (data: any) => void) => {
      this.axiosInstance.post(url, data, {headers}).then((res: AxiosResponse) => {
        resolve(res.data);
      }).catch((err: AxiosError) => {
        reject(err);
      })
    })
  }
}

export default new Request();
