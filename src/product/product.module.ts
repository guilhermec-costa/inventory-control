import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { ProductController } from "./product.controller";
import { HttpService } from "../http/http.service";
import { ClientA } from "src/http/clients/ClientA";
import { ClientB } from "src/http/clients/ClientB";

@Module({
  imports: [
    TypeOrmModule.forFeature([Product])],
  providers: [
    ProductService,
    {
      provide: "HTTP_OPTIONS_A",
      useClass: ClientA
    },
    {
      provide: "HTTP_OPTIONS_B",
      useClass: ClientB
    },
    HttpService
  ],
  exports: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
