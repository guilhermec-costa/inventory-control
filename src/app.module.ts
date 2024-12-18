import { Module } from "@nestjs/common";
import { ProductModule } from "./product/product.module";
import { ProductService } from "./product/product.service";
import { DatabaseModule } from "./db/database.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    ProductModule,
    DatabaseModule,
  ]
})
export class AppModule {}