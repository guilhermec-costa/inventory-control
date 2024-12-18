import { Injectable } from "@nestjs/common";

@Injectable({})
export class ProductService {

  public registerProduct(): Promise<string> {
    return Promise.resolve("product created");
  }
}