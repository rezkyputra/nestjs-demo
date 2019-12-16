import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const option = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cat API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, option);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  Logger.log(`server jalan pada http://localhost:${port}`, 'Running');
}
bootstrap();
