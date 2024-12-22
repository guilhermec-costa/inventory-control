import { Injectable } from "@nestjs/common";
import { ProductService } from "src/product/product.service";

@Injectable({})
export class UserService {

  public async test() {
    console.log("test")
  }
}