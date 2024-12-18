import { Module } from "@nestjs/common";
import { ProductModule } from "./product/product.module";
import { DatabaseModule } from "./db/database.module";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    ProductModule,
    DatabaseModule,
    UserModule
  ],
})
export class AppModule {}