import axios from "axios";
import { HttpClient } from "./HttpClient";

export class ClientA implements HttpClient {
  host: string = "https://apiA.example.com";

  public async get<T>(url: string): Promise<T> {
    return await axios.get(this.host + url);
  }

}