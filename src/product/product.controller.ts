import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Query,
  Redirect,
  Req,
  UseFilters,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { Product } from "./entities/product.entity";
import { ProductService } from "./product.service";
import { Request } from "express";
import { CreateProductDTO } from "./dto/product.dto";
import { CreateProductResponseDTO } from "./dto/create-product-response.dto";
import { ForbiddenException } from "src/exceptions/forbidden.exception";
import { HttpExceptionFilter } from "src/exceptions/http-exception.filter";
import { IncrementOnePipe } from "src/pipes/my-validation.pipe";
import { AuthGuard } from "src/guards/auth.guard";
import { Roles } from "src/decorators/roles.decorator";
import { RolesGuard } from "src/guards/roles.guard";

@Controller("product")
@UseFilters(HttpExceptionFilter)
@UseGuards(RolesGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get("findone/:id")
  @Roles(["admin"])
  async getOneProd(@Param("id", new ParseIntPipe({
    errorHttpStatusCode: HttpStatus.INTERNAL_SERVER_ERROR
  })) id: number) {
    return await this.findOne(id);  
  }

  @Get("getByUuid/:id")
  async getByUuid(@Param("id", new ParseUUIDPipe({
    errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
  })) uuid: string): Promise<string> {
    return uuid;
  }

  @Get("increment/:id")
  async increment(@Param("id", ParseIntPipe, IncrementOnePipe) id: number) {
    return id;
  }

  @Get("test")
  @UseFilters(HttpExceptionFilter)
  async test(): Promise<void> {
    // overriding default response return with a object
    throw new HttpException({
      message: "Some Error",
      detail: "detail",
    }, HttpStatus.FORBIDDEN, {
      cause: new Error(),
      description: "Some description"
    });

    throw new HttpException("erro", HttpStatus.FORBIDDEN);
    
    // throw new Error("Some Error");
    this.productService.test();
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Product[]> {
    throw new ForbiddenException();
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
  // @usePipes(new Pipe())
  public async createOne(@Body(new ValidationPipe()) payload: CreateProductDTO): Promise<CreateProductResponseDTO> {
    // validation for body can be applied using Pipes at method level
    return await this.productService.register(payload);
  }
}
