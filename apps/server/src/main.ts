import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Todos')
    .setDescription('Todos api documentation')
    .setVersion('1')
    .addTag('Todos')
    .build();

  const docs = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, docs);

  const port = process.env.NEST_PORT || 3001;
  await app.listen(port);
  console.log('listening on port %s ..', port);
}
bootstrap();
