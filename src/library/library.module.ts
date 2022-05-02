import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandHandlers } from './commands/handlers';
import { SeriesFactory } from './factories/series.factory';
import { LibraryController } from './library.controller';
import { SeriesRepository } from './repositories/series.repository';
import { Series, SeriesSchema } from './schemas/series.schema';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: Series.name, schema: SeriesSchema }]),
  ],
  controllers: [LibraryController],
  providers: [SeriesRepository, SeriesFactory, ...CommandHandlers],
})
export class LibraryModule {}
