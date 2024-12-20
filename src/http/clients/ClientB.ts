import axios from "axios";
import { HttpClient } from "./HttpClient";

export class ClientB implements HttpClient {
  host: string = "https://apiB.example.com";

  public async get<T>(url: string): Promise<T> {
    return await axios.get(this.host + url);
  }

}