import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Redirect,
  Req,
} from "@nestjs/common";
import { Product } from "./entities/product.entity";
import { ProductService } from "./product.service";
import { Request } from "express";
import { CreateProductDTO } from "./dto/product.dto";
import { CreateProductResponseDTO } from "./dto/create-product-response.dto";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get("test")
  async test(): Promise<void> {
    this.productService.test();
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Get("one")
  @HttpCode(HttpStatus.OK)
  public async findOne(
    @Query("id", ParseIntPipe) id: number,
  ): Promise<Product> {
    let p: Product = await this.productService.findOne(id);
    if(!p) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return p;
  }

  @Get("test-redirecting-*")
  @HttpCode(HttpStatus.OK)
  @Header("common-header", "common-value")
  @Redirect("http://localhost:3000/product/one?id=1", HttpStatus.FOUND)
  public async test2() {
    return "hello";
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async createOne(@Body() payload: CreateProductDTO): Promise<CreateProductResponseDTO> {
    return await this.productService.register(payload);
  }
}
