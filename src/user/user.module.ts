import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

// it can be registered only once, in the root module for example
// then its service can be inject automatically inside any other module
@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    UserService
  ],
  exports: [
    UserService
  ]
})
export class UserModule {}
