import { Inject, Injectable, Optional } from "@nestjs/common";
import { HttpClient } from "./clients/HttpClient";
import { AxiosResponse } from "axios";

@Injectable()
export class HttpService<T extends HttpClient> {
  constructor(@Optional() @Inject('HTTP_OPTIONS') private client: T) {}

  public async get<R>(url: string): Promise<AxiosResponse<R>> {
    return await this.client.get<R>(url);
  }

  public async post<R, B>(url: string, body: B): Promise<R> {
    return await this.client.post(url, body);
  }
}