import axios, { AxiosInstance } from "axios";
import { HttpClient } from "./HttpClient";

export class ClientB implements HttpClient {
  axiosInstance: AxiosInstance;
  host: string = "https://apiB.example.com";

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.host
    });
  }
  post<B, R>(url: any, { }: R): Promise<B> {
    throw new Error("Method not implemented.");
  }

  public async get<T>(url: string): Promise<T> {
    return await this.axiosInstance.get(url); 
  }

}