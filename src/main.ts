require('dotenv').config({ path: `${__dirname}/../.env` });

import Config from './config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Config.app.port);
}
bootstrap();
