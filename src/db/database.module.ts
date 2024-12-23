import { DynamicModule, Global, Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Address } from "src/shared/vo/address.vo";
import { Clinic } from "src/clinic/entities/clinic.entity";
import { Doctor } from "src/clinic/entities/doctor.entity";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.getOrThrow("DB_HOST"),
        username: configService.getOrThrow("DB_USER"),
        port: configService.getOrThrow("DB_PORT"),
        password: configService.getOrThrow("DB_PASSWORD"),
        database: configService.getOrThrow("DB_DATABASE"),
        autoLoadEntities: true,
        synchronize: configService.getOrThrow("FORCE_SYNCHRONIZE"),
        entities: [
          Clinic, 
          Doctor, 
          Address
        ],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {
}
