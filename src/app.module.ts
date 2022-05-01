import { Module } from '@nestjs/common';
import { LibraryModule } from './library/library.module';
import { SynchronizationModule } from './synchronization/synchronization.module';
import { WatchListModule } from './watch-list/watch-list.module';
import { UiModule } from './ui/ui.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    LibraryModule,
    SynchronizationModule,
    WatchListModule,
    UiModule,
  ],
  providers: [],
})
export class AppModule {}
