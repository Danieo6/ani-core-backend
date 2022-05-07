import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { GenreFactory } from './factories/genre.factory';
import { SeriesFactory } from './factories/series.factory';
import { LibraryController } from './library.controller';
import { GenreRepository } from './repositories/genre.repository';
import { SeriesRepository } from './repositories/series.repository';
import { Genre, GenreSchema } from './schemas/genre.schema';
import { Series, SeriesSchema } from './schemas/series.schema';
import { GenreService } from './services/genre.service';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      { name: Series.name, schema: SeriesSchema },
      { name: Genre.name, schema: GenreSchema },
    ]),
  ],
  controllers: [LibraryController],
  providers: [
    SeriesRepository,
    SeriesFactory,
    GenreRepository,
    GenreFactory,
    GenreService,
    ...CommandHandlers,
    ...EventHandlers,
  ],
})
export class LibraryModule {}
