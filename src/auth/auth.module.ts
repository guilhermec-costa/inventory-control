import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { ProductModule } from "src/product/product.module";

@Module({
  imports: [
    ProductModule.forRoot({ isGlobal: false })
  ],
  providers: [AuthService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
