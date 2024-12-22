import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { checkHeaderMiddleware } from "./middlewares/checkHeaderMiddleware";
import { AuthGuard } from "./guards/auth.guard";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({}));

  // global middleware
  app.use(checkHeaderMiddleware);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
