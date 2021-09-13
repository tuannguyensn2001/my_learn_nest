import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors:true
  });

  const config = new DocumentBuilder()
    .setTitle('My Learn API')
    .setDescription('Test API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document);


  // app.enableCors();

  await app.listen(8080);
}

bootstrap();
