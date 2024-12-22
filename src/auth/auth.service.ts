import { Injectable } from "@nestjs/common";
import { ProductService } from "src/product/product.service";

@Injectable()
export class AuthService {

  constructor(
    private readonly productService: ProductService
  ) {}

  public signin(): string {
    return "signed in";
  }

  public signup(): string {
    console.log(this.productService.test());
    return "signed up";
  }
}
