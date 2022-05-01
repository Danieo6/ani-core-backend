import Config from './config';
import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
  imports: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
