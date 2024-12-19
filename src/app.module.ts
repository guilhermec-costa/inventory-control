import { Module } from "@nestjs/common";
import { ProductModule } from "./product/product.module";
import { DatabaseModule } from "./db/database.module";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductModule,
    UserModule,
    DatabaseModule,
    AuthModule,
  ],
})
export class AppModule {}
