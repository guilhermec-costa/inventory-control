import { Global, Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EEnv } from "src/types/EEnv";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.getOrThrow(EEnv.DB_HOST.toString()),
        username: configService.getOrThrow(EEnv.DB_USER.toString()),
        port: configService.getOrThrow(EEnv.DB_PORT.toString()),
        password: configService.getOrThrow(EEnv.DB_PASSWORD.toString()),
        database: configService.getOrThrow(EEnv.DB_DATABASE.toString()),
        autoLoadEntities: true,
        synchronize: configService.getOrThrow(
          EEnv.FORCE_SYNCHRONIZE.toString(),
        ),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
