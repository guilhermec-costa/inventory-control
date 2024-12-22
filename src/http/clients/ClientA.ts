import axios, { AxiosInstance, AxiosResponse } from "axios";
import { HttpClient } from "./HttpClient";

export class ClientA implements HttpClient {
  axiosInstance: AxiosInstance;
  host: string = "https://jsonplaceholder.typicode.com";

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.host
    });
  }

  public async post<B, R>(url: any, body: B): Promise<R> {
    return await this.axiosInstance.post<B, R>(url, body);
  }

  public async get<T>(url: string): Promise<AxiosResponse<T>> {
    return await this.axiosInstance.get<T>(url);
  }

}