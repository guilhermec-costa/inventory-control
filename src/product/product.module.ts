import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { ProductController } from "./product.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
    ])
  ],
  providers: [
    ProductService
  ],
  exports: [
    ProductService
  ],
  controllers: [
    ProductController
  ]
})
export class ProductModule {}