import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Parking service')
    .setDescription(
      'Uma API para controle de estacionamento, registro de estabelecimentos e de veículos!',
    )
    .setVersion('1.0')
    .addTag('Auth', 'Autenticação de usuário, com JWT')
    .addTag('Users', 'Adicão e remoção de usuários para acesso as demais rotas')
    .addTag('Establishments', 'CRUD dos estabelecimentos')
    .addTag('Vehicles', 'CRUD dos veículos')
    .addTag('Entrys', 'Sistema de gerenciamento do estacionamento')
    .addBearerAuth(
      {
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Auth',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
