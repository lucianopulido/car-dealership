import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
async function main() {
  const app = await NestFactory.create(AppModule);

  /** Esto hace que se apliquen automaticamente las validaciones a los DTOS a nivel de aplicacion */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
}
main();
