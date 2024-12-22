import axios, { AxiosInstance, AxiosResponse } from "axios";

export interface HttpClient {
  host: string;
  axiosInstance: AxiosInstance;

  get<T>(url: string): Promise<AxiosResponse<T>>;
  post<B, R>(url, {}: R): Promise<B>;
}