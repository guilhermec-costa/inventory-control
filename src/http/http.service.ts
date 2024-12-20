import { Inject, Injectable, Optional } from "@nestjs/common";
import { HttpClient } from "./clients/HttpClient";

@Injectable()
export class HttpService<T extends HttpClient> {
  constructor(@Optional() @Inject('HTTP_OPTIONS') private client: T) {}

  public async get<R>(url: string): Promise<R> {
    return await this.client.get<R>(url);
  }
}