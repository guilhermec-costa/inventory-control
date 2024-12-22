import { DynamicModule, Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { ProductController } from "./product.controller";
import { HttpService } from "../http/http.service";
import { ClientA } from "src/http/clients/ClientA";
import { ClientB } from "src/http/clients/ClientB";
import { UserModule } from "src/user/user.module";
import { TestService } from "./test.service";
import { LoggerMiddleware } from "src/middlewares/loggerMiddleware.middleware";
import { AuthController } from "src/auth/auth.controller";

// feature module
// modules are singletons. Best practice is to provide services inside a single module that is related,
// and not register that service in other modules.
// in this way, a single instance of the service is shared across multiple modules
@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
  ],
  providers: [
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
export class ProductModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)      
      // exclude routes (strings or route objects)
      .exclude("product/test")

      // apply to routes (string, route objects, controller classes)
      .forRoutes({
        // pattern based routes are supported
        method: RequestMethod.GET,
        path: "product"
      }, AuthController);
  }

  // é um complemento à definição original do módulo. Não SOBRESCREVE. EXTENDE as configurações principais do módulo
  static forRoot({ isGlobal }): DynamicModule {
    return {
      global: isGlobal,
      module: ProductModule,
      providers: [
        TestService,
        ProductService,
      ],
      exports: [
        TestService,
        ProductService,
      ]
    }
  }
}
