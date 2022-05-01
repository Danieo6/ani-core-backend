import Config from './config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibraryModule } from './library/library.module';
import { SynchronizationModule } from './synchronization/synchronization.module';
import { WatchListModule } from './watch-list/watch-list.module';
import { UiModule } from './ui/ui.module';

@Module({
  imports: [
    MongooseModule.forRoot(Config.app.databaseUrl),
    LibraryModule,
    SynchronizationModule,
    WatchListModule,
    UiModule,
  ],
  providers: [],
})
export class AppModule {}
